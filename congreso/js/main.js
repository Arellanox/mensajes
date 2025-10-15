// main.js
document.addEventListener('DOMContentLoaded', function () {
  // Init AOS
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-quart'
  });

  // GSAP entrance on hero elements
  gsap.from('h2', { opacity: 0, y: 16, duration: 0.9, delay: 0.2, ease: 'power3.out' });
  gsap.from('#cta-hero', { opacity: 0, scale: 0.96, duration: 0.8, delay: 0.5 });

  // Mobile toggle (simple)
  const mobileToggle = document.getElementById('mobile-toggle');
  mobileToggle?.addEventListener('click', () => {
    const nav = document.querySelector('header nav');
    if (!nav) return;
    nav.classList.toggle('bg-black/60');
    nav.classList.toggle('backdrop-blur');
  });

  // Accordion logic
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('div'); // accordion wrapper
      const content = card.querySelector('.accordion-content');
      const arrow = btn.querySelector('svg');

      // toggle this
      const isOpen = !content.classList.contains('hidden');

      // close other accordions
      document.querySelectorAll('.accordion-content').forEach(c => {
        c.classList.add('hidden');
        c.parentElement?.querySelector('.accordion-toggle svg')?.style.transform = '';
        c.parentElement?.classList.remove('accordion-open');
      });

      if (isOpen) {
        // was open -> close it
        content.classList.add('hidden');
        btn.closest('div')?.classList.remove('accordion-open');
        arrow.style.transform = '';
      } else {
        // open it
        content.classList.remove('hidden');
        btn.closest('div')?.classList.add('accordion-open');
        arrow.style.transform = 'rotate(180deg)';
        // smooth scroll to the opened section (nice touch)
        content.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // small pulse animation for top CTA occasionally (subtle)
  const ctaTop = document.getElementById('cta-top');
  if (ctaTop) {
    setInterval(() => {
      gsap.fromTo(ctaTop, { scale: 1 }, { scale: 1.03, duration: 0.6, yoyo: true, repeat: 1, ease: 'power1.inOut' });
    }, 5000);
  }

});
s
