import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AuditHub } from './components/AuditHub';
import { CampaignHeader } from './components/CampaignHeader';
import { ShowcaseGrid } from './components/ShowcaseGrid';
import { FacebookPostsGrid } from './components/FacebookPostsGrid';
import { SquarePostsGrid } from './components/SquarePostsGrid';
import { ReelsGrid } from './components/ReelsGrid';
import { LandscapeGrid } from './components/LandscapeGrid';
import { BlogSection } from './components/BlogSection';
import { CampaignStrategyPlan } from './components/CampaignStrategyPlan';
import { VideoStudioModal } from './components/VideoStudioModal';
import { DownloadHubModal } from './components/DownloadHubModal';

import { CampaignMonth, PostFormat, SocialPost } from './types/campaign';
import { novemberPosts, novemberBlog, novemberPlan } from './data/novemberCampaign';
import { decemberPosts, decemberBlog, decemberPlan } from './data/decemberCampaign';
import { initialSearchConsoleData, initialAnalyticsData, initialBusinessConnections } from './data/auditData';
import { generateCampaignCsv } from './utils/downloadHelpers';

export default function App() {
  const [currentMonth, setCurrentMonth] = useState<CampaignMonth>('november');
  const [selectedFormat, setSelectedFormat] = useState<PostFormat | 'all'>('all');
  const [activeNavTab, setActiveNavTab] = useState<'campaign' | 'audit' | 'blog' | 'strategy'>('campaign');
  
  // Modals state
  const [isDownloadHubOpen, setIsDownloadHubOpen] = useState(false);
  const [selectedVideoPost, setSelectedVideoPost] = useState<SocialPost | null>(null);

  // Active dataset
  const activePosts = currentMonth === 'november' ? novemberPosts : decemberPosts;
  const activeBlog = currentMonth === 'november' ? novemberBlog : decemberBlog;
  const activePlan = currentMonth === 'november' ? novemberPlan : decemberPlan;

  // Filtered posts
  const filteredPosts = selectedFormat === 'all' 
    ? activePosts 
    : activePosts.filter(p => p.format === selectedFormat);

  const showcasePosts = filteredPosts.filter(p => p.format === 'showcase');
  const fbTextPosts = filteredPosts.filter(p => p.format === 'fb-text');
  const squarePosts = filteredPosts.filter(p => p.format === 'square');
  const reelPosts = filteredPosts.filter(p => p.format === 'reel');
  const landscapePosts = filteredPosts.filter(p => p.format === 'landscape');

  const handleExportCsv = () => {
    generateCampaignCsv(activePosts, `allure-${currentMonth}-campaign`);
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#11100f] flex flex-col font-serif">
      
      {/* Strict 3-Zone Top Navigation Bar */}
      <Navbar
        activeTab={activeNavTab}
        setActiveTab={setActiveNavTab}
        onOpenDownloadHub={() => setIsDownloadHubOpen(true)}
      />

      <main className="flex-1">
        
        {/* Section 1: Preliminary Search Console, Analytics & Business Profiles Audit */}
        <section id="audit-hub">
          <AuditHub
            searchConsole={initialSearchConsoleData}
            analytics={initialAnalyticsData}
            businessConnections={initialBusinessConnections}
          />
        </section>

        {/* Section 2: Campaign Header (Month Switcher, Format Tabs, Quick Actions) */}
        <section id="campaign-content">
          <CampaignHeader
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
            onExportCsv={handleExportCsv}
            onOpenDownloadHub={() => setIsDownloadHubOpen(true)}
            totalPosts={activePosts.length}
            totalMp4s={activePosts.filter(p => p.isAnimated).length}
          />

          {/* Social Posts Grids */}
          <div className="space-y-4">
            
            {/* 1. Showcase Posts */}
            <ShowcaseGrid posts={showcasePosts} />

            {/* 2. Facebook Native Text Posts */}
            <FacebookPostsGrid posts={fbTextPosts} />

            {/* 3. Square Posts (1080x1080) */}
            <SquarePostsGrid posts={squarePosts} />

            {/* 4. Portrait Reels (1080x1920 MP4) */}
            <ReelsGrid
              posts={reelPosts}
              onOpenVideoStudio={(post) => setSelectedVideoPost(post)}
            />

            {/* 5. Facebook Landscape Posts (1200x630 MP4) */}
            <LandscapeGrid
              posts={landscapePosts}
              onOpenVideoStudio={(post) => setSelectedVideoPost(post)}
            />

          </div>
        </section>

        {/* Section 3: Refined Long-Form Editorial Blog Post */}
        <section id="editorial-blog" className="bg-[#f6f3eb] border-t border-b border-[#e1dcd4]">
          <BlogSection
            currentBlog={activeBlog}
            currentMonth={currentMonth}
            onSwitchMonth={(m) => setCurrentMonth(m)}
          />
        </section>

        {/* Section 4: Campaign Strategy, Content Calendar & Key Messages */}
        <section id="strategy-plan">
          <CampaignStrategyPlan
            plan={activePlan}
            currentMonth={currentMonth}
            onSwitchMonth={(m) => setCurrentMonth(m)}
          />
        </section>

      </main>

      {/* Quiet Footer */}
      <footer className="bg-[#11100f] border-t border-[#282624] text-stone-400 py-12 px-4 sm:px-6 lg:px-8 text-xs font-sans-clean">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display text-white text-base font-semibold tracking-wider">
              ALLURE HAIR COUTURE
            </div>
            <p className="text-stone-400">
              1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus, 7200 · Western Cape, South Africa
            </p>
          </div>

          <div className="flex items-center gap-6 text-stone-400 text-xs">
            <span>WhatsApp: +27 69 507 5835</span>
            <span>·</span>
            <span>Tel: 028 316 3845</span>
            <span>·</span>
            <a 
              href="https://allure-hair-couture.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d7bb72] hover:underline"
            >
              allure-hair-couture.co.za
            </a>
          </div>

          <div className="text-stone-500 text-[11px]">
            © 2026 Allure Hair Couture. All campaign assets, typography & video media reserved.
          </div>
        </div>
      </footer>

      {/* Video Studio & Dynamic Canvas MP4 Recorder Modal */}
      <VideoStudioModal
        post={selectedVideoPost}
        onClose={() => setSelectedVideoPost(null)}
      />

      {/* Central Asset Download Hub Modal */}
      <DownloadHubModal
        isOpen={isDownloadHubOpen}
        onClose={() => setIsDownloadHubOpen(false)}
        novemberPosts={novemberPosts}
        decemberPosts={decemberPosts}
      />

    </div>
  );
}
