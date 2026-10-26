import { SocialPost } from '../types/campaign';

/**
 * Downloads a raw text string as a file
 */
export function downloadTextFile(filename: string, content: string, mimeType = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Downloads an image asset with optional branding watermark overlay via HTML5 Canvas
 */
export async function downloadImageGraphic(imageUrl: string, filename: string, title?: string, label?: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 1080;
      canvas.height = img.naturalHeight || 1350;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        fallbackDirectDownload(imageUrl, filename);
        return resolve(true);
      }

      // Draw base image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      if (title || label) {
        // Draw elegant gradient scrim at bottom
        const gradient = ctx.createLinearGradient(0, canvas.height - 400, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(17, 16, 15, 0)');
        gradient.addColorStop(0.4, 'rgba(17, 16, 15, 0.7)');
        gradient.addColorStop(1, 'rgba(17, 16, 15, 0.95)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, canvas.height - 400, canvas.width, 400);

        // Gold hairline accent line
        ctx.strokeStyle = '#b8943f';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(60, canvas.height - 230);
        ctx.lineTo(160, canvas.height - 230);
        ctx.stroke();

        // Label
        if (label) {
          ctx.fillStyle = '#d7bb72';
          ctx.font = 'bold 24px Georgia, serif';
          ctx.fillText(label.toUpperCase(), 60, canvas.height - 250);
        }

        // Title
        if (title) {
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 44px Georgia, serif';
          ctx.fillText(title, 60, canvas.height - 170);
        }

        // Brand subtitle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.font = '20px sans-serif';
        ctx.fillText('ALLURE HAIR COUTURE · HERMANUS', 60, canvas.height - 110);
      }

      canvas.toBlob((blob) => {
        if (!blob) {
          fallbackDirectDownload(imageUrl, filename);
          return resolve(true);
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        resolve(true);
      }, 'image/jpeg', 0.95);
    };

    img.onerror = () => {
      fallbackDirectDownload(imageUrl, filename);
      resolve(false);
    };

    img.src = imageUrl;
  });
}

