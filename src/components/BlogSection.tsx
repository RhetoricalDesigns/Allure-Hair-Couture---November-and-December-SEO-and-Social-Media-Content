import React, { useState } from 'react';
import { BookOpen, Download, Clock, Calendar, User, FileText, Bookmark, Share2, Sparkles, ChevronRight, Check } from 'lucide-react';
import { BlogPost, CampaignMonth } from '../types/campaign';
import { downloadTextFile } from '../utils/downloadHelpers';

interface BlogSectionProps {
  currentBlog: BlogPost;
  currentMonth: CampaignMonth;
  onSwitchMonth: (month: CampaignMonth) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  currentBlog,
  currentMonth,
  onSwitchMonth
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  const handleShareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2200);
  };

  const downloadArticleHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${currentBlog.title} — Allure Hair Couture</title>
  <style>
    body { font-family: Georgia, serif; line-height: 1.8; color: #11100f; max-width: 860px; margin: 40px auto; padding: 30px; background: #faf8f3; }
    h1 { font-size: 2.6rem; text-transform: uppercase; margin-bottom: 0.5rem; line-height: 1.2; }
    .masthead { font-size: 0.85rem; color: #b8943f; text-transform: uppercase; letter-spacing: 0.15em; font-weight: bold; margin-bottom: 2rem; border-bottom: 2px solid #b8943f; padding-bottom: 10px; }
    .meta { font-size: 0.9rem; color: #666; margin-bottom: 2rem; }
    blockquote { border-left: 3px solid #b8943f; padding-left: 24px; font-style: italic; font-size: 1.35rem; margin: 2.5rem 0; color: #333; background: #f4efe4; padding: 20px; }
    h3 { font-size: 1.6rem; margin-top: 2.5rem; color: #11100f; border-bottom: 1px solid #ddd; padding-bottom: 6px; }
    p { margin-bottom: 1.5rem; font-size: 1.15rem; color: #282624; }
    footer { margin-top: 4rem; padding-top: 2rem; border-top: 2px solid #11100f; font-size: 0.9rem; color: #555; }
  </style>
</head>
<body>
  <div class="masthead">ALLURE HAUTE COIFFURE MAGAZINE · ${currentBlog.date.toUpperCase()} ISSUE</div>
  <h1>${currentBlog.title}</h1>
  <div class="meta">By ${currentBlog.author} (${currentBlog.authorRole}) · ${currentBlog.readTime}</div>
  
  <blockquote>"${currentBlog.quote}"</blockquote>

  ${currentBlog.sections.map(s => `
    <h3>${s.heading}</h3>
    <p>${s.content}</p>
  `).join('')}

  <footer>
    <strong>Allure Hair Couture</strong><br>
    1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus, 7200<br>
    WhatsApp Concierge: +27 69 507 5835 · Telephone: 028 316 3845<br>
    https://allure-hair-couture.co.za
  </footer>
</body>
</html>`;

    downloadTextFile(`${currentBlog.month}-allure-editorial-blog.html`, htmlContent, 'text/html;charset=utf-8');
  };

  const downloadArticleMarkdown = () => {
    const mdContent = `# ${currentBlog.title}
*${currentBlog.subtitle}*

**Publication:** Allure Haute Coiffure Magazine (${currentBlog.date})  
**Author:** ${currentBlog.author} (${currentBlog.authorRole})  
**Read Time:** ${currentBlog.readTime}  

---

> "${currentBlog.quote}"

${currentBlog.sections.map(s => `
### ${s.heading}
${s.content}
`).join('\n')}

---
**Allure Hair Couture**  
1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus, 7200  
WhatsApp: +27 69 507 5835 · Tel: 028 316 3845  
[https://allure-hair-couture.co.za](https://allure-hair-couture.co.za)
`;

    downloadTextFile(`${currentBlog.month}-allure-editorial-blog.md`, mdContent, 'text/markdown;charset=utf-8');
  };

  return (
    <section className="bg-[#eeea3e10] py-20 px-4 sm:px-6 lg:px-8 border-t-8 border-[#b8943f] relative overflow-hidden">
      
      {/* Decorative Masthead Separation Banner */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-[#11100f] text-white p-8 sm:p-10 rounded-sm border border-[#b8943f] shadow-2xl relative overflow-hidden">
          
          {/* Subtle background embellishment */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none font-display text-[160px] font-bold text-[#d7bb72] leading-none select-none">
            A
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-sub font-bold tracking-[0.25em] uppercase text-[#d7bb72] mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Standalone Publication · Allure Haute Coiffure Magazine</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-normal uppercase tracking-tight text-white">
                Editorial Journal & Salon Masterclass
              </h2>
              <p className="font-serif italic text-stone-300 text-base sm:text-lg mt-2 max-w-2xl">
                In-depth expertise, hair science, and bridal styling timelines authored by Hanri, Master Stylist and Salon Owner.
              </p>
            </div>

            {/* Edition Switcher Tabs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <div className="bg-[#1c1a18] p-1 rounded-sm border border-[#383531] flex items-center">
                <button
                  onClick={() => onSwitchMonth('november')}
                  className={`px-4 py-2 text-xs font-sub font-bold uppercase tracking-widest rounded-sm transition-all ${
                    currentMonth === 'november' 
                      ? 'bg-[#b8943f] text-[#11100f] shadow-md' 
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Nov Edition (16 min)
                </button>
                <button
                  onClick={() => onSwitchMonth('december')}
                  className={`px-4 py-2 text-xs font-sub font-bold uppercase tracking-widest rounded-sm transition-all ${
                    currentMonth === 'december' 
                      ? 'bg-[#b8943f] text-[#11100f] shadow-md' 
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Dec Edition (18 min)
                </button>
              </div>

              <button
                onClick={downloadArticleHtml}
                className="px-4 py-2 bg-transparent border border-[#d7bb72] text-[#d7bb72] hover:bg-[#d7bb72] hover:text-[#11100f] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Article</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Magazine Layout (2 Columns: Table of Contents + Article Paper) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Table of Contents Sidebar */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <div className="bg-white border border-[#e1dcd4] p-6 rounded-sm shadow-sm">
            <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-3 flex items-center gap-2">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Issue Overview & Index</span>
            </div>

            <h3 className="font-display font-medium text-lg text-[#11100f] mb-3">
              Table of Contents
            </h3>

            <div className="space-y-2 border-t border-[#e1dcd4] pt-3 text-xs font-sans-clean">
              {currentBlog.sections.map((sec, idx) => (
                <a
                  key={idx}
                  href={`#sec-${idx}`}
                  className="flex items-start gap-2 py-1.5 text-stone-700 hover:text-[#b8943f] transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#b8943f] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="line-clamp-2 leading-relaxed font-medium">{sec.heading}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#e1dcd4] space-y-3">
              <button
                onClick={handleShareArticle}
                className="w-full py-2 bg-[#faf8f3] border border-[#e1dcd4] hover:border-[#b8943f] text-stone-800 font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                {copiedShareLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedShareLink ? 'Link Copied!' : 'Share Publication'}</span>
              </button>
            </div>
          </div>

          {/* Author Card */}
          <div className="bg-[#11100f] text-white p-6 rounded-sm border border-[#b8943f]/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#b8943f] text-[#11100f] flex items-center justify-center font-display font-bold text-xl">
                H
              </div>
              <div>
                <h4 className="font-display font-medium text-base text-white">{currentBlog.author}</h4>
                <p className="text-xs text-[#d7bb72] font-sub uppercase tracking-wider">{currentBlog.authorRole}</p>
              </div>
            </div>
            <p className="font-serif italic text-xs text-stone-300 leading-relaxed">
              Founder & Master Stylist at Allure Hair Couture. Specialized in architectural bridal updos, Wella colour formulations, and hair restoration in Hermanus.
            </p>
          </div>
        </div>

        {/* Right Editorial Paper Article */}
        <article className="lg:col-span-8 bg-[#fdfbf7] border-2 border-[#e1dcd4] p-6 sm:p-14 rounded-sm shadow-md">
          
          {/* Magazine Header */}
          <div className="mb-10 text-center sm:text-left border-b border-[#e1dcd4] pb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-3">
              <span>ALLURE HAUTE COIFFURE · {currentBlog.date.toUpperCase()} EDITION</span>
              <span className="bg-[#b8943f] text-[#11100f] px-2 py-0.5 rounded-sm">Expanded Master Class</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-medium text-[#11100f] tracking-tight leading-tight mb-4">
              {currentBlog.title}
            </h1>

            <p className="font-serif italic text-stone-600 text-lg sm:text-xl mb-6">
              {currentBlog.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-sans-clean text-stone-500 pt-4 border-t border-[#e1dcd4]/70">
              <span className="flex items-center gap-1.5 font-medium text-stone-800">
                <User className="w-3.5 h-3.5 text-[#b8943f]" />
                By {currentBlog.author} ({currentBlog.authorRole})
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#b8943f]" />
                {currentBlog.readTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#b8943f]" />
                {currentBlog.date}
              </span>
            </div>
          </div>

          {/* Pull Quote Box */}
          <blockquote className="my-8 py-6 px-8 border-l-4 border-[#b8943f] bg-[#f5f0e6] font-serif italic text-xl sm:text-2xl text-[#282624] leading-relaxed rounded-r-sm shadow-inner">
            "{currentBlog.quote}"
          </blockquote>

          {/* Expanded Sections */}
          <div className="space-y-10 font-serif text-lg leading-relaxed text-[#282624]">
            {currentBlog.sections.map((sec, idx) => (
              <div id={`sec-${idx}`} key={idx} className="space-y-3 pt-4 border-t border-[#e1dcd4]/60">
                <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#11100f] tracking-tight">
                  {sec.heading}
                </h3>
                <p className="text-stone-800 leading-loose text-justify">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* High-Resolution Editorial Gallery */}
          <div className="mt-14 pt-10 border-t-2 border-[#11100f]">
            <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-4 text-center">
              Editorial Photo Showcase
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentBlog.images.map((imgUrl, i) => (
                <div 
                  key={i}
                  onClick={() => setSelectedImage(imgUrl)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-[#e1dcd4] cursor-pointer bg-stone-900"
                >
                  <img
                    src={imgUrl}
                    alt={`Editorial feature ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#11100f]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-sub font-bold tracking-widest uppercase">
                    Enlarge Image
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Export Bar */}
          <div className="mt-12 pt-8 border-t border-[#e1dcd4] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={downloadArticleHtml}
                className="px-4 py-2.5 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Article (HTML)</span>
              </button>

              <button
                onClick={downloadArticleMarkdown}
                className="px-4 py-2.5 bg-white border border-[#e1dcd4] hover:border-[#b8943f] text-stone-800 font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download (.md)</span>
              </button>
            </div>

            <a
              href="https://wa.me/27695075835?text=Hi%20Allure,%20I%20read%20your%20blog%20and%20would%20like%20to%20enquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#11100f] text-white hover:bg-[#8f6c24] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              Consult With Hanri
            </a>
          </div>

        </article>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-[#11100f]/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="max-w-3xl max-h-[90vh] bg-white p-2 rounded-sm border border-[#b8943f]">
            <img 
              src={selectedImage} 
              alt="Editorial View" 
              className="max-h-[80vh] w-auto object-contain mx-auto" 
            />
            <div className="text-center py-2 text-xs font-sans-clean text-stone-600">
              Click anywhere to dismiss
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
