import test from 'node:test';
import assert from 'node:assert/strict';
import { initialSearchConsoleData, initialAnalyticsData } from '../data/auditData';
import { novemberPosts } from '../data/novemberCampaign';
import { decemberPosts } from '../data/decemberCampaign';

test('Search Console queries have positive clicks and valid CTR calculations', () => {
  for (const q of initialSearchConsoleData.topQueries) {
    assert.ok(q.clicks > 0, `Query ${q.query} should have clicks > 0`);
    assert.ok(q.impressions >= q.clicks, `Query ${q.query} impressions must be >= clicks`);
    const expectedCtr = Number(((q.clicks / q.impressions) * 100).toFixed(1));
    assert.ok(Math.abs(q.ctr - expectedCtr) < 0.5, `CTR for ${q.query} is roughly consistent with math`);
  }
});

test('Analytics sessions add up to approximately 100% share', () => {
  const totalShare = initialAnalyticsData.topChannels.reduce((acc, c) => acc + c.share, 0);
  assert.ok(totalShare >= 99.0 && totalShare <= 101.0, 'Total channel share must sum to ~100%');
});

test('November and December campaigns have all required post formats', () => {
  const formats = ['showcase', 'fb-text', 'square', 'reel', 'landscape'];
  
  for (const fmt of formats) {
    const novCount = novemberPosts.filter(p => p.format === fmt).length;
    const decCount = decemberPosts.filter(p => p.format === fmt).length;
    assert.ok(novCount > 0, `November should have posts of format: ${fmt}`);
    assert.ok(decCount > 0, `December should have posts of format: ${fmt}`);
  }
});

test('All animated reels and landscape posts have mp4Url defined and .mp4 extension', () => {
  const allAnimated = [...novemberPosts, ...decemberPosts].filter(p => p.isAnimated);
  assert.equal(allAnimated.length, 16, 'There must be exactly 16 animated posts (8 reels + 8 landscape)');

  for (const post of allAnimated) {
    assert.ok(post.mp4Url, `Post ${post.id} must have mp4Url defined`);
    assert.ok(post.mp4Url?.endsWith('.mp4'), `Post ${post.id} mp4Url must end with .mp4`);
  }
});
