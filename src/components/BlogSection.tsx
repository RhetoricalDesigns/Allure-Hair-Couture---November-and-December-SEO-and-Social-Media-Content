import React, { useState } from 'react';
import { BookOpen, Download, Share2, Clock, Calendar, User, Printer } from 'lucide-react';
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

  const downloadArticleHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${currentBlog.title} — Allure Hair Couture</title>
  <style>
    body { font-family: Georgia, serif; line-height: 1.8; color: #11100f; max-width: 800px; margin: 40px auto; padding: 20px; background: #faf8f3; }
    h1 { font-size: 2.4rem; text-transform: uppercase; margin-bottom: 0.5rem; }
    .meta { font-size: 0.85rem; color: #b8943f; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 2rem; }
    blockquote { border-left: 3px solid #b8943f; padding-left: 20px; font-style: italic; font-size: 1.25rem; margin: 2rem 0; color: #444; }
    h3 { font-size: 1.5rem; margin-top: 2rem; color: #11100f; }
    p { margin-bottom: 1.5rem; font-size: 1.1rem; }
    footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #ccc; font-size: 0.9rem; color: #666; }
  </style>
</head>
<body>
  <div class="meta">Allure Hair Couture Blog · ${currentBlog.date}</div>
  <h1>${currentBlog.title}</h1>
  <div class="meta">By ${currentBlog.author} · ${currentBlog.authorRole} · ${currentBlog.readTime}</div>
  <hr style="border: 0; border-top: 1px solid #b8943f; margin: 20px 0 30px;">
  
  <blockquote>"${currentBlog.quote}"</blockquote>

  ${currentBlog.sections.map(s => `
    <h3>${s.heading}</h3>
    <p>${s.content}</p>
  `).join('')}

  <footer>
    <strong>Allure Hair Couture</strong><br>
    1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus<br>
    WhatsApp: +27 69 507 5835 · Telephone: 028 316 3845<br>
    https://allure-hair-couture.co.za
  </footer>
</body>
</html>`;

    downloadTextFile(`${currentBlog.month}-allure-blog.html`, htmlContent, 'text/html;charset=utf-8');
  };

  const downloadArticleMarkdown = () => {
    const mdContent = `# ${currentBlog.title}
*${currentBlog.subtitle}*

**Author:** ${currentBlog.author} (${currentBlog.authorRole})  
**Date:** ${currentBlog.date}  
**Read Time:** ${currentBlog.readTime}  

---

> "${currentBlog.quote}"

${currentBlog.sections.map(s => `
### ${s.heading}
${s.content}
`).join('\n')}

---
**Allure Hair Couture**  
1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus  
WhatsApp: +27 69 507 5835 · Tel: 028 316 3845  
[https://allure-hair-couture.co.za](https://allure-hair-couture.co.za)
`;

    downloadTextFile(`${currentBlog.month}-allure-blog.md`, mdContent, 'text/markdown;charset=utf-8');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Month Selector for Editorial Blogs */}
      <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#e1dcd4]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#b8943f]" />
          <span className="text-xs font-sub font-bold uppercase tracking-widest text-[#b8943f]">
            Monthly Long-Form Editorial
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-sans-clean">
          <button
            onClick={() => onSwitchMonth('november')}
            className={`px-3 py-1 rounded-sm transition-colors ${
              currentMonth === 'november'
                ? 'bg-[#11100f] text-white font-semibold'
                : 'bg-white border border-[#e1dcd4] text-stone-600 hover:text-[#11100f]'
            }`}
          >
            November Blog
          </button>
          <button
            onClick={() => onSwitchMonth('december')}
            className={`px-3 py-1 rounded-sm transition-colors ${
              currentMonth === 'december'
                ? 'bg-[#11100f] text-white font-semibold'
                : 'bg-white border border-[#e1dcd4] text-stone-600 hover:text-[#11100f]'
            }`}
          >
            December Blog
          </button>
        </div>
      </div>

      {/* Main Blog Post Paper */}
      <article className="bg-white border border-[#e1dcd4] rounded-sm p-6 sm:p-12 shadow-sm">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-3">
            Allure Hair Couture Blog · {currentBlog.date}
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#11100f] tracking-tight leading-tight mb-4">
            {currentBlog.title}
          </h2>

          <p className="font-serif italic text-stone-600 text-lg sm:text-xl mb-6">
            {currentBlog.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans-clean text-stone-500 pt-4 border-t border-[#e1dcd4]/60">
            <span className="flex items-center gap-1.5 font-medium text-stone-800">
              <User className="w-3.5 h-3.5 text-[#b8943f]" />
              By {currentBlog.author} · {currentBlog.authorRole}
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

        <div className="w-16 h-0.5 bg-[#b8943f] mx-auto mb-10"></div>

        {/* Pullquote */}
        <blockquote className="my-8 py-4 px-6 border-l-2 border-[#b8943f] bg-[#faf8f3] font-serif italic text-xl sm:text-2xl text-[#282624] leading-relaxed">
          "{currentBlog.quote}"
        </blockquote>

        {/* Article Sections */}
        <div className="prose max-w-none text-[#282624] font-serif text-lg leading-relaxed space-y-6">
          {currentBlog.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-display font-medium text-xl sm:text-2xl text-[#11100f] pt-4">
                {sec.heading}
              </h3>
              <p className="text-stone-700 leading-loose">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* High-Resolution Editorial Gallery */}
        <div className="my-10 pt-8 border-t border-[#e1dcd4]">
          <div className="text-xs font-sub font-bold tracking-widest uppercase text-[#b8943f] mb-4 text-center">
            Editorial Photo Gallery
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
                <div className="absolute inset-0 bg-[#11100f]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-sub font-bold tracking-widest uppercase">
                  Click to View
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-10 pt-6 border-t border-[#e1dcd4] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={downloadArticleHtml}
              className="px-4 py-2 bg-[#b8943f] text-[#11100f] hover:bg-[#d7bb72] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Article (HTML)</span>
            </button>

            <button
              onClick={downloadArticleMarkdown}
              className="px-4 py-2 bg-white border border-[#e1dcd4] hover:border-[#b8943f] text-stone-700 font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.md)</span>
            </button>
          </div>

          <a
            href="https://wa.me/27695075835?text=Hi%20Allure,%20I%20read%20your%20blog%20and%20would%20like%20to%20enquire%20about%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#11100f] text-white hover:bg-[#8f6c24] font-sub font-bold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-sm"
          >
            Enquire With Hanri
          </a>
        </div>

      </article>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-[#11100f]/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="max-w-3xl max-h-[90vh] bg-white p-2 rounded-sm border border-[#b8943f]">
            <img 
              src={selectedImage} 
              alt="Editorial View" 
              className="max-h-[80vh] w-auto object-contain mx-auto" 
            />
            <div className="text-center py-2 text-xs font-sans-clean text-stone-600">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
