import React, { useState } from 'react';
import { Download, Copy, Check, Calendar } from 'lucide-react';
import { SocialPost } from '../types/campaign';
import { downloadImageGraphic, downloadPostCaption } from '../utils/downloadHelpers';

interface SquarePostsGridProps {
  posts: SocialPost[];
}

export const SquarePostsGrid: React.FC<SquarePostsGridProps> = ({ posts }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleCopyCaption = (post: SocialPost) => {
    const textToCopy = `${post.headline}\n\n${post.copy}\n\n${(post.hashtags || []).join(' ')}\n\nAppointments & Enquiries:\nWhatsApp: +27 69 507 5835\nHemel & Aarde Village, Hermanus`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadImage = async (post: SocialPost) => {
    if (!post.imageUrl) return;
    setDownloadingId(post.id);
    await downloadImageGraphic(
      post.imageUrl, 
      `${post.id}-square-1080x1080.jpg`, 
      post.headline, 
      post.category
    );
    setDownloadingId(null);
  };

  if (posts.length === 0) return null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-1">
          Instagram Grid & Visual Feed
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#11100f] tracking-tight">
          Square Posts (1080 × 1080)
        </h2>
        <div className="w-16 h-0.5 bg-[#b8943f] mt-3"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group bg-white border border-[#e1dcd4] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#b8943f] flex flex-col justify-between"
          >
            {/* Square Image Container */}
            <div className="relative aspect-square overflow-hidden bg-stone-900">
              <img
                src={post.imageUrl}
                alt={post.headline}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/85 via-[#11100f]/30 to-transparent flex flex-col justify-end p-5 z-10">
                <div className="text-[11px] font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-1">
                  {post.category}
                </div>
                <h3 className="text-lg sm:text-xl font-display font-medium text-white uppercase tracking-tight leading-snug mb-1.5">
                  {post.headline}
                </h3>
                <p className="font-serif text-xs text-stone-200 line-clamp-2">
                  {post.copy}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-3.5 bg-[#faf8f3] border-t border-[#e1dcd4] flex items-center justify-between text-xs font-sans-clean">
              <div className="flex items-center gap-1.5 text-stone-500 text-[11px]">
                <Calendar className="w-3 h-3 text-[#b8943f]" />
                <span>{post.scheduledDate}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopyCaption(post)}
                  className="p-1.5 bg-white border border-[#e1dcd4] hover:border-[#b8943f] text-stone-700 rounded-sm transition-colors"
                  title="Copy caption"
                >
                  {copiedId === post.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => handleDownloadImage(post)}
                  disabled={downloadingId === post.id}
                  className="px-2.5 py-1.5 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] rounded-sm transition-colors flex items-center gap-1 text-[11px] font-medium"
                  title="Download 1080x1080 JPG"
                >
                  <Download className="w-3 h-3" />
                  <span>{downloadingId === post.id ? '...' : 'Download'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
