import React from 'react';
import { Calendar, Download, Sparkles, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { CampaignPlan, CampaignMonth } from '../types/campaign';
import { downloadTextFile } from '../utils/downloadHelpers';

interface CampaignStrategyPlanProps {
  plan: CampaignPlan;
  currentMonth: CampaignMonth;
  onSwitchMonth: (month: CampaignMonth) => void;
}

export const CampaignStrategyPlan: React.FC<CampaignStrategyPlanProps> = ({
  plan,
  currentMonth,
  onSwitchMonth
}) => {
  const downloadPlanDocument = () => {
    const textContent = `ALLURE HAIR COUTURE — MARKETING & CONTENT CAMPAIGN STRATEGY
============================================================
Campaign Month: ${plan.month.toUpperCase()} 2026
Theme: ${plan.theme}

THEME OVERVIEW:
${plan.themeDescription}

CORE CAMPAIGN PILLARS:
${plan.pillars.map((p, i) => `${i + 1}. ${p.title}
   ${p.description}`).join('\n\n')}

CONTENT CALENDAR SCHEDULE:
${plan.calendar.map(c => `[${c.week}] ${c.title} (${c.dates})
Deliverables:
${c.deliverables.map(d => ` - ${d}`).join('\n')}`).join('\n\n')}

BRAND MESSAGING PILLARS:
${plan.keyMessages.map(m => ` - "${m}"`).join('\n')}

PRIMARY CAMPAIGN HASHTAGS:
${plan.hashtags.join(' ')}

SALON LOCATION & CONTACT COORDINATES:
Allure Hair Couture
1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus, 7200
WhatsApp Concierge: +27 69 507 5835
Salon Landline: 028 316 3845
Official Website: https://allure-hair-couture.co.za
============================================================
`;

    downloadTextFile(`${plan.month}-campaign-strategy-plan.txt`, textContent);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="bg-[#11100f] text-white rounded-sm p-6 sm:p-12 border border-[#282624] relative overflow-hidden">
        
        {/* Header with Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#282624]">
          <div>
            <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Executive Brief & Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium uppercase tracking-tight text-white">
              {plan.theme}
            </h2>
            <p className="font-serif italic text-stone-300 text-base sm:text-lg mt-2 max-w-2xl">
              {plan.themeDescription}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#1c1a18] p-1 rounded-sm border border-[#383531] flex items-center">
              <button
                onClick={() => onSwitchMonth('november')}
                className={`px-3 py-1.5 text-xs font-sub font-bold uppercase tracking-wider rounded-sm transition-all ${
                  currentMonth === 'november' ? 'bg-[#b8943f] text-[#11100f]' : 'text-stone-400 hover:text-white'
                }`}
              >
                Nov Brief
              </button>
              <button
                onClick={() => onSwitchMonth('december')}
                className={`px-3 py-1.5 text-xs font-sub font-bold uppercase tracking-wider rounded-sm transition-all ${
                  currentMonth === 'december' ? 'bg-[#b8943f] text-[#11100f]' : 'text-stone-400 hover:text-white'
                }`}
              >
                Dec Brief
              </button>
            </div>

            <button
              onClick={downloadPlanDocument}
              className="px-4 py-2 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Brief</span>
            </button>
          </div>
        </div>

        {/* Pillars & Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
          
          {/* Strategic Pillars */}
          <div>
            <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-4">
              Strategic Content Pillars
            </div>
            <div className="space-y-4">
              {plan.pillars.map((pillar, i) => (
                <div key={i} className="p-4 bg-[#1a1816] border border-[#2e2a26] rounded-sm">
                  <h4 className="font-display font-medium text-lg text-white mb-1">
                    {i + 1}. {pillar.title}
                  </h4>
                  <p className="font-serif text-sm text-stone-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Week Schedule */}
          <div>
            <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-4">
              4-Week Content Distribution Calendar
            </div>
            <div className="space-y-4">
              {plan.calendar.map((cal, i) => (
                <div key={i} className="p-4 bg-[#1a1816] border border-[#2e2a26] rounded-sm">
                  <div className="flex items-center justify-between text-xs font-sub text-[#d7bb72] font-bold tracking-wider uppercase mb-1">
                    <span>{cal.week}</span>
                    <span className="text-stone-400 font-sans-clean font-normal">{cal.dates}</span>
                  </div>
                  <h4 className="font-display font-medium text-lg text-white mb-2">
                    {cal.title}
                  </h4>
                  <ul className="space-y-1 text-xs font-sans-clean text-stone-300">
                    {cal.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b8943f]"></span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Key Messages & Coordinates */}
        <div className="mt-10 pt-8 border-t border-[#282624] grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans-clean">
          <div>
            <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-3">
              Guiding Brand Messages
            </div>
            <ul className="space-y-2 text-stone-300 font-serif text-base italic">
              {plan.keyMessages.map((msg, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#b8943f] font-bold not-italic">“</span>
                  <span>{msg}”</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#d7bb72] mb-3">
              Salon Coordinates & Inquiries
            </div>
            <p className="text-stone-300 mb-2">
              Allure Hair Couture · Bespoke Hair Salon<br />
              1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus, Western Cape
            </p>
            <p className="text-stone-400">
              WhatsApp Concierge: +27 69 507 5835 · Telephone: 028 316 3845
            </p>
            <div className="mt-3 text-[#d7bb72] font-medium flex flex-wrap gap-2 text-[11px]">
              {plan.hashtags.map((h, i) => (
                <span key={i}>{h}</span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
