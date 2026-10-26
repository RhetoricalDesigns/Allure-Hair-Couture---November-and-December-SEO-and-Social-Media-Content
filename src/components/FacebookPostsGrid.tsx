import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, Copy, Check, Download, Globe } from 'lucide-react';
import { SocialPost } from '../types/campaign';
import { downloadPostCaption } from '../utils/downloadHelpers';

interface FacebookPostsGridProps {
  posts: SocialPost[];
}

export const FacebookPostsGrid: React.FC<FacebookPostsGridProps> = ({ posts }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = (post: SocialPost) => {
    navigator.clipboard.writeText(post.copy);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (posts.length === 0) return null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-1">
          Editorial & Community Engagement
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#11100f] tracking-tight">
          Facebook Native Text Posts
        </h2>
        <div className="w-16 h-0.5 bg-[#b8943f] mt-3"></div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => {
          const isLiked = !!likedPosts[post.id];

          return (
            <div
              key={post.id}
              className="bg-white border border-[#e1dcd4] rounded-sm p-6 sm:p-8 transition-all hover:border-[#b8943f] hover:shadow-md"
            >
              {/* FB Author Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e1dcd4] mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#11100f] text-[#d7bb72] border border-[#b8943f] flex items-center justify-center font-display text-xl font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="font-sub font-bold text-sm uppercase tracking-wider text-[#11100f]">
                      Allure Hair Couture
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans-clean">
                      <span>{post.scheduledDate}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-stone-400" />
                        <span>Public</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(post)}
                    className="px-3 py-1.5 bg-[#faf8f3] border border-[#e1dcd4] hover:border-[#b8943f] text-xs font-sans-clean text-stone-700 rounded-sm transition-colors flex items-center gap-1.5"
                    title="Copy post copy"
                  >
                    {copiedId === post.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Post</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => downloadPostCaption(post)}
                    className="p-1.5 bg-[#faf8f3] border border-[#e1dcd4] hover:border-[#b8943f] text-stone-700 rounded-sm transition-colors"
                    title="Download caption as .txt"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* FB Post Body */}
              <div className="font-serif text-lg leading-relaxed text-[#282624] whitespace-pre-line mb-6">
                {post.copy}
              </div>

              {/* Hashtag List */}
              {post.hashtags && post.hashtags.length > 0 && (
                <div className="text-xs font-sans-clean text-[#b8943f] font-medium mb-5 flex flex-wrap gap-2">
                  {post.hashtags.map((h, i) => (
                    <span key={i} className="hover:underline cursor-pointer">{h}</span>
                  ))}
                </div>
              )}

              {/* FB Interaction Actions */}
              <div className="pt-3 border-t border-[#e1dcd4] flex items-center gap-8 text-xs font-sub font-bold uppercase tracking-wider text-stone-500">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 py-1 transition-colors ${
                    isLiked ? 'text-[#b8943f]' : 'hover:text-[#11100f]'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{isLiked ? 'Liked (1)' : 'Like'}</span>
                </button>

                <button 
                  onClick={() => handleCopy(post)}
                  className="flex items-center gap-2 py-1 hover:text-[#11100f] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Comment</span>
                </button>

                <button 
                  onClick={() => handleCopy(post)}
                  className="flex items-center gap-2 py-1 hover:text-[#11100f] transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
