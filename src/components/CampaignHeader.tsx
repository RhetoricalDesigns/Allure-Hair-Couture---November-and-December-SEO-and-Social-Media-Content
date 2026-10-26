import React from 'react';
import { Calendar, FileSpreadsheet, Film, Image as ImageIcon, Download } from 'lucide-react';
import { CampaignMonth, PostFormat } from '../types/campaign';

interface CampaignHeaderProps {
  currentMonth: CampaignMonth;
  setCurrentMonth: (month: CampaignMonth) => void;
  selectedFormat: PostFormat | 'all';
  setSelectedFormat: (fmt: PostFormat | 'all') => void;
  onExportCsv: () => void;
  onOpenDownloadHub: () => void;
  totalPosts: number;
  totalMp4s: number;
}

export const CampaignHeader: React.FC<CampaignHeaderProps> = ({
  currentMonth,
  setCurrentMonth,
  selectedFormat,
  setSelectedFormat,
  onExportCsv,
  onOpenDownloadHub,
  totalPosts,
  totalMp4s
}) => {
  return (
    <div className="bg-[#11100f] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#b8943f]">
      <div className="max-w-7xl mx-auto">
        
        {/* Month Switcher & Title Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#282624]">
          <div>
            <div className="flex items-center gap-2 text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-2">
              <span>Allure Hair Couture · Campaign Content Suite</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-normal uppercase tracking-tight text-white">
              {currentMonth === 'november' ? 'November Glamour' : 'December Opulence'}
            </h1>
            <p className="font-serif italic text-[#d7bb72] text-lg sm:text-xl mt-1">
              {currentMonth === 'november' 
                ? 'Peak Wedding Season & Spring Transition — Bespoke Hair Artistry'
                : 'Festive Radiance, Summer Soirées & Holiday Luxury — Coastal Hermanus'
              }
            </p>
          </div>

          {/* Month Toggle Buttons */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="bg-[#282624] p-1 rounded-sm border border-[#514d48] flex items-center">
              <button
                onClick={() => setCurrentMonth('november')}
                className={`px-5 py-2.5 text-xs font-sub font-bold tracking-widest uppercase rounded-sm transition-all ${
                  currentMonth === 'november'
                    ? 'bg-[#b8943f] text-[#11100f] shadow-md'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                November 2026
              </button>

              <button
                onClick={() => setCurrentMonth('december')}
                className={`px-5 py-2.5 text-xs font-sub font-bold tracking-widest uppercase rounded-sm transition-all ${
                  currentMonth === 'december'
                    ? 'bg-[#b8943f] text-[#11100f] shadow-md'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                December 2026
              </button>
            </div>

            <button
              onClick={onExportCsv}
              className="px-4 py-2.5 text-xs font-sub font-bold tracking-widest uppercase bg-transparent border border-[#b8943f] text-[#d7bb72] hover:bg-[#b8943f] hover:text-[#11100f] rounded-sm transition-all flex items-center gap-2 shrink-0"
              title="Download Content Calendar as CSV"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          </div>
        </div>

        {/* Stats Strip & Format Filters */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Format Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Deliverables' },
              { id: 'showcase', label: 'Showcase Cards' },
              { id: 'fb-text', label: 'Facebook Text' },
              { id: 'square', label: 'Square (1:1)' },
              { id: 'reel', label: 'Portrait Reels (9:16 MP4)' },
              { id: 'landscape', label: 'Landscape (1200x630 MP4)' }
            ].map(fmt => (
              <button
                key={fmt.id}
                onClick={() => setSelectedFormat(fmt.id as any)}
                className={`px-3 py-1.5 text-xs font-sans-clean font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                  selectedFormat === fmt.id
                    ? 'bg-[#b8943f] text-[#11100f] font-semibold'
                    : 'bg-[#1c1a18] text-stone-300 hover:bg-[#282624] hover:text-white border border-[#282624]'
                }`}
              >
                {fmt.label}
              </button>
            ))}
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 text-xs text-stone-400 font-sans-clean">
            <div className="flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-[#d7bb72]" />
              <span>{totalPosts} Total Formats</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-emerald-400" />
              <span>8 Animated MP4s Ready</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
