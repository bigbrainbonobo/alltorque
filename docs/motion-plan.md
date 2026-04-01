# Motion Plan - alltorque.xyz Homepage
**Project:** North Geelong Diesel
**Design Direction:** Industrial Powerhouse
**Motion Philosophy:** Premium Cinematic Industry

---

## Motion Philosophy

### Core Principles
Motion on alltorque.xyz should feel like **precision machinery in motion** — smooth, powerful, intentional, and engineered. Not playful, not bouncy, not gimmicky. Every animation serves a purpose:

1. **Hierarchy:** Guide attention to important elements
2. **Flow:** Create natural scroll progression
3. **Depth:** Reinforce layering and spatial relationships
4. **Impact:** Make key moments memorable
5. **Trust:** Convey quality and professionalism

### Motion Character
- **Industrial Precision:** Smooth but authoritative, not soft
- **Cinematic Timing:** Slower, more deliberate than typical web
- **Heavy Machinery Feel:** Substantial movements, not floaty
- **Engineered Easing:** Mechanical curves, not organic bounces

### What This Is Not
- ❌ Bouncy, playful animations
- ❌ Excessive parallax (motion sickness)
- ❌ Constant movement (distracting)
- ❌ Animations that block content
- ❌ Effects that hurt readability

---

## Performance Budget

### Animation Limits
- **Maximum simultaneous animations:** 3-4 elements
- **Maximum complexity per section:** 5-6 motion effects
- **Frame rate target:** Consistent 60fps
- **Motion budget:** 70% of sections use motion, 30% static for rhythm

### Technical Requirements
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly (only on active animations)
- Debounce scroll events (max 1 check per 16ms)
- Use Intersection Observer for viewport detection

---

## Hero Entrance

### Initial State (Page Load)
**Before Animation:**
```css
.hero {
  background-image: url('hero-truck.jpg');
  background-size: 100%;
  background-position: center;
}

.hero__headline {
  opacity: 0;
  transform: translateY(60px);
}

.hero__subheadline {
  opacity: 0;
  transform: translateY(40px);
}

.hero__cta-primary,
.hero__cta-secondary {
  opacity: 0;
  transform: translateY(30px);
}

.hero__scroll-indicator {
  opacity: 0;
}
```

---

### Sequence Timeline

**0.0s - Background Entrance**
```
Background image: Subtle zoom in
Scale: 1.0 → 1.05
Duration: 2.5s
Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

**Effect:** Creates cinematic "opening shot" feeling, draws viewer into scene

---

**0.3s - Headline Reveal**
```
.hero__headline {
  opacity: 0 → 1
  transform: translateY(60px) → translateY(0)
  duration: 0.8s
  easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
}
```

**Effect:** Bold statement emerges with authority, not speed

---

**0.5s - Subheadline Reveal**
```
.hero__subheadline {
  opacity: 0 → 1
  transform: translateY(40px) → translateY(0)
  duration: 0.7s
  easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
}
```

**Effect:** Supporting text follows headline naturally

---

**0.8s - Primary CTA Reveal**
```
.hero__cta-primary {
  opacity: 0 → 1
  transform: translateY(30px) → translateY(0)
  duration: 0.6s
  easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
}
```

---

**1.0s - Secondary CTA Reveal**
```
.hero__cta-secondary {
  opacity: 0 → 1
  transform: translateY(30px) → translateY(0)
  duration: 0.6s
  easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
}
```

---

**1.5s - Scroll Indicator**
```
.hero__scroll-indicator {
  opacity: 0 → 1
  duration: 0.5s
  easing: ease-out
}

/* Continuous pulse */
animation: pulse-slow 3s ease-in-out infinite
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```

**Effect:** Subtle hint to scroll, doesn't compete with hero content

---

### Hero Scroll Behavior

**Parallax Background (Desktop Only)**
```javascript
// On scroll
const scrollPosition = window.scrollY;
const heroHeight = hero.offsetHeight;
const scrollPercent = scrollPosition / heroHeight;

// Background moves 35% slower than scroll
heroBackground.style.transform = `translateY(${scrollPosition * 0.35}px)`;

