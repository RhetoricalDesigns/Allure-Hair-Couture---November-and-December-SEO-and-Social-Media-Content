import React, { useState } from 'react';
import { X, Film, Download, Play, RefreshCw, CheckCircle2, Sparkles, Sliders } from 'lucide-react';
import { SocialPost } from '../types/campaign';
import { downloadMp4File, recordCanvasAnimationToMp4 } from '../utils/downloadHelpers';

interface VideoStudioModalProps {
  post: SocialPost | null;
  onClose: () => void;
}

export const VideoStudioModal: React.FC<VideoStudioModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  const [customHeadline, setCustomHeadline] = useState(post.headline);
  const [customCategory, setCustomCategory] = useState(post.category);
  const [isRecording, setIsRecording] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);

  const isLandscape = post.format === 'landscape';

  const handleDownloadMasterMp4 = () => {
    if (post.mp4Url) {
      downloadMp4File(post.mp4Url, `${post.id}-${isLandscape ? 'landscape-1200x630' : 'reel-1080x1920'}.mp4`);
    }
  };

  const handleRecordCustomMp4 = async () => {
    if (!post.imageUrl) return;
    setIsRecording(true);
    setRenderProgress(0);
    setCustomVideoUrl(null);

    const blob = await recordCanvasAnimationToMp4(
      post.imageUrl,
      customCategory,
      customHeadline,
      isLandscape,
      (pct) => setRenderProgress(pct)
    );

    setIsRecording(false);

    if (blob) {
      const url = URL.createObjectURL(blob);
      setCustomVideoUrl(url);

      // Trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = `${post.id}-custom-animated.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#11100f]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-sm border border-[#b8943f] max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-[#11100f] text-white flex items-center justify-between border-b border-[#282624]">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-[#d7bb72]" />
            <div>
              <h3 className="font-display font-medium text-lg uppercase tracking-wider text-white">
                MP4 Video Studio & Exporter
              </h3>
              <p className="text-xs text-stone-400 font-sans-clean">
                {post.headline} · {isLandscape ? '1200 × 630 Landscape MP4' : '1080 × 1920 Portrait Reel MP4'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Video Preview Column */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-sub font-bold uppercase tracking-wider text-[#b8943f] mb-2 self-start">
              Rendered Broadcast MP4 Video
            </div>

            <div 
              className={`w-full bg-[#11100f] rounded-sm overflow-hidden border border-[#e1dcd4] flex items-center justify-center relative shadow-inner ${
                isLandscape ? 'aspect-[1200/630]' : 'aspect-[9/16] max-w-[280px]'
              }`}
            >
              {post.mp4Url ? (
                <video
                  src={post.mp4Url}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-6 text-center text-stone-400 text-xs">
                  Video preview rendering...
                </div>
              )}
            </div>

            <div className="mt-4 w-full flex flex-col gap-2">
              <button
                onClick={handleDownloadMasterMp4}
                className="w-full py-2.5 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Broadcast MP4 ({isLandscape ? '1200x630' : '1080x1920'})</span>
              </button>
              <p className="text-[11px] text-center text-stone-500 font-sans-clean">
                H.264 MP4 · 25 FPS · High-definition progressive video with Ken Burns motion
              </p>
            </div>
          </div>

          {/* Customization & Dynamic Generator Column */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-sub font-bold uppercase tracking-wider text-[#b8943f] mb-1">
                Custom Video Generator
              </div>
              <h4 className="font-display font-medium text-xl text-[#11100f]">
                Personalize & Re-Render MP4
              </h4>
              <p className="text-xs text-stone-600 font-sans-clean mt-1">
                Modify headlines or labels and record a brand-new custom animated video in-browser.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-sub font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Category Tag
                </label>
                <input
                  type="text"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-sans-clean border border-[#e1dcd4] rounded-sm focus:outline-none focus:border-[#b8943f]"
                />
              </div>

              <div>
                <label className="block text-xs font-sub font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Main Headline
                </label>
                <input
                  type="text"
                  value={customHeadline}
                  onChange={(e) => setCustomHeadline(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-sans-clean border border-[#e1dcd4] rounded-sm focus:outline-none focus:border-[#b8943f]"
                />
              </div>

              <div className="p-3 bg-[#faf8f3] border border-[#e1dcd4] rounded-sm text-xs font-sans-clean text-stone-600 space-y-1">
                <div className="font-semibold text-stone-800">Dynamic Video Features:</div>
                <div className="flex items-center gap-1.5 text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b8943f]" />
                  <span>Slow Ken Burns image pan & zoom</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b8943f]" />
                  <span>Dark luxury contrast gradient & gold hairline</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b8943f]" />
                  <span>Animated typography fade-in</span>
                </div>
              </div>

              <button
                onClick={handleRecordCustomMp4}
                disabled={isRecording}
                className="w-full py-3 bg-[#11100f] text-white hover:bg-[#8f6c24] font-sub font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                {isRecording ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#d7bb72]" />
                    <span>Rendering Frame {renderProgress}%...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#d7bb72]" />
                    <span>Render & Export Custom MP4</span>
                  </>
                )}
              </button>

              {customVideoUrl && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-sm text-xs font-sans-clean text-emerald-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span className="font-medium">Custom MP4 successfully rendered and downloaded!</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#faf8f3] border-t border-[#e1dcd4] flex items-center justify-between text-xs font-sans-clean">
          <span className="text-stone-500">
            Target: Instagram Reels, Stories, Facebook Video Feeds
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-[#e1dcd4] hover:border-[#11100f] text-stone-700 rounded-sm transition-colors"
          >
            Close Studio
          </button>
        </div>

      </div>
    </div>
  );
};
