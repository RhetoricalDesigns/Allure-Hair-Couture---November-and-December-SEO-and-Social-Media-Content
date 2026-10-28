const nav = document.querySelector('.nav:not(.site-nav)');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60), { passive: true });
function setMenuOpen(open) {
  links?.classList.toggle('open', open);
  toggle?.classList.toggle('open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.style.overflow = open ? 'hidden' : '';
}
toggle?.addEventListener('click', () => setMenuOpen(!links.classList.contains('open')));
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && links?.classList.contains('open')) { setMenuOpen(false); toggle?.focus() } });
const reveal = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); reveal.unobserve(e.target) } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => { const item = button.closest('.faq-item'); const open = item.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)) }));
document.querySelectorAll('.footer').forEach(footer => {
  const phone = footer.querySelector('a[href^="tel:"]');
  if (!phone) return;
  phone.href = 'tel:0283163845';
  phone.textContent = '028 316 3845';
  if (!footer.querySelector('a[href*="wa.me"]')) {
    const item = document.createElement('li');
    item.innerHTML = '<a href="https://wa.me/27695075835">WhatsApp: +27 69 507 5835</a>';
    phone.closest('li')?.after(item);
  }
});
if (location.pathname.endsWith('/about.html')) {
  const teamGallery = document.querySelector('.team-grid-about');
  if (teamGallery && !teamGallery.querySelector('img[src*="Staff9 - Angelique"]')) {
    const portrait = document.createElement('figure');
    portrait.className = 'team-portrait';
    portrait.innerHTML = '<img src="Media/Live/Staff9 - Angelique - Operator.jpeg" alt="A member of the Allure Hair Couture salon team" loading="lazy"><figcaption class="portrait-caption"><strong>Angelique</strong><span>Operator</span></figcaption>';
    const lastPortrait = teamGallery.lastElementChild;
    if (lastPortrait) teamGallery.insertBefore(portrait, lastPortrait);
    else teamGallery.append(portrait);
  }
}
if (location.pathname.endsWith('/bridal-events.html')) {
  const priceList = document.createElement('section');
  priceList.className = 'bridal-price-list';
  priceList.setAttribute('aria-labelledby', 'bridalPriceListTitle');
  priceList.innerHTML = '<div class="bridal-price-list-inner"><p class="section-mark">Bridal &amp; Events</p><h2 id="bridalPriceListTitle">Bridal pricing</h2><p>Contact the salon for current bridal pricing and availability.</p><a class="button gold" href="bookings.html">Contact the salon</a></div>';
  const style = document.createElement('style');
  style.textContent = '.bridal-price-list{padding:clamp(4rem,8vw,7rem) 1.5rem;background:#101010;color:#f4f0e8;text-align:center}.bridal-price-list-inner{max-width:760px;margin:0 auto}.bridal-price-list h2{margin:.75rem 0 1rem;font:400 clamp(2.2rem,5vw,4rem)/1 var(--serif)}.bridal-price-list p:not(.section-mark){margin:0 auto 1.5rem;max-width:36rem}';
  document.head.append(style);
  document.querySelector('main')?.append(priceList);
}