// Fade out content as user scrolls
const fadeStart = 0;
const fadeEnd = 0.5; // 50% of hero height
const fadeOpacity = 1 - (scrollPercent - fadeStart) / (fadeEnd - fadeStart);
heroContent.style.opacity = Math.max(0, fadeOpacity);
```

**Effect:** Creates depth, keeps background visible longer, fades text gracefully

**Mobile:** Disable parallax, keep static background for performance

---

### Primary CTA Pulse (Subtle)

**After hero entrance completes (2s+):**
```css
.hero__cta-primary {
  animation: cta-pulse 4s ease-out 2s infinite;
}

@keyframes cta-pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(255, 117, 36, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(255, 117, 36, 0.5),
                0 0 0 8px rgba(255, 117, 36, 0.1);
  }
}
```

**Effect:** Draws eye to primary CTA without being distracting
**Frequency:** Slow (4s cycle) to avoid annoyance

---

## Section Reveals

### Universal Section Reveal Pattern

**Trigger:** Element reaches 20% into viewport (Intersection Observer)

**Base Animation:**
```css
.section {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Variations by Section Type:**
- **Dark sections:** Fade in only (no translateY) for subtlety
- **Sections with images:** Stagger image + content (0.15s delay)
- **Grid sections:** Stagger items (covered below)

---

### Section-Specific Motion

**1. Trust Bar**

**Entry:**
```
Trigger: Enters viewport (10% threshold)
Container: Slide up + fade in (0.6s)
Delay: 0s
```

**Individual Stats:**
```
Stagger: Each stat reveals 0.12s after previous
Stats reveal: Fade + slight scale (0.95 → 1.0)
Duration: 0.5s per stat
```

**Number Count-Up:**
```javascript
// After stat is visible
const stat = document.querySelector('.stat-number');
const finalValue = parseInt(stat.dataset.value);
const duration = 1500; // 1.5s
const startTime = Date.now();

function countUp() {
  const elapsed = Date.now() - startTime;
  const progress = Math.min(elapsed / duration, 1);

  // Ease-out curve for natural deceleration
  const easeOut = 1 - Math.pow(1 - progress, 3);
  const currentValue = Math.floor(finalValue * easeOut);

  stat.textContent = currentValue;

  if (progress < 1) {
    requestAnimationFrame(countUp);
  } else {
    stat.textContent = finalValue; // Ensure final value is exact
  }
}

countUp();
```

**Icons:**
```
Icon reveal: Scale from 0.8 → 1.0 + fade
Timing: With stat number
Duration: 0.4s
```

**Sticky Behavior (Optional):**
```javascript
// When trust bar reaches top of viewport
trustBar.classList.add('is-sticky');

.trust-bar.is-sticky {
  position: fixed;
  top: 0;
  backdrop-filter: blur(20px);
  background: rgba(14, 14, 14, 0.9);
  transition: all 0.3s ease-out;
}
```

---

**2. Services Cards Grid**

**Wave Stagger Pattern:**
```
Card 1: Delay 0.0s
Card 2: Delay 0.12s
Card 3: Delay 0.24s
```

**Per Card Animation:**
```css
.service-card {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out,
              transform 0.6s ease-out;
}

.service-card.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition-delay: var(--stagger-delay);
}
```

**Diagonal Cut Accent Animation:**
```css
.service-card::before {
  /* Diagonal orange accent */
  clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 0);
  transition: clip-path 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  transition-delay: calc(var(--stagger-delay) + 0.3s);
}

.service-card.is-visible::before {
  clip-path: polygon(100% 0, 100% 32px, calc(100% - 32px) 0, 100% 0);
}
```

**Effect:** Diagonal cut "draws in" after card appears

---

**3. Fleet Spotlight (Split Section)**

**Split Animation:**
```javascript
// Image side (left)
.fleet-image {
  opacity: 0;
  transform: translateX(-60px);
  transition: opacity 0.8s ease-out,
              transform 0.8s ease-out;
}

// Content side (right)
.fleet-content {
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.8s ease-out,
              transform 0.8s ease-out;
  transition-delay: 0.15s; // Slight delay for impact
}

// When visible
.is-visible .fleet-image,
.is-visible .fleet-content {
  opacity: 1;
  transform: translateX(0);
}
```

**Content Cascade:**
```
Kicker ("FLEET MAINTENANCE"): Fade in, 0.0s delay
Headline: Slide up + fade, 0.1s delay
Benefits list: Stagger each item, 0.12s between
CTA button: Slide up + fade, 0.3s after last benefit
```

**Benefits List Stagger:**
```css
.benefit-item {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s ease-out;
}

.benefit-item:nth-child(1) { transition-delay: 0.2s; }
.benefit-item:nth-child(2) { transition-delay: 0.32s; }
.benefit-item:nth-child(3) { transition-delay: 0.44s; }
.benefit-item:nth-child(4) { transition-delay: 0.56s; }

.is-visible .benefit-item {
  opacity: 1;
  transform: translateX(0);
}
```

---

**4. Why Choose Us Grid**

**Grid Wave Reveal:**
```
Row 1: Items reveal together (0.0s delay between items in row)
Row 2: Starts 0.15s after Row 1
Row 3: Starts 0.15s after Row 2
```

**Per Item:**
```css
.why-item {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.why-item.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

**Icon Animation:**
```css
.why-item__icon {
  transform: scale(0);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: calc(var(--item-delay) + 0.2s);
}

.is-visible .why-item__icon {
  transform: scale(1);
}
```

**Effect:** Icons "pop" into place with slight elastic bounce (subtle, professional)

---

## Sticky Storytelling Moments

### Concept: Sticky Sections with Parallax Backgrounds

**Use Case:** Create "chapters" in the scroll experience where content stays fixed while background images scroll behind.

**Implementation:**

**Section 1: Fleet Maintenance Story**
```html
<section class="sticky-story">
  <div class="sticky-story__background">
    <!-- Background image -->
  </div>
  <div class="sticky-story__content">
    <!-- Text content, stays centered -->
  </div>
</section>
```

**CSS:**
```css
.sticky-story {
  position: relative;
  height: 200vh; /* 2x viewport for extended scroll */
  overflow: hidden;
}

.sticky-story__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.sticky-story__content {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 60px;
  background: rgba(14, 14, 14, 0.85);
  backdrop-filter: blur(20px);
}
```

**Scroll Behavior:**
```javascript
const stickySection = document.querySelector('.sticky-story');
const background = stickySection.querySelector('.sticky-story__background');
const content = stickySection.querySelector('.sticky-story__content');

window.addEventListener('scroll', () => {
  const rect = stickySection.getBoundingClientRect();
  const sectionHeight = stickySection.offsetHeight;
  const viewportHeight = window.innerHeight;

  // Calculate scroll progress through section (0 to 1)
  const scrollProgress = Math.max(0, Math.min(1,
    -rect.top / (sectionHeight - viewportHeight)
  ));

  // Background zooms in slightly as you scroll
  const scale = 1 + (scrollProgress * 0.1); // 1.0 → 1.1
  background.style.transform = `scale(${scale})`;

  // Content fades in at start, fades out at end
  let opacity = 1;
  if (scrollProgress < 0.15) {
    opacity = scrollProgress / 0.15; // Fade in first 15%
  } else if (scrollProgress > 0.85) {
    opacity = (1 - scrollProgress) / 0.15; // Fade out last 15%
  }
  content.style.opacity = opacity;
});
```

**Effect:** Content appears to "float" over slowly zooming background, creating cinematic depth

**Mobile:** Reduce height to 100vh, disable zoom effect for performance

---

### Alternative: Horizontal Scroll Story

**Use Case:** Service process timeline or fleet capabilities showcase

**Structure:**
```html
<section class="horizontal-story">
  <div class="horizontal-story__track">
    <div class="story-panel">Story 1</div>
    <div class="story-panel">Story 2</div>
    <div class="story-panel">Story 3</div>
  </div>
</section>
```

**Behavior:**
- Vertical scroll drives horizontal panel movement
- Each panel 100vw wide
- Smooth scroll-driven animation

**Mobile:** Stack vertically instead of horizontal scroll

---

## Services Interactions

### Card Hover Effects

**Base Hover:**
```css
.service-card {
  background: var(--surface-raised);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:hover {
  background: var(--surface-elevated);
  transform: translateY(-8px);
}
```

**Icon Hover:**
```css
.service-card__icon {
  color: var(--color-orange-vivid);
  transition: all 0.3s ease-out;
}

.service-card:hover .service-card__icon {
  color: var(--color-orange-bright);
  transform: scale(1.08);
}
```

**Diagonal Cut Glow:**
```css
.service-card::before {
  /* Diagonal accent */
  background: linear-gradient(135deg,
    var(--color-orange-vivid),
    var(--color-orange-primary)
  );
  opacity: 0.6;
  transition: opacity 0.3s ease-out;
}

.service-card:hover::before {
  opacity: 1;
}
```

**Link Arrow:**
```css
.service-card__link::after {
  content: '→';
  margin-left: 8px;
  display: inline-block;
  transition: transform 0.3s ease-out;
}

.service-card:hover .service-card__link::after {
  transform: translateX(6px);
}
```

**Effect:** Card lifts, icon brightens, arrow slides right, diagonal cut glows

---

### Service Card Focus State (Keyboard)

```css
.service-card:focus-within {
  outline: 3px solid var(--color-orange-primary);
  outline-offset: 4px;
  background: var(--surface-elevated);
  transform: translateY(-8px);
}
```

**Ensures accessibility while maintaining visual consistency**

---

### Card Click/Tap Animation

```css
.service-card:active {
  transform: translateY(-4px) scale(0.98);
  transition-duration: 0.1s;
}
```

**Provides tactile feedback on interaction**

---

## Image Movement

### Background Image Parallax

**Hero Background:**
```javascript
// Scroll-driven parallax
const heroSection = document.querySelector('.hero');
const heroBackground = heroSection.querySelector('.hero__background');

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const heroHeight = heroSection.offsetHeight;

      // Only apply parallax while hero is in view
      if (scrolled < heroHeight) {
        // Background moves 35% slower than scroll
        heroBackground.style.transform = `translateY(${scrolled * 0.35}px)`;
      }

      ticking = false;
    });

    ticking = true;
  }
});
```

**Mobile:** Disable parallax via media query
```css
@media (max-width: 768px) {
  .hero__background {
    transform: none !important;
  }
}
```

---

### Image Reveal with Mask

**Progressive Image Reveal:**
```css
.image-reveal {
  position: relative;
  overflow: hidden;
}

