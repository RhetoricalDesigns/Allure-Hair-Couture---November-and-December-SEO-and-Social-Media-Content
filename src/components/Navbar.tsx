import React from 'react';
import { Download, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDownloadHub: () => void;
  activeTab: 'campaign' | 'audit' | 'blog' | 'strategy';
  setActiveTab: (tab: 'campaign' | 'audit' | 'blog' | 'strategy') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownloadHub,
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#11100f]/95 backdrop-blur-md border-b border-[#282624] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-base sm:text-2xl font-serif tracking-tight text-white hover:text-[#d7bb72] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="font-display tracking-wider">ALLURE HAIR COUTURE</span>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans-clean font-medium text-stone-300">
          <button
            onClick={() => {
              setActiveTab('audit');
              document.getElementById('audit-hub')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'audit' 
                ? 'border-[#b8943f] text-[#d7bb72]' 
                : 'border-transparent hover:text-white'
            }`}
          >
            Search Console & Profiles
          </button>
          
          <button
            onClick={() => {
              setActiveTab('campaign');
              document.getElementById('campaign-content')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'campaign' 
                ? 'border-[#b8943f] text-[#d7bb72]' 
                : 'border-transparent hover:text-white'
            }`}
          >
            Social Campaigns
          </button>

          <button
            onClick={() => {
              setActiveTab('blog');
              document.getElementById('editorial-blog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'blog' 
                ? 'border-[#b8943f] text-[#d7bb72]' 
                : 'border-transparent hover:text-white'
            }`}
          >
            Editorial Blog
          </button>

          <button
            onClick={() => {
              setActiveTab('strategy');
              document.getElementById('strategy-plan')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeTab === 'strategy' 
                ? 'border-[#b8943f] text-[#d7bb72]' 
                : 'border-transparent hover:text-white'
            }`}
          >
            Strategy & Calendar
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDownloadHub}
            className="px-3 sm:px-4 py-2 text-xs font-sub font-bold tracking-widest uppercase bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] rounded-sm transition-all shadow-sm flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Download All Assets</span>
            <span className="sm:hidden">Downloads</span>
          </button>
        </div>

      </div>
    </header>
  );
};
