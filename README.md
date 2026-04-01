# North Geelong Diesel Website
**Domain:** alltorque.xyz
**Design Direction:** Industrial Powerhouse (Premium Industrial Aesthetic)

## Project Structure

```
/home/mark/web/alltorque/
├── index.html                 # Homepage (production-ready)
├── services.html              # Services page
├── fleet.html                 # Fleet Maintenance page
├── parts.html                 # Parts & Components page
├── about.html                 # About Us page
├── contact.html               # Contact page
├── css/
│   ├── 00-reset.css          # CSS reset and base styles
│   ├── 01-variables.css      # Design system variables
│   ├── 02-typography.css     # Typography styles
│   ├── 03-layout.css         # Layout and grid system
│   ├── 04-components.css     # Reusable components (buttons, cards, nav, forms)
│   ├── 05-sections.css       # Section-specific styles
│   ├── 06-utilities.css      # Utility classes
│   └── 07-animations.css     # Motion and animations
├── js/
│   └── main.js               # Main JavaScript (animations, interactions)
├── assets/
│   ├── hero-diesel-truck-dusk-primary.jpg
│   ├── services-workshop-bay-hoist.jpg
│   ├── fleet-lineup-organized.jpg
│   ├── about-workshop-facility-wide.jpg
│   ├── parts-inventory-organized.jpg
│   └── contact-background-industrial-sunset.jpg
└── docs/                      # Project documentation
    ├── site-plan.md
    ├── DESIGN.md
    ├── motion-plan.md
    ├── stitch-homepage-directions.md
    └── nano-banana-prompts.md
```

## Design System

### Color Palette
- **Primary Background:** Oil-slick black (#0e0e0e)
- **Primary Accent:** Hazard orange (#ff7524)
- **Text:** White and grey scale
- **Surfaces:** Tonal depth system (7 layers)

### Typography
- **Display Font:** Space Grotesk (headlines, numbers)
- **Body Font:** Inter (body text, UI)
- **Scale:** Extreme contrast (Display XL: 72px, Body: 16px)

### Motion
- Hero entrance animations
- Scroll-triggered reveals
- Parallax backgrounds (desktop only)
- Card hover effects
- Number count-up animations
- Mobile sticky CTA

## Features Implemented

✅ **Homepage:**
- Cinematic hero with parallax
- Trust bar with animated stats
- Services grid with hover effects
- Fleet maintenance spotlight
- Why choose us section
- Contact CTA with background
- Comprehensive footer
- Mobile sticky call button

✅ **Navigation:**
- Fixed navigation with scroll effects
- Mobile hamburger menu
- Active page highlighting

✅ **Components:**
- Primary, secondary, tertiary buttons
- Service cards with diagonal accents
- Forms with proper validation states
- Responsive grid system
- Split layouts
- Image zoom effects

✅ **Animations:**
- Hero entrance sequence
- Scroll-triggered section reveals
- Number count-up
- Card stagger animations
- Icon pop effects
- Reduced motion support

✅ **Responsive:**
- Mobile-first approach
- Breakpoints: 375px, 640px, 768px, 1024px, 1280px, 1440px
- Sticky mobile CTA
- Mobile menu
- Simplified animations on mobile

## TODO: Required Updates

### Business Information
Replace placeholder content with actual business details:

1. **Phone Number**
   - Current placeholder: `(03) 5272 1234`
   - Replace in: All pages (nav, footer, CTAs, contact page)
   - Search for: `tel:+61352721234` and `(03) 5272 1234`

2. **Address**
   - Current placeholder: `123 Workshop Road, North Geelong VIC 3215`
   - Replace in: Footer (all pages), contact page
   - Add Google Maps embed/link on contact page

3. **Operating Hours**
   - Current placeholder: Mon-Fri 7AM-5PM, Sat 8AM-12PM
   - Verify and update in: Footer, contact page

4. **Business Details**
   - Add ABN to footer
   - Add certifications/accreditations
   - Add privacy policy link
   - Add terms & conditions link

### Content Refinement

5. **About Page**
   - Add actual business story and history
   - Add team member photos and bios
   - Add specific certifications and qualifications

6. **Trust Bar Stats**
   - Verify numbers: 20 years, 500+ fleet vehicles, 24hr callout, 100% certified
   - Update if actual numbers differ

7. **Service Pages**
   - Add service-specific images to placeholder sections
   - Add pricing information or "contact for quote" guidance
   - Add more detailed service descriptions if needed

### Technical Enhancements

8. **Meta & SEO**
   - Add favicon (logo.png available in root)
   - Add Open Graph meta tags for social sharing
   - Add structured data (LocalBusiness schema)
   - Verify meta descriptions on all pages

9. **Analytics**
   - Add Google Analytics or preferred tracking
   - Set up conversion tracking for phone clicks
   - Set up form submission tracking

10. **Forms**
    - Implement actual form submission (currently placeholder alert)
    - Options: FormSpree, EmailJS, or custom backend
    - Add honeypot spam protection
    - Add email notifications

11. **Images**
    - Optimize images to WebP/AVIF format
    - Create responsive image variants (desktop, tablet, mobile)
    - Implement lazy loading for below-fold images
    - Target file sizes: <300KB for backgrounds

12. **Maps**
    - Add Google Maps embed on contact page
    - Add "Get Directions" link

### Nice to Have

13. **Additional Features**
    - Testimonials/reviews section
    - Service area map
    - Before/after gallery
    - Fleet client logos (with permission)
    - Blog/news section
    - Booking system integration
    - Live chat widget

14. **Accessibility**
    - Run WAVE accessibility audit
    - Add skip-to-content link
    - Verify all images have descriptive alt text
    - Test with screen readers

15. **Performance**
    - Optimize CSS delivery (inline critical CSS)
    - Minify CSS and JavaScript
    - Implement image optimization workflow
    - Test Core Web Vitals
    - Set up CDN for static assets

## Deployment

### Local Development
1. Navigate to project directory
2. Use a local server (e.g., `python3 -m http.server 8084`)
3. Test on http://localhost:8084

### Production Deployment
Per CLAUDE.md infrastructure:

```bash
# Manual deployment to Nginx server
scp -r /home/mark/web/alltorque/* mark@10.0.0.4:/var/www/sites/alltorque/
```

**Nginx Configuration:**
- Server: 10.0.0.4
- Server block: `/etc/nginx/sites-available/alltorque`
- Document root: `/var/www/sites/alltorque/`
- Proxy: NPM at 10.0.0.3
- SSL: Via NPM (Let's Encrypt)
- Cloudflare: DNS + proxy protection

**GitHub (Future):**
- Repo: github.com/bigbrainbonobo/alltorque (to be created)
- Set up GitHub Actions for auto-deployment

## Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

## Design Credits
- Design Direction: Industrial Powerhouse
- Typography: Space Grotesk + Inter (Google Fonts)
- Images: Generated via Nano Banana Pro
- Motion Design: Custom CSS animations + Intersection Observer

## License
© 2024 North Geelong Diesel. All rights reserved.

---

**Last Updated:** 2024-03-31
**Status:** Production-ready MVP with placeholder content
**Next Step:** Replace TODO items with actual business information
