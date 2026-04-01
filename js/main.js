// Main JavaScript - alltorque.xyz
// Motion and interaction handling

(function() {
  'use strict';

  // ========== Mobile Menu Toggle ==========

  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav__menu--open');
      document.body.style.overflow = navMenu.classList.contains('nav__menu--open') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav__menu--open');
        document.body.style.overflow = '';
      });
    });
  }

  // ========== Sticky Navigation ==========

  const nav = document.querySelector('.nav');

  if (nav) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // ========== Hero Entrance Animation ==========

  window.addEventListener('load', () => {
    setTimeout(() => {
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.classList.add('hero--animate-in');
      }
    }, 100);
  });

  // ========== Scroll-Triggered Animations (Intersection Observer) ==========

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -20% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // Observe split sections
  const splitSections = document.querySelectorAll('.split--animate');
  splitSections.forEach(el => observer.observe(el));

  // Observe why-items for icon pop
  const whyItems = document.querySelectorAll('.why-item');
  whyItems.forEach(el => observer.observe(el));

  // ========== Mobile Sticky CTA ==========

  const mobileCTA = document.querySelector('.mobile-cta-sticky');

  if (mobileCTA) {
    window.addEventListener('scroll', () => {
      const hero = document.querySelector('.hero');
      if (!hero) return;

      const heroBottom = hero.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroBottom * 0.8) {
        mobileCTA.classList.add('is-visible');
      } else {
        mobileCTA.classList.remove('is-visible');
      }
    });
  }

  // ========== Number Count-Up Animation ==========

  function countUp(element, target, duration = 1500) {
    const startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(target * easeOut);

      element.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    }

    update();
  }

  // Observe trust bar numbers
  const trustNumbers = document.querySelectorAll('.trust-bar__number');

  if (trustNumbers.length > 0) {
    const trustObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-count'));
          if (!isNaN(target)) {
            countUp(entry.target, target);
          }
          trustObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    trustNumbers.forEach(num => trustObserver.observe(num));
  }

  // ========== Hero Parallax (Desktop Only) ==========

  const hero = document.querySelector('.hero');
  const heroBackground = hero ? hero.querySelector('.hero__background') : null;
  const heroContent = hero ? hero.querySelector('.hero__content') : null;

  if (hero && heroBackground && window.innerWidth > 768) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const heroHeight = hero.offsetHeight;

          if (scrolled < heroHeight) {
            // Parallax background
            heroBackground.style.transform = `translateY(${scrolled * 0.35}px)`;

            // Fade out content
            const fadeStart = 0;
            const fadeEnd = heroHeight * 0.5;
            const scrollPercent = (scrolled - fadeStart) / (fadeEnd - fadeStart);
            const fadeOpacity = Math.max(0, 1 - scrollPercent);

            if (heroContent) {
              heroContent.style.opacity = fadeOpacity;
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    });
  }

  // ========== Form Handling ==========

  const forms = document.querySelectorAll('form[data-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // TODO: Implement actual form submission
      console.log('Form submitted:', new FormData(form));

      // Show success message (placeholder)
      alert('Thank you! We will contact you shortly.');
      form.reset();
    });
  });

  // ========== Smooth Scroll for Anchor Links ==========

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== Active Navigation Highlighting ==========

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('nav__link--active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('nav__link--active');
        }
      });
    });
  }

  // ========== Click-to-Call Tracking ==========

  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

  phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
      // TODO: Add analytics tracking
      console.log('Phone call initiated');
    });
  });

})();