function fallbackDirectDownload(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Downloads a complete post caption bundle (text, date, hashtags, recommendations)
 */
export function downloadPostCaption(post: SocialPost) {
  const content = `ALLURE HAIR COUTURE — SOCIAL MEDIA POST SPECIFICATION
=========================================================
Post ID: ${post.id}
Campaign Month: ${post.month.toUpperCase()} 2026
Target Platform: ${post.platform}
Format / Ratio: ${post.format.toUpperCase()} (${post.aspectRatio})
Dimensions: ${post.dimensions || 'Standard'}
Scheduled Release: ${post.scheduledDate}
Category: ${post.category}

HEADLINE:
${post.headline}

PRIMARY COPY:
${post.copy}

CALL TO ACTION:
${post.ctaText ? `${post.ctaText} -> ${post.ctaLink || 'https://allure-hair-couture.co.za'}` : 'N/A'}

RECOMMENDED HASHTAGS:
${post.hashtags ? post.hashtags.join(' ') : 'N/A'}

SALON LOCATION & CONTACT:
Allure Hair Couture
1 Village Lane, Shop 5, Hemel & Aarde Village, Hermanus
WhatsApp: +27 69 507 5835
Telephone: 028 316 3845
Website: https://allure-hair-couture.co.za
=========================================================
Generated via Allure Hair Couture Campaign Portal
`;

  downloadTextFile(`${post.id}-caption.txt`, content);
}

/**
 * Generates and downloads a CSV content calendar
 */
export function generateCampaignCsv(posts: SocialPost[], campaignTitle: string) {
  const headers = ['ID', 'Date', 'Platform', 'Format', 'Category', 'Headline', 'Copy', 'CTA', 'Hashtags'];
  const rows = posts.map(p => [
    p.id,
    `"${p.scheduledDate}"`,
    `"${p.platform}"`,
    `"${p.format}"`,
    `"${p.category}"`,
    `"${p.headline.replace(/"/g, '""')}"`,
    `"${p.copy.replace(/"/g, '""')}"`,
    `"${p.ctaText || ''}"`,
    `"${(p.hashtags || []).join(' ')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadTextFile(`${campaignTitle.toLowerCase().replace(/\s+/g, '-')}-calendar.csv`, csvContent, 'text/csv;charset=utf-8');
}

/**
 * Triggers direct download of an MP4 video file
 */
export function downloadMp4File(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Generates an animated video using HTML5 Canvas and MediaRecorder API directly in the browser
 */
export async function recordCanvasAnimationToMp4(
  imageUrl: string,
  label: string,
  title: string,
  isLandscape = false,
  onProgress?: (progressPct: number) => void
): Promise<Blob | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const width = isLandscape ? 1200 : 1080;
      const height = isLandscape ? 630 : 1920;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return resolve(null);

      const stream = canvas.captureStream(30); // 30 fps
      let mimeType = 'video/mp4';
      if (!MediaRecorder.isTypeSupported('video/mp4')) {
        mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
          ? 'video/webm;codecs=vp9'
          : 'video/webm';
      }

      const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 6000000
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const finalBlob = new Blob(chunks, { type: mimeType });
        resolve(finalBlob);
      };

      recorder.start();

      const totalFrames = 120; // 4 seconds at 30fps
      let currentFrame = 0;

      function renderFrame() {
        if (currentFrame >= totalFrames) {
          recorder.stop();
          return;
        }

        const progress = currentFrame / totalFrames;
        if (onProgress) onProgress(Math.round(progress * 100));

        // Ken burns slow zoom
        const scale = 1.0 + progress * 0.15;
        const dw = width * scale;
        const dh = height * scale;
        const dx = (width - dw) / 2;
        const dy = (height - dh) / 2;

        ctx!.clearRect(0, 0, width, height);

        // Draw scaled image
        ctx!.save();
        ctx!.drawImage(img, dx, dy, dw, dh);
        ctx!.restore();

        // Overlay gradient scrim
        const scrimHeight = isLandscape ? 280 : 650;
        const grad = ctx!.createLinearGradient(0, height - scrimHeight, 0, height);
        grad.addColorStop(0, 'rgba(17,16,15,0)');
        grad.addColorStop(0.3, 'rgba(17,16,15,0.7)');
        grad.addColorStop(1, 'rgba(17,16,15,0.96)');
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, height - scrimHeight, width, scrimHeight);

        // Floating gold badge (top or over text)
        const badgeY = isLandscape ? 40 : 100;
        ctx!.fillStyle = 'rgba(17,16,15,0.85)';
        ctx!.strokeStyle = '#b8943f';
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.roundRect(60, badgeY, 260, 44, 4);
        ctx!.fill();
        ctx!.stroke();

        ctx!.fillStyle = '#d7bb72';
        ctx!.font = 'bold 16px "Zilla Slab", Georgia, serif';
        ctx!.fillText('ALLURE HAIR COUTURE', 80, badgeY + 28);

        // Animated typography fade in
        const textAlpha = Math.min(1, progress * 2.5);
        ctx!.globalAlpha = textAlpha;

        // Label
        ctx!.fillStyle = '#d7bb72';
        ctx!.font = isLandscape ? 'bold 22px Georgia, serif' : 'bold 30px Georgia, serif';
        const labelY = isLandscape ? height - 190 : height - 420;
        ctx!.fillText(label.toUpperCase(), 60, labelY);

        // Headline
        ctx!.fillStyle = '#ffffff';
        ctx!.font = isLandscape ? 'bold 42px Georgia, serif' : 'bold 64px Georgia, serif';
        const titleY = isLandscape ? height - 130 : height - 320;
        ctx!.fillText(title, 60, titleY);

        // Subtitle & Location
        ctx!.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx!.font = isLandscape ? '18px sans-serif' : '26px sans-serif';
        const subY = isLandscape ? height - 60 : height - 190;
        ctx!.fillText('Hemel & Aarde Village, Hermanus · Bespoke Luxury Hair', 60, subY);

        ctx!.globalAlpha = 1.0;
        currentFrame++;
        requestAnimationFrame(renderFrame);
      }

      renderFrame();
    };

    img.onerror = () => resolve(null);
    img.src = imageUrl;
  });
}