.image-reveal__img {
  transform: scale(1.1);
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-reveal::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--surface-low);
  transform: translateY(0);
  transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.image-reveal.is-visible::after {
  transform: translateY(100%); /* Slide down to reveal */
}

.image-reveal.is-visible .image-reveal__img {
  transform: scale(1); /* Zoom in to fill */
}
```

**Effect:** Dark overlay slides down, revealing image that subtly zooms to fill frame. Cinematic.

---

### Image Hover Zoom

**Subtle zoom on hover:**
```css
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.image-container:hover img {
  transform: scale(1.05);
}
```

**Use on:** Service images, fleet images, about images

---

### Split-Section Image Parallax

**Fleet section image:**
```javascript
const fleetSection = document.querySelector('.fleet-section');
const fleetImage = fleetSection.querySelector('.fleet-section__image');

window.addEventListener('scroll', () => {
  const rect = fleetSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Only apply when section is in viewport
  if (rect.top < windowHeight && rect.bottom > 0) {
    const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
    const translateY = (scrollPercent - 0.5) * 50; // -25px to +25px

    fleetImage.style.transform = `translateY(${translateY}px)`;
  }
});
```

**Effect:** Image moves slightly up as you scroll through section

**Mobile:** Disable via media query

---

## CTA Transitions

### Primary CTA (Orange Button)

**Base State:**
```css
.cta-primary {
  background: linear-gradient(135deg,
    var(--color-orange-primary),
    var(--color-orange-bright)
  );
  box-shadow: 0 4px 12px rgba(255, 117, 36, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

**Hover State:**
```css
.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(255, 117, 36, 0.5);
}

/* Gradient shift */
.cta-primary:hover {
  background: linear-gradient(315deg,
    var(--color-orange-primary),
    var(--color-orange-bright)
  );
}
```

---

**Diagonal Stripe Overlay (Hover):**
```css
.cta-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 60%
  );
  transition: left 0.5s ease-out;
}

.cta-primary:hover::before {
  left: 100%;
}
```

**Effect:** Light sweep across button on hover (subtle, premium)

---

**Active/Click State:**
```css
.cta-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(255, 117, 36, 0.4);
  transition-duration: 0.1s;
}
```

---

### Secondary CTA (Ghost Button)

**Base State:**
```css
.cta-secondary {
  background: transparent;
  border: 2px solid var(--color-white-pure);
  color: var(--color-white-pure);
  transition: all 0.3s ease-out;
}
```

**Hover State:**
```css
.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-orange-primary);
  color: var(--color-orange-primary);
}
```

**Active State:**
```css
.cta-secondary:active {
  background: rgba(255, 117, 36, 0.15);
  transform: scale(0.98);
}
```

---

### Sticky Mobile CTA

**Entry Animation:**
```css
.mobile-cta-sticky {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.mobile-cta-sticky.is-visible {
  transform: translateY(0);
  opacity: 1;
}
```

**Trigger:** After user scrolls past hero section

**Pulse Animation:**
```css
.mobile-cta-sticky {
  animation: mobile-cta-pulse 3s ease-out 1s infinite;
}

@keyframes mobile-cta-pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(255, 117, 36, 0.6),
                0 0 0 8px rgba(255, 117, 36, 0.2);
  }
}
```

**Effect:** Bounces in from bottom-right, pulses gently to draw attention

---

### CTA in Section Reveals

**Delay after section content:**
```css
.section-cta {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease-out;
  transition-delay: 0.6s; /* After other content */
}

.section.is-visible .section-cta {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Mobile-Safe Fallbacks

### Detect Reduced Motion Preference

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Disable parallax */
  .hero__background,
  .fleet-section__image {
    transform: none !important;
  }
}
```

---

### Mobile Performance Optimizations

**Disable Heavy Effects:**
```css
@media (max-width: 768px) {
  /* Disable parallax */
  .parallax-element {
    transform: none !important;
  }

  /* Simplify card hovers to tap states */
  .service-card:hover {
    transform: none;
  }

  .service-card:active {
    background: var(--surface-elevated);
  }

  /* Disable diagonal stripe animation */
  .cta-primary::before {
    display: none;
  }

  /* Disable sticky story zoom */
  .sticky-story__background {
    transform: none !important;
  }
}
```

---

### Touch Device Detection

```javascript
// Detect touch capability
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  document.body.classList.add('touch-device');
}

// Disable hover-dependent animations on touch
.touch-device .hover-only-animation {
  animation: none;
}
```

---

### Reduce Animation Complexity on Low-End Devices

```javascript
// Detect device performance tier (simple heuristic)
const isLowEndDevice = navigator.hardwareConcurrency <= 4 &&
                       /Android|webOS/i.test(navigator.userAgent);

if (isLowEndDevice) {
  document.body.classList.add('reduced-motion');
}
```

```css
.reduced-motion * {
  animation-duration: 0.01ms !important;
  transition-duration: 0.2s !important; /* Keep some transition for usability */
}

.reduced-motion .parallax-element {
  transform: none !important;
}

.reduced-motion .complex-animation {
  animation: none !important;
}
```

---

### Lazy Load Scroll Animations

**Only initialize scroll listeners when necessary:**
```javascript
// Intersection Observer for triggering animations
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -20% 0px', // Trigger when 20% into viewport
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');

      // Optional: Unobserve after animation to save resources
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animatable sections
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

---

## Implementation Checklist

### JavaScript Setup

**1. Intersection Observer for Section Reveals**
```javascript
// Initialize on DOMContentLoaded
const animatedSections = document.querySelectorAll('[data-animate]');
const sectionObserver = new IntersectionObserver(handleSectionReveal, {
  threshold: 0.2
});

animatedSections.forEach(section => sectionObserver.observe(section));
```

---

**2. Scroll Event Handling (Debounced)**
```javascript
let scrollTimeout;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleParallax();
      handleStickyElements();
      handleScrollProgress();
      ticking = false;
    });
    ticking = true;
  }
});
```

---

**3. Hero Entrance Sequence**
```javascript
// Trigger on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.hero').classList.add('animate-in');
  }, 100); // Small delay for smooth start
});
```

---

### CSS Class Structure

**Animation States:**
```css
/* Before animation */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(60px);
}

