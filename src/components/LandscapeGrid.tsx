import React, { useState } from 'react';
import { Film, Download, Play, Copy, Check, Calendar } from 'lucide-react';
import { SocialPost } from '../types/campaign';
import { downloadMp4File, downloadImageGraphic, downloadPostCaption } from '../utils/downloadHelpers';

interface LandscapeGridProps {
  posts: SocialPost[];
  onOpenVideoStudio: (post: SocialPost) => void;
}

export const LandscapeGrid: React.FC<LandscapeGridProps> = ({ posts, onOpenVideoStudio }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (post: SocialPost) => {
    const textToCopy = `${post.headline}\n\n${post.copy}\n\n${(post.hashtags || []).join(' ')}\n\nAllure Hair Couture · 1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus\nWhatsApp: +27 69 507 5835 · Tel: 028 316 3845`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadMp4 = (post: SocialPost) => {
    if (post.mp4Url) {
      downloadMp4File(post.mp4Url, `${post.id}-landscape-1200x630.mp4`);
    } else {
      onOpenVideoStudio(post);
    }
  };

  if (posts.length === 0) return null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-1">
          Facebook Timeline & Ads Motion
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#11100f] tracking-tight">
          Facebook Landscape Posts (1200 × 630 — Animated MP4)
        </h2>
        <div className="w-16 h-0.5 bg-[#b8943f] mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group bg-white border border-[#e1dcd4] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#b8943f] flex flex-col justify-between"
          >
            {/* 1200x630 Frame */}
            <div className="relative aspect-[1200/630] overflow-hidden bg-[#11100f]">
              
              {/* Ken Burns Layer */}
              <div className="w-full h-full animate-ken-burns">
                <img
                  src={post.imageUrl}
                  alt={post.headline}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/95 via-[#11100f]/40 to-transparent flex flex-col justify-end p-6 z-10">
                <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-1">
                  {post.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white uppercase tracking-tight leading-snug mb-2">
                  {post.headline}
                </h3>
                <p className="font-serif text-sm text-stone-200 line-clamp-2 mb-4 max-w-lg">
                  {post.copy}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenVideoStudio(post)}
                    className="px-3.5 py-1.5 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Preview</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Footer Bar */}
            <div className="p-4 bg-[#faf8f3] border-t border-[#e1dcd4] flex flex-wrap items-center justify-between gap-3 text-xs font-sans-clean">
              <div className="flex items-center gap-2 text-stone-500 text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-[#b8943f]" />
                <span>{post.scheduledDate}</span>
                <span>·</span>
                <span className="font-mono text-emerald-800 font-semibold">1200×630 MP4</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(post)}
                  className="px-3 py-1.5 bg-white border border-[#e1dcd4] hover:border-[#b8943f] text-stone-700 rounded-sm transition-colors flex items-center gap-1.5"
                >
                  {copiedId === post.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === post.id ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={() => handleDownloadMp4(post)}
                  className="px-3.5 py-1.5 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] rounded-sm transition-colors flex items-center gap-1.5 font-medium"
                  title="Download MP4 Video"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download MP4</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
