import React, { useState } from 'react';
import { Film, Download, Play, Copy, Check, Sparkles, Sliders } from 'lucide-react';
import { SocialPost } from '../types/campaign';
import { downloadMp4File, downloadImageGraphic, downloadPostCaption } from '../utils/downloadHelpers';

interface ReelsGridProps {
  posts: SocialPost[];
  onOpenVideoStudio: (post: SocialPost) => void;
}

export const ReelsGrid: React.FC<ReelsGridProps> = ({ posts, onOpenVideoStudio }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (post: SocialPost) => {
    const textToCopy = `${post.headline}\n\n${post.copy}\n\n${(post.hashtags || []).join(' ')}\n\nReserve your session:\nWhatsApp: +27 69 507 5835\nAllure Hair Couture, Hermanus`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadMp4 = (post: SocialPost) => {
    if (post.mp4Url) {
      downloadMp4File(post.mp4Url, `${post.id}-reel-1080x1920.mp4`);
    } else {
      onOpenVideoStudio(post);
    }
  };

  if (posts.length === 0) return null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-1">
            <Film className="w-3.5 h-3.5" />
            <span>High-Impact Motion & Video</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#11100f] tracking-tight">
            Portrait Reels (1080 × 1920 — Animated MP4)
          </h2>
          <div className="w-16 h-0.5 bg-[#b8943f] mt-3"></div>
        </div>

        <div className="text-xs font-sans-clean text-stone-600 bg-[#f6f3eb] p-2 rounded-sm border border-[#e1dcd4] flex items-center gap-2 self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#b8943f]" />
          <span>Ken Burns Motion · 1080×1920 H.264 Broadcast MP4</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group bg-white border border-[#e1dcd4] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#b8943f] flex flex-col justify-between"
          >
            {/* Reel 9:16 Frame */}
            <div className="relative aspect-[9/16] overflow-hidden bg-[#11100f]">
              
              {/* Ken Burns Animated Layer */}
              <div className="w-full h-full animate-ken-burns">
                <img
                  src={post.imageUrl}
                  alt={post.headline}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Category Badge */}
              <div className="absolute bottom-5 right-5 bg-[#11100f]/90 text-white border border-[#b8943f]/60 px-3 py-1 rounded-sm text-[10px] font-sub font-bold uppercase tracking-widest z-20 animate-float shadow-lg">
                {post.category}
              </div>

              {/* Contrast Scrim & Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/95 via-[#11100f]/40 to-transparent flex flex-col justify-end p-6 z-10">
                <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-1">
                  {post.category}
                </div>
                <h3 className="text-2xl font-display font-medium text-white uppercase tracking-tight leading-snug mb-2">
                  {post.headline}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-stone-200 line-clamp-3 mb-4">
                  {post.copy}
                </p>

                {/* Animated Pulsing Action */}
                <button
                  onClick={() => onOpenVideoStudio(post)}
                  className="self-start px-3.5 py-1.5 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-[11px] uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5 animate-pulse-gold"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Preview Video</span>
                </button>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="p-3.5 bg-[#faf8f3] border-t border-[#e1dcd4] flex flex-col gap-2 text-xs font-sans-clean">
              
              {/* Primary MP4 Download Button */}
              <button
                onClick={() => handleDownloadMp4(post)}
                className="w-full py-2 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] rounded-sm transition-colors flex items-center justify-center gap-2 font-medium"
                title="Download 1080x1920 MP4 Video"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="font-semibold">Download MP4 Video</span>
              </button>

              <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#e1dcd4]/70">
                <button
                  onClick={() => onOpenVideoStudio(post)}
                  className="text-[11px] text-stone-600 hover:text-[#11100f] flex items-center gap-1"
                  title="Customize text or duration"
                >
                  <Sliders className="w-3 h-3 text-[#b8943f]" />
                  <span>Customize Studio</span>
                </button>

                <button
                  onClick={() => handleCopy(post)}
                  className="text-[11px] text-stone-600 hover:text-[#11100f] flex items-center gap-1"
                >
                  {copiedId === post.id ? (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Caption</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