/* After animation triggers */
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease-out,
              transform 0.7s ease-out;
}

/* Stagger variants */
.animate-on-scroll[data-stagger="1"] { transition-delay: 0s; }
.animate-on-scroll[data-stagger="2"] { transition-delay: 0.12s; }
.animate-on-scroll[data-stagger="3"] { transition-delay: 0.24s; }
```

---

### Performance Monitoring

**Track FPS during animations:**
```javascript
let lastFrameTime = performance.now();
let fps = 60;

function measureFPS() {
  const currentTime = performance.now();
  const delta = currentTime - lastFrameTime;
  fps = Math.round(1000 / delta);
  lastFrameTime = currentTime;

  // Log if FPS drops below threshold
  if (fps < 50) {
    console.warn('Low FPS detected:', fps);
  }

  requestAnimationFrame(measureFPS);
}

// Monitor during development only
if (process.env.NODE_ENV === 'development') {
  measureFPS();
}
```

---

## Motion Summary by Section

### Hero
- **Background:** Subtle zoom (1.0 → 1.05, 2.5s) + parallax scroll
- **Text:** Stagger fade-up (headline → subheadline → CTAs)
- **CTA:** Slow pulse (4s cycle, starts at 2s)
- **Scroll:** Parallax background, fade out content

### Trust Bar
- **Entry:** Slide up + fade
- **Stats:** Stagger reveal (0.12s between)
- **Numbers:** Count-up animation (1.5s)
- **Icons:** Scale + fade with numbers
- **Optional:** Sticky with backdrop blur

### Services Cards
- **Grid:** Wave stagger (3 cards, 0.12s delay)
- **Cards:** Fade + slide up per card
- **Diagonal:** Cut accent draws in after card
- **Hover:** Lift, background shift, icon glow, arrow slide

### Fleet Spotlight
- **Split:** Image and content slide in from opposite sides
- **Content:** Cascade (kicker → headline → benefits → CTA)
- **Benefits:** Stagger list items (0.12s)
- **Image:** Subtle parallax on scroll

### Why Choose Us
- **Grid:** Row-by-row wave (0.15s between rows)
- **Items:** Fade + slide + subtle scale
- **Icons:** Pop in with elastic easing

### Contact CTA
- **Section:** Fade up on viewport entry
- **CTA:** Subtle pulse
- **Mobile Sticky:** Bounce in from bottom-right after hero

---

## Testing Protocol

### Performance Tests
- [ ] Hero animations hit 60fps consistently
- [ ] Parallax doesn't cause jank on scroll
- [ ] Mobile animations run at 60fps
- [ ] No layout shifts during animations (CLS)
- [ ] Page remains interactive during animations

### Visual Tests
- [ ] Text remains readable during all animations
- [ ] No excessive motion that could cause nausea
- [ ] Timing feels cinematic, not rushed
- [ ] Animations complete before user scrolls past
- [ ] Orange accents draw attention without overwhelming

### Accessibility Tests
- [ ] Reduced motion preference disables complex animations
- [ ] Keyboard focus states work during animations
- [ ] Screen readers don't announce animation states
- [ ] Touch targets remain accessible during animation
- [ ] No essential content hidden by motion

### Cross-Device Tests
- [ ] Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad, Android tablet)
- [ ] Low-end devices (disable heavy effects)
- [ ] High refresh rate displays (120Hz+)

---

## Final Notes

### Motion Philosophy Recap
Motion on alltorque.xyz should feel:
- **Premium:** Smooth, deliberate, cinematic timing
- **Industrial:** Mechanical precision, authoritative movements
- **Intentional:** Every animation serves hierarchy or flow
- **Accessible:** Respects user preferences and device capabilities
- **Performant:** 60fps minimum, mobile-optimized

### What Success Looks Like
When implemented correctly, users should:
- Feel impressed by the quality and polish
- Find the site easy to read and navigate
- Have a clear sense of visual hierarchy
- Remember the experience as "premium" and "professional"
- Not experience motion sickness or distraction
- Convert at high rates (motion enhances, doesn't hinder)

---

**Version:** 1.0
**Last Updated:** 2026-03-31
**Status:** Ready for Implementation
**Related Docs:** DESIGN.md, site-plan.md
