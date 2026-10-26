import React, { useState } from 'react';
import { X, Download, Film, FileText, Image as ImageIcon, CheckCircle2, FileSpreadsheet } from 'lucide-react';
import { SocialPost } from '../types/campaign';
import { downloadMp4File, downloadImageGraphic, downloadPostCaption, generateCampaignCsv } from '../utils/downloadHelpers';

interface DownloadHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  novemberPosts: SocialPost[];
  decemberPosts: SocialPost[];
}

export const DownloadHubModal: React.FC<DownloadHubModalProps> = ({
  isOpen,
  onClose,
  novemberPosts,
  decemberPosts
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'mp4' | 'graphics' | 'captions'>('mp4');
  const [downloadBatchMonth, setDownloadBatchMonth] = useState<'november' | 'december' | 'both'>('both');

  const allPosts = [...novemberPosts, ...decemberPosts];
  const animatedPosts = allPosts.filter(p => p.isAnimated && p.mp4Url);

  const handleDownloadAllMp4s = () => {
    const targetPosts = downloadBatchMonth === 'both' 
      ? animatedPosts 
      : animatedPosts.filter(p => p.month === downloadBatchMonth);

    targetPosts.forEach((post, i) => {
      setTimeout(() => {
        if (post.mp4Url) {
          downloadMp4File(post.mp4Url, `${post.id}-${post.format}.mp4`);
        }
      }, i * 350);
    });
  };

  const handleDownloadAllCaptions = () => {
    const targetPosts = downloadBatchMonth === 'both'
      ? allPosts
      : allPosts.filter(p => p.month === downloadBatchMonth);

    const consolidatedText = `ALLURE HAIR COUTURE — COMPLETE SOCIAL MEDIA CAMPAIGN CAPTIONS
Generated for Client: Allure Hair Couture, Hermanus
========================================================================

${targetPosts.map((p, idx) => `
[POST #${idx + 1}] ${p.month.toUpperCase()} 2026 · ${p.format.toUpperCase()} (${p.aspectRatio})
Scheduled: ${p.scheduledDate} · Category: ${p.category}
Headline: ${p.headline}

${p.copy}

Call to Action: ${p.ctaText || 'Enquire Now'} -> ${p.ctaLink || 'https://allure-hair-couture.co.za'}
Hashtags: ${(p.hashtags || []).join(' ')}
------------------------------------------------------------------------
`).join('\n')}`;

    const blob = new Blob([consolidatedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `allure-all-captions-${downloadBatchMonth}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#11100f]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-sm border border-[#b8943f] max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-5 bg-[#11100f] text-white flex items-center justify-between border-b border-[#282624]">
          <div className="flex items-center gap-3">
            <Download className="w-5 h-5 text-[#d7bb72]" />
            <div>
              <h3 className="font-display font-medium text-lg uppercase tracking-wider text-white">
                Client Campaign Asset Download Center
              </h3>
              <p className="text-xs text-stone-400 font-sans-clean">
                Instant access to all 16 MP4 video files, 24 graphics, captions, and CSV schedules
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 text-stone-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters and Batch Actions */}
        <div className="p-4 sm:p-5 bg-[#faf8f3] border-b border-[#e1dcd4] flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('mp4')}
              className={`px-3 py-1.5 text-xs font-sub font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5 ${
                activeTab === 'mp4' ? 'bg-[#b8943f] text-[#11100f]' : 'bg-white border border-[#e1dcd4] text-stone-700'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>MP4 Videos ({animatedPosts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('graphics')}
              className={`px-3 py-1.5 text-xs font-sub font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5 ${
                activeTab === 'graphics' ? 'bg-[#b8943f] text-[#11100f]' : 'bg-white border border-[#e1dcd4] text-stone-700'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Graphics & Images ({allPosts.filter(p => p.imageUrl).length})</span>
            </button>

            <button
              onClick={() => setActiveTab('captions')}
              className={`px-3 py-1.5 text-xs font-sub font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5 ${
                activeTab === 'captions' ? 'bg-[#b8943f] text-[#11100f]' : 'bg-white border border-[#e1dcd4] text-stone-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Captions & Schedules</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={downloadBatchMonth}
              onChange={(e) => setDownloadBatchMonth(e.target.value as any)}
              className="text-xs font-sans-clean px-2.5 py-1.5 bg-white border border-[#e1dcd4] rounded-sm focus:outline-none focus:border-[#b8943f]"
            >
              <option value="both">All Months (Nov & Dec)</option>
              <option value="november">November 2026 Only</option>
              <option value="december">December 2026 Only</option>
            </select>

            {activeTab === 'mp4' && (
              <button
                onClick={handleDownloadAllMp4s}
                className="px-3.5 py-1.5 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] text-xs font-sub font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download All MP4s</span>
              </button>
            )}

            {activeTab === 'captions' && (
              <button
                onClick={handleDownloadAllCaptions}
                className="px-3.5 py-1.5 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] text-xs font-sub font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Master .TXT</span>
              </button>
            )}
          </div>

        </div>

        {/* Content Table / List */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          
          {/* MP4 Videos Tab */}
          {activeTab === 'mp4' && (
            <div className="space-y-3">
              <div className="text-xs text-stone-500 font-sans-clean mb-3">
                Broadcast H.264 MP4 videos pre-rendered with progressive scan, slow Ken Burns image motion, luxury typography and gradients.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {animatedPosts
                  .filter(p => downloadBatchMonth === 'both' || p.month === downloadBatchMonth)
                  .map(post => (
                    <div 
                      key={post.id} 
                      className="p-3 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm flex items-center justify-between gap-3 text-xs font-sans-clean hover:border-[#b8943f] transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 bg-[#11100f] rounded-sm overflow-hidden shrink-0 flex items-center justify-center">
                          <img src={post.imageUrl} alt="" className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-[#11100f] truncate">{post.headline}</div>
                          <div className="text-[11px] text-stone-500 capitalize">
                            {post.month} · {post.format === 'reel' ? 'Portrait Reel (1080×1920)' : 'Landscape (1200×630)'}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => post.mp4Url && downloadMp4File(post.mp4Url, `${post.id}-${post.format}.mp4`)}
                        className="px-3 py-1.5 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] rounded-sm transition-colors flex items-center gap-1 shrink-0 font-medium text-[11px]"
                      >
                        <Download className="w-3 h-3" />
                        <span>MP4</span>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Graphics Tab */}
          {activeTab === 'graphics' && (
            <div className="space-y-3">
              <div className="text-xs text-stone-500 font-sans-clean mb-3">
                High-resolution campaign graphics formatted for Instagram Feed, Stories, and Facebook timelines.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {allPosts
                  .filter(p => p.imageUrl && (downloadBatchMonth === 'both' || p.month === downloadBatchMonth))
                  .map(post => (
                    <div 
                      key={post.id} 
                      className="p-3 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm flex items-center justify-between gap-3 text-xs font-sans-clean hover:border-[#b8943f] transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 bg-stone-900 rounded-sm overflow-hidden shrink-0">
                          <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-[#11100f] truncate">{post.headline}</div>
                          <div className="text-[11px] text-stone-500 capitalize">
                            {post.month} · {post.format} · {post.dimensions || post.aspectRatio}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => post.imageUrl && downloadImageGraphic(post.imageUrl, `${post.id}.jpg`, post.headline, post.category)}
                        className="px-3 py-1.5 bg-white border border-[#e1dcd4] hover:border-[#b8943f] text-[#11100f] rounded-sm transition-colors flex items-center gap-1 shrink-0 text-[11px] font-medium"
                      >
                        <Download className="w-3 h-3" />
                        <span>Image</span>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Captions Tab */}
          {activeTab === 'captions' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#f6f3eb] border border-[#e1dcd4] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-medium text-base text-[#11100f]">Export CSV Calendar</h4>
                  <p className="text-xs text-stone-600 font-sans-clean">
                    Import directly into Meta Business Suite, Buffer, Later, or Excel
                  </p>
                </div>
                <button
                  onClick={() => generateCampaignCsv(
                    downloadBatchMonth === 'both' ? allPosts : allPosts.filter(p => p.month === downloadBatchMonth),
                    `allure-${downloadBatchMonth}-calendar`
                  )}
                  className="px-4 py-2 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Download Calendar CSV</span>
                </button>
              </div>

              <div className="divide-y divide-[#e1dcd4] border border-[#e1dcd4] rounded-sm bg-white">
                {allPosts
                  .filter(p => downloadBatchMonth === 'both' || p.month === downloadBatchMonth)
                  .map(post => (
                    <div key={post.id} className="p-3.5 flex items-center justify-between gap-4 text-xs font-sans-clean hover:bg-[#faf8f3]">
                      <div className="min-w-0">
                        <div className="font-semibold text-[#11100f] truncate">{post.headline}</div>
                        <div className="text-[11px] text-stone-500">
                          {post.scheduledDate} · {post.platform} · {post.format}
                        </div>
                      </div>

                      <button
                        onClick={() => downloadPostCaption(post)}
                        className="px-2.5 py-1 bg-[#faf8f3] border border-[#e1dcd4] hover:border-[#b8943f] rounded-sm text-stone-700 transition-colors flex items-center gap-1 text-[11px]"
                      >
                        <Download className="w-3 h-3" />
                        <span>.txt</span>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#faf8f3] border-t border-[#e1dcd4] flex items-center justify-between text-xs font-sans-clean">
          <span className="text-stone-500">Allure Hair Couture Campaign Assets</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] rounded-sm transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
