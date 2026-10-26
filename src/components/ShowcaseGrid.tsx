import React, { useState } from 'react';
import { Download, Copy, Check, ExternalLink, Calendar, Layers } from 'lucide-react';
import { SocialPost } from '../types/campaign';
import { downloadImageGraphic, downloadPostCaption } from '../utils/downloadHelpers';

interface ShowcaseGridProps {
  posts: SocialPost[];
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ posts }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleCopyCaption = (post: SocialPost) => {
    const textToCopy = `${post.headline}\n\n${post.copy}\n\n${(post.hashtags || []).join(' ')}\n\nEnquiries & Bookings:\nWhatsApp: +27 69 507 5835\n1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadImage = async (post: SocialPost) => {
    if (!post.imageUrl) return;
    setDownloadingId(post.id);
    await downloadImageGraphic(
      post.imageUrl, 
      `${post.id}-showcase.jpg`, 
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
          Visual Identity & Marquee Campaigns
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#11100f] tracking-tight">
          Social Media Showcase Posts
        </h2>
        <div className="w-16 h-0.5 bg-[#b8943f] mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const isCover = post.aspectRatio === '2.4/1';

          return (
            <div
              key={post.id}
              className={`group bg-white border border-[#e1dcd4] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#b8943f] flex flex-col justify-between ${
                isCover ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              {/* Media Container */}
              <div 
                className={`relative overflow-hidden w-full ${
                  isCover ? 'aspect-[2.4/1] min-h-[300px]' : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={post.imageUrl}
                  alt={post.headline}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/90 via-[#11100f]/40 to-transparent flex flex-col justify-end p-6 z-10">
                  <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-1">
                    {post.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-white uppercase tracking-tight leading-snug mb-2">
                    {post.headline}
                  </h3>
                  <p className="font-serif text-sm sm:text-base text-stone-200 line-clamp-3 mb-4 max-w-xl">
                    {post.copy}
                  </p>

                  {post.ctaLink && (
                    <a
                      href={post.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start px-4 py-2 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                    >
                      <span>{post.ctaText || 'Enquire Now'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="p-4 bg-[#faf8f3] border-t border-[#e1dcd4] flex flex-wrap items-center justify-between gap-3 text-xs font-sans-clean">
                <div className="flex items-center gap-2 text-stone-500 text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-[#b8943f]" />
                  <span>{post.scheduledDate}</span>
                  <span>·</span>
                  <span>{post.dimensions}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyCaption(post)}
                    className="px-3 py-1.5 bg-white border border-[#e1dcd4] hover:border-[#b8943f] text-stone-700 hover:text-[#11100f] rounded-sm transition-colors flex items-center gap-1.5 font-medium"
                    title="Copy caption and hashtags to clipboard"
                  >
                    {copiedId === post.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Caption</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDownloadImage(post)}
                    disabled={downloadingId === post.id}
                    className="px-3 py-1.5 bg-[#11100f] text-white hover:bg-[#b8943f] hover:text-[#11100f] rounded-sm transition-colors flex items-center gap-1.5 font-medium"
                    title="Download branded graphic asset"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{downloadingId === post.id ? 'Exporting...' : 'Download Graphic'}</span>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
