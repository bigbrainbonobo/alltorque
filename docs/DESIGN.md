# Design System - alltorque.xyz
**Business:** North Geelong Diesel
**Domain:** alltorque.xyz
**Direction:** Industrial Powerhouse (Premium Refinement)
**Status:** Source of Truth

---

## Brand Feel Summary

### Visual Philosophy
alltorque.xyz embodies **Premium Industrial Authority** — the visual intersection of high-end workshop craftsmanship and cinematic confidence. This is not a generic local business website. It's a bold, sophisticated digital presence that positions North Geelong Diesel as the premium choice for serious diesel work.

### Core Attributes
- **Authoritative:** Confident, capable, no-nonsense
- **Premium:** Sophisticated, high-quality, invested
- **Industrial:** Authentic workshop aesthetic, engineered precision
- **Cinematic:** Dramatic lighting, strong composition, visual impact
- **Trustworthy:** Professional, reliable, established
- **Distinctive:** Memorable, unique, breaks templates

### Design Language
We use **machined precision** as our visual metaphor. Every element is sharp, intentional, and engineered. The aesthetic draws from:
- High-end automotive workshops
- Precision manufacturing environments
- Premium industrial equipment
- Cinematic industrial photography
- Technical instrumentation

### Not This
- Generic local business templates
- Construction company clichés (hard hats, blueprints, yellow/black stripes)
- Cheap industrial (rust, grunge, distressed textures)
- Overly aggressive (too much orange, harsh edges, loud)
- Consumer-friendly soft aesthetics

---

## Color System

### Foundation Palette

#### Primary Black
**Deep Industrial Black**
```
--color-black-pure: #000000
--color-black-deep: #0a0a0a
--color-black-oil: #0e0e0e
--color-black-rich: #131313
```

**Usage:**
- `--color-black-oil` (#0e0e0e): Primary background color
- `--color-black-deep` (#0a0a0a): Darkest sections, overlays
- `--color-black-rich` (#131313): Elevated surfaces, cards
- `--color-black-pure` (#000000): Shadows, depth layers

**Rule:** Never use pure white backgrounds. The site lives in darkness.

---

#### Surface Hierarchy
**Tonal Layers for Depth**
```
--surface-lowest: #000000
--surface-low: #0e0e0e (primary background)
--surface-base: #131313
--surface-raised: #1a1a1a
--surface-elevated: #1f1f1f
--surface-high: #262626
--surface-highest: #2d2d2d
```

**Usage:**
- `--surface-lowest`: Deep shadows, darkest overlays
- `--surface-low`: Page background, hero backgrounds
- `--surface-base`: Section backgrounds (when alternating)
- `--surface-raised`: Card backgrounds, content containers
- `--surface-elevated`: Hover states, active elements
- `--surface-high`: Interactive elements, form inputs
- `--surface-highest`: Top-layer UI, modals, tooltips

**Rule:** Create depth through tonal shifts, never 1px borders. A `--surface-raised` card on `--surface-low` background creates natural elevation.

---

#### Hazard Orange (Primary Accent)
**Industrial Warning Orange**
```
--color-orange-vivid: #ff6b00
--color-orange-primary: #ff7524
--color-orange-bright: #ff8c00
--color-orange-glow: #ff9159
--color-orange-soft: #ffa366
```

**Usage:**
- `--color-orange-primary` (#ff7524): Primary CTAs, critical actions
- `--color-orange-bright` (#ff8c00): Hover states, active elements
- `--color-orange-glow` (#ff9159): Soft glows, accents, highlights
- `--color-orange-vivid` (#ff6b00): Small UI elements, icons
- `--color-orange-soft` (#ffa366): Muted accents, secondary elements

**Text on Orange:**
```
--text-on-orange: #1a0800 (dark brown-black)
--text-on-orange-alt: #000000 (pure black for maximum contrast)
```

**Critical Rule:** Orange is powerful. Use sparingly.
- Primary CTA buttons only
- Critical conversion points
- Active states and focus indicators
- Small accent details
- Never fill large areas with orange
- Maximum 5-8% of visual space should be orange

---

#### White & Grey (Text & Details)
**High-Contrast Text System**
```
--color-white-pure: #ffffff
--color-white-primary: #f5f5f5
--color-white-warm: #f0f0f0
--color-grey-light: #d4d4d4
--color-grey-medium: #a0a0a0
--color-grey-dim: #808080
--color-grey-dark: #5a5a5a
```

**Usage:**
- `--color-white-pure` (#ffffff): Headlines, important text, maximum contrast
- `--color-white-primary` (#f5f5f5): Body text, primary content
- `--color-white-warm` (#f0f0f0): Supporting text, secondary content
- `--color-grey-light` (#d4d4d4): De-emphasized text, labels
- `--color-grey-medium` (#a0a0a0): Tertiary text, metadata
- `--color-grey-dim` (#808080): Disabled states, inactive elements
- `--color-grey-dark` (#5a5a5a): Subtle borders (when absolutely necessary)

**Rule:** Use pure white sparingly for maximum impact. Primary text should be #f5f5f5 for a softer, more premium feel.

---

#### Supporting Colors
**Concrete Grey (Neutral Accent)**
```
--color-concrete-light: #b8b8b8
--color-concrete-base: #9e9e9e
--color-concrete-dark: #757575
```

**Usage:**
- Secondary borders (when tonal shifts aren't enough)
- Divider lines (used sparingly)
- Icon outlines
- Disabled button states

**Steel Blue (Cool Accent - Optional)**
```
--color-steel: #6b8ca3
--color-steel-dim: #4a6b7c
```

**Usage:**
- Secondary CTAs (rare - prefer ghost buttons)
- Informational highlights
- Trust badges
- Use only when orange would be inappropriate

---

### Color Usage Rules

**Backgrounds:**
- Primary: `--surface-low` (#0e0e0e)
- Sections alternate: `--surface-low` and `--surface-base`
- Cards: `--surface-raised` (#1a1a1a)
- Overlays: `--surface-lowest` with 80-95% opacity

**Text:**
- Headlines: `--color-white-pure` (#ffffff)
- Body: `--color-white-primary` (#f5f5f5)
- Secondary: `--color-grey-light` (#d4d4d4)
- Meta: `--color-grey-medium` (#a0a0a0)

**CTAs:**
- Primary: `--color-orange-primary` background, `--text-on-orange` text
- Secondary: Ghost style (transparent background, white border, white text)
- Tertiary: Text-only, `--color-white-pure` with arrow

**Accents:**
- Critical actions: Orange
- Highlights: Orange glow
- Borders: Tonal shifts preferred, `--color-grey-dark` if needed
- Focus states: `--color-orange-bright`

**Trust Signals:**
- Numbers/Stats: `--color-white-pure` or `--color-orange-glow`
- Labels: `--color-grey-light`
- Icons: `--color-orange-vivid` or `--color-grey-medium`

---

## Typography System

### Font Families

**Headline/Display:**
```css
font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- Wide, technical, mechanical feel
- High impact, authoritative presence
- Used for headlines, numbers, data
- Strong character, engineered precision

**Body/UI:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- Clean, neutral, highly readable
- Professional without being cold
- Used for body text, labels, UI elements
- Excellent at small sizes

---

### Type Scale

**Display (Hero Headlines)**
```
--text-display-xl: 72px / 1.1 / -0.02em / 900
--text-display-lg: 64px / 1.1 / -0.02em / 900
--text-display-md: 56px / 1.15 / -0.01em / 800
--text-display-sm: 48px / 1.15 / -0.01em / 800
```
- Font: Space Grotesk
- Usage: Hero headlines, major section titles
- Color: `--color-white-pure`
- Character: Bold, commanding, cinematic

**Headline (Section Titles)**
```
--text-headline-xl: 40px / 1.2 / -0.01em / 700
--text-headline-lg: 36px / 1.25 / 0 / 700
--text-headline-md: 32px / 1.3 / 0 / 700
--text-headline-sm: 28px / 1.3 / 0 / 600
```
- Font: Space Grotesk
- Usage: Section headers, card titles
- Color: `--color-white-pure` or `--color-white-primary`

**Title (Subsections)**
```
--text-title-lg: 24px / 1.4 / 0 / 600
--text-title-md: 20px / 1.4 / 0 / 600
--text-title-sm: 18px / 1.4 / 0 / 500
```
- Font: Inter
- Usage: Subsection headers, card subtitles
- Color: `--color-white-primary`

**Body Text**
```
--text-body-lg: 18px / 1.6 / 0 / 400
--text-body-md: 16px / 1.6 / 0 / 400
--text-body-sm: 14px / 1.5 / 0 / 400
```
- Font: Inter
- Usage: Paragraphs, descriptions, content
- Color: `--color-white-primary` or `--color-white-warm`

**Label (UI Text)**
```
--text-label-lg: 16px / 1.4 / 0.05em / 600
--text-label-md: 14px / 1.4 / 0.05em / 600
--text-label-sm: 12px / 1.3 / 0.05em / 600
```
- Font: Inter
- Usage: Buttons, form labels, metadata, tags
- Transform: Uppercase
- Color: `--color-grey-light` or `--color-white-primary`

**Data/Numbers**
```
--text-data-xl: 64px / 1.1 / -0.02em / 900
--text-data-lg: 48px / 1.1 / -0.01em / 800
--text-data-md: 36px / 1.2 / 0 / 700
```
- Font: Space Grotesk
- Usage: Statistics, metrics, trust signals
- Color: `--color-orange-glow` or `--color-white-pure`
- Feature: Tabular figures

---

### Typography Usage Rules

**Headlines:**
- Use Space Grotesk for all major headlines
- Maximum 2 lines for display text
- Tight letter spacing for tension
- Never center-align large display text (left or right align)
- Generous bottom margin (48-64px)

**Body Text:**
- Use Inter for all body copy
- Maximum line length: 75 characters
- Generous line height (1.6-1.8)
- Maintain strong contrast with background
- Never use body text smaller than 16px on desktop

**Hierarchy:**
- Create extreme scale jumps (not gradual)
- Display text should dwarf body text
- Use weight and color to reinforce hierarchy
- Orange accent on key phrases sparingly

**Labels/UI:**
- Always uppercase for labels and buttons
- Add letter spacing (0.05em minimum)
- Use medium to semibold weights
- Keep concise (1-3 words)

---

## Spacing & Layout Rhythm

### Spacing Scale
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 40px
--space-8: 48px
--space-9: 64px
--space-10: 80px
--space-11: 96px
--space-12: 120px
--space-13: 160px
--space-14: 200px
```

### Section Rhythm
**Vertical Spacing:**
- Section padding (desktop): `--space-12` to `--space-13` (120-160px)
- Section padding (mobile): `--space-9` to `--space-10` (64-80px)
- Between major elements: `--space-8` to `--space-9` (48-64px)
- Between related elements: `--space-5` to `--space-6` (24-32px)
- Between small elements: `--space-3` to `--space-4` (12-16px)

**Rule:** Premium sites need breathing room. When in doubt, add more space.

### Grid System
**Desktop (1440px max-width):**
- 12 columns
- Gutter: 32px (`--space-6`)
- Container padding: 48px (`--space-8`)
- Max content width: 1344px

**Tablet (768px-1023px):**
- 8 columns
- Gutter: 24px (`--space-5`)
- Container padding: 32px (`--space-6`)

**Mobile (<768px):**
- 4 columns
- Gutter: 16px (`--space-4`)
- Container padding: 24px (`--space-5`)

### Breakpoints
```
--breakpoint-xs: 375px
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1440px
```

---

## Section Design Patterns

### Hero Section
**Structure:**
- Full viewport height (100vh) or near-full (90vh)
- Full-bleed background image with dark overlay
- Content left-aligned or centered
- Strong headline (Display XL)
- Supporting subheadline (Title LG)
- Primary + Secondary CTA
- Scroll indicator (optional)

**Background:**
- Dark overlay: 40-60% black gradient (top-to-bottom or center-to-edge)
- Image: High-contrast, dramatic lighting, diesel truck or workshop
- Treatment: Subtle parallax on scroll

**Content:**
- Headline: "ALL TORQUE. ALL TRUST." (or similar power statement)
- Subheadline: Clear value proposition
- CTA spacing: `--space-5` (24px) between buttons

**Motion:**
- Text stagger reveal on load (0.6s, 0.15s stagger)
- Background subtle zoom (1.02x over 2s)
- Parallax scroll (background moves 30% slower)
- Scroll indicator pulse

---

### Trust Bar Section
**Structure:**
- Full-width horizontal bar
- 4-5 trust metrics with icons
- Equal-width columns or flexible spacing
- Sticky behavior on scroll (optional)

**Content:**
- Large number (Data XL or LG) in orange or white
- Label below (Label SM, uppercase) in grey
- Icon above or inline (optional)

**Styling:**
- Background: `--surface-base` (#131313) or transparent
- Border: Subtle top/bottom line in `--color-grey-dark` (optional)
- Padding: `--space-8` vertical

**Motion:**
- Number count-up animation on viewport entry
- Icon subtle scale/fade in
- Sticky: Backdrop blur when fixed

---

### Service Cards Section
**Structure:**
- 3-column grid (desktop), 1-column (mobile)
- Equal-height cards
- Icon + Title + Description + Link

**Card Styling:**
- Background: `--surface-raised` (#1a1a1a)
- Border: None (depth from tonal shift)
- Border radius: 0px (sharp, rectilinear)
- Padding: `--space-6` to `--space-7` (32-40px)
- Diagonal cut accent: Top-left or bottom-right corner (optional)

**Card Content:**
- Icon: Orange (`--color-orange-vivid`), 48-64px
- Title: Headline MD, Space Grotesk, white
- Description: Body MD, Inter, `--color-white-warm`, 2-3 lines
- Link: Label MD, uppercase, orange, arrow icon

**Hover State:**
- Background shift: `--surface-raised` to `--surface-elevated`
- Slight lift: translateY(-4px)
- Icon color: Orange primary to orange bright
- Timing: 0.3s ease-out

**Motion:**
- Cards stagger reveal on scroll (0.1s delay between each)
- Hover: Lift + background shift
- Icon micro-animation on hover

**Diagonal Cut Detail:**
- 45° angle cut on one corner
- Cut size: 24-32px
- Fill with orange gradient (subtle)
- Optional: Thin orange border on cut edge

---

### Fleet Spotlight Section
**Structure:**
- Full-width split layout (50/50 image/content on desktop)
- Image on left, content on right (or vice versa)
- Large headline + benefits list + CTA

**Background:**
- Dark: `--surface-low` or `--surface-base`
- Image side: Full-bleed, edge-to-edge
- Content side: Generous padding

**Content:**
- Kicker: "FLEET MAINTENANCE" (Label LG, uppercase, orange)
- Headline: "Keep Your Fleet Moving" (Display MD, white)
- Benefits: Bulleted list or icon grid
- CTA: Primary button (orange)

**Image Treatment:**
- High-quality fleet/workshop photography
- Dark overlay if needed for text readability
- Subtle parallax or static

**Motion:**
- Split-screen slide in effect (image and content from opposite sides)
- Benefits items fade/slide up in sequence
- Image subtle zoom on scroll

---

### Why Choose Us Section
**Structure:**
- Grid layout (3-4 columns desktop, 2 columns tablet, 1 column mobile)
- Icon + headline + short description per item

**Item Styling:**
- Icon: 40-56px, orange or white outline
- Headline: Title SM, Space Grotesk, white
- Description: Body SM, Inter, `--color-white-warm`, 1-2 sentences
- Spacing: `--space-6` between items

**Background:**
- Alternate section color: `--surface-base` if previous was `--surface-low`
- Optional: Diagonal background pattern (subtle, 5% opacity)

**Motion:**
- Grid items wave reveal (row by row, 0.1s stagger)
- Icons scale in
- Hover: Icon color shift, subtle glow

---

### Contact CTA Section
**Structure:**
- Full-width, high-contrast section
- Large headline + subheadline + CTA buttons
- Optional: Inline form or link to contact page

**Styling:**
- Background: `--surface-lowest` (#000000) or `--surface-low`
- Optional: Diagonal top edge transition from previous section
- Padding: `--space-12` to `--space-13` (generous)

**Content:**
- Headline: "Get Your Fleet Back on the Road" (Display SM or Headline XL)
- Subheadline: Phone number (Data LG, orange or white)
- CTAs: "Get a Quote" (primary) + "Call Now" (secondary or link)

**Motion:**
- Fade up on scroll
- CTA pulse effect (subtle)

---

## Component Styles

### Buttons

**Primary Button (Orange)**
```css
background: linear-gradient(135deg, var(--color-orange-primary), var(--color-orange-bright));
color: var(--text-on-orange);
padding: 16px 32px;
font: var(--text-label-lg);
text-transform: uppercase;
letter-spacing: 0.05em;
border: none;
border-radius: 0;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 4px 12px rgba(255, 117, 36, 0.3);
```

**Hover:**
- Gradient shift (180° rotation)
- Lift: translateY(-2px)
- Shadow increase: 0 6px 20px rgba(255, 117, 36, 0.5)
- Optional: Diagonal stripe pattern overlay (subtle, 45°)

**Active:**
- Slight scale: scale(0.98)
- Shadow reduce

---

**Secondary Button (Ghost)**
```css
background: transparent;
color: var(--color-white-pure);
padding: 16px 32px;
font: var(--text-label-lg);
text-transform: uppercase;
letter-spacing: 0.05em;
border: 2px solid var(--color-white-pure);
border-radius: 0;
cursor: pointer;
transition: all 0.3s ease;
```

**Hover:**
- Background: rgba(255, 255, 255, 0.1)
- Border color: `--color-orange-primary`
- Color: `--color-orange-primary`

---

**Tertiary Button (Text Only)**
```css
background: none;
color: var(--color-white-pure);
padding: 0;
font: var(--text-label-md);
text-transform: uppercase;
letter-spacing: 0.05em;
border: none;
cursor: pointer;
transition: color 0.2s ease;
```

**After (Arrow):**
```css
content: '→';
margin-left: 8px;
transition: transform 0.2s ease;
```

**Hover:**
- Color: `--color-orange-primary`
- Arrow: translateX(4px)

---

**Button Sizing:**
- Large: 18px font, 20px vertical padding, 40px horizontal padding
- Medium: 16px font, 16px vertical padding, 32px horizontal padding
- Small: 14px font, 12px vertical padding, 24px horizontal padding

**Button Spacing:**
- Between buttons: `--space-4` (16px)
- Below headline: `--space-6` to `--space-7` (32-40px)

**Mobile:**
- Full-width buttons below 640px
- Maintain vertical rhythm
- Touch target minimum: 48px height

---

### Cards

**Standard Card**
```css
background: var(--surface-raised);
padding: var(--space-7);
border-radius: 0;
border: none;
transition: all 0.3s ease;
position: relative;
```

**Hover:**
- Background: `--surface-elevated`
- Transform: translateY(-4px)
- No shadow (depth from tonal shift only)

**Diagonal Cut Accent (Optional):**
```css
.card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 32px 32px 0;
  border-color: transparent var(--color-orange-vivid) transparent transparent;
  opacity: 0.6;
}
```

**Card Content Hierarchy:**
1. Icon (48-64px, orange, top)
2. Title (Headline SM, white, `--space-4` below icon)
3. Description (Body MD, `--color-white-warm`, `--space-3` below title)
4. Link/CTA (Label MD, orange, `--space-5` below description)

---

**Image Card**
```css
background: var(--surface-raised);
border-radius: 0;
overflow: hidden;
```

**Structure:**
- Image top (16:9 or 4:3 aspect ratio)
- Content below with padding

**Image Treatment:**
- Dark overlay gradient (bottom to top, 0-40% black)
- Text overlay possible on image (white, bottom-left)

---

### Forms

**Input Fields**
```css
background: var(--surface-high);
color: var(--color-white-primary);
padding: 16px 20px;
font: var(--text-body-md);
border: 2px solid transparent;
border-radius: 0;
transition: all 0.3s ease;
```

**Focus:**
- Border color: `--color-orange-primary`
- Optional: Subtle orange glow (box-shadow)

**Label:**
```css
color: var(--color-grey-light);
font: var(--text-label-sm);
text-transform: uppercase;
letter-spacing: 0.05em;
margin-bottom: 8px;
display: block;
```

---

**Textarea**
- Same styling as input
- Minimum height: 120px
- Resize: vertical only

---

**Select Dropdown**
- Same styling as input
- Custom arrow icon (orange)

---

**Checkbox/Radio**
- Custom styling with orange accent
- Label: `--text-body-md`, `--color-white-primary`

---

**Form Layout:**
- Field spacing: `--space-5` (24px)
- Label to input: `--space-2` (8px)
- Submit button: `--space-6` (32px) above
- Full-width fields on mobile

**Validation:**
- Error state: Red border (#ff4444), error text below in red
- Success state: Green border (#44ff44), optional checkmark

---

### Trust Signals

**Statistic Display**
```css
.stat-number {
  font: var(--text-data-xl);
  color: var(--color-orange-glow);
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font: var(--text-label-md);
  color: var(--color-grey-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 8px;
}
```

**Certification Badges**
- Icon/logo: 60-80px
- Background: `--surface-raised` or transparent
- Border: `--color-grey-dark` (1px, optional)
- Greyscale or subtle color
- Layout: Grid or horizontal row

**Testimonials (if used)**
- Quote text: Body LG, italic, `--color-white-primary`
- Attribution: Label MD, `--color-grey-light`
- Background: `--surface-raised`
- Optional: Orange quote marks or accent border

---

## Icon & Line Treatment

### Icons
**Style:**
- Sharp, angular, industrial aesthetic
- Stroke width: 2px
- Size: 24px (small), 40px (medium), 64px (large)
- Color: `--color-orange-vivid` (primary) or `--color-white-primary` (secondary)

**Treatment:**
- No rounded caps (prefer square or sharp)
- Consistent stroke weight
- Minimal detail (simple, recognizable)
- Optional: Two-tone (outline + fill)

**Icon Sources:**
- Heroicons (outline style)
- Lucide Icons
- Phosphor Icons (sharp variant)
- Custom SVGs for brand icons

**Usage:**
- Service cards: Large icons (64px), orange
- Trust bar: Medium icons (40px), orange or white
- UI elements: Small icons (24px), white or grey
- Buttons: Small icons (20px), inline with text

---

### Lines & Dividers
**Rule:** Avoid lines. Use tonal shifts.

**When lines are necessary:**
- Color: `--color-grey-dark` (#5a5a5a)
- Thickness: 1px
- Opacity: 40-60%
- Usage: Subtle separation only

**Diagonal Lines (Accent):**
- 45° angle
- Thickness: 2-4px
- Color: `--color-orange-vivid` with 40-60% opacity
- Length: 40-80px
- Usage: Section breaks, accent details

**Diagonal Section Transitions:**
- Use CSS clip-path to create angled top or bottom edge
- Angle: 2-5° (subtle, not dramatic)
- Color transition: One section color to next
- Usage: Between major sections for visual flow

---

## Imagery Direction (Nano Banana Pro)

### Photography Style
**Core Aesthetic:** Cinematic industrial realism
- High contrast, dramatic lighting
- Dark, moody color grading
- Professional but authentic (not overly staged)
- Emphasis on scale and capability

---

### Lighting
- **Dramatic side lighting** or **low-key lighting**
- Strong shadows for depth
- Highlight chrome, metal, mechanical details
- Golden hour or workshop overhead lighting
- Avoid flat, even lighting

---

### Color Grading
- Desaturated overall (70-80% saturation)
- Boost orange/amber tones (workshop lights, sunset)
- Cool shadows (slight blue tint)
- Deep blacks, not grey
- High contrast (not HDR, cinematic)

---

### Composition
- **Dynamic angles:** Low perspective for vehicles (emphasize scale)
- **Rule of thirds:** Strong compositional anchor points
- **Leading lines:** Use workshop elements, vehicle lines to guide eye
- **Negative space:** Room for text overlay on hero images
- **Foreground interest:** Depth through layering

---

### Subject Matter

**Hero Images:**
1. **Heavy diesel truck** - low angle, front 3/4 view, dramatic lighting, workshop or outdoor setting
2. **Workshop action shot** - technician working on large engine, detail focus, professional environment
3. **Fleet lineup** - multiple trucks, sense of scale, organized, capable

**Service Section Images:**
1. **Diesel servicing** - technician performing maintenance, clean workshop, modern tools
2. **Engine detail** - close-up of diesel engine components, mechanical precision, chrome details
3. **Diagnostic equipment** - modern diagnostic computers, technical capability, professional setup
4. **Heavy vehicle on hoist** - scale emphasis, large truck elevated, clean workshop environment

**Fleet Section Images:**
1. **Multiple trucks** - fleet lineup, organized, well-maintained
2. **Technician with documentation** - tablet or paperwork, professional, organized
3. **Service bay with fleet vehicle** - clean, capable, professional environment

**Trust/About Images:**
1. **Workshop wide shot** - clean, organized, modern equipment visible, professional environment
2. **Diagnostic equipment close-up** - modern technology, investment in capability
3. **Team at work** - authentic action shots, not posed portraits, professional attire
4. **Certifications/equipment** - badges, modern tools, quality equipment

---

### Technical Specs
- **Resolution:** Minimum 2x for retina (3840px wide for full-width hero)
- **Aspect Ratios:**
  - Hero: 16:9 or 21:9 (cinematic wide)
  - Cards: 16:9 or 4:3
  - Split sections: 1:1 or 4:5
- **Format:** WebP with JPEG fallback (or AVIF with WebP fallback)
- **Optimization:** Aggressive compression (60-75% quality, aim for <300KB per image)
- **Treatment:** Dark overlay gradients for text readability (CSS, not baked in)

---

### Image Overlays
**Dark Gradient Overlays:**
```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.4) 0%,
  rgba(0, 0, 0, 0.6) 100%
);
```

**Radial Gradient (Center Focus):**
```css
background: radial-gradient(
  circle at center,
  rgba(0, 0, 0, 0.3) 0%,
  rgba(0, 0, 0, 0.7) 100%
);
```

**Noise Texture Overlay:**
- 2-3% opacity
- Adds cinematic grain
- Subtle, enhances premium feel

---

### Prohibited
- Generic stock photos (smiling mechanics in clean uniforms)
- Bright, cheerful lighting
- Saturated, vibrant colors
- Construction site aesthetics (hard hats, yellow equipment)
- Clip art or illustrations
- Low-resolution or pixelated images

---

## Motion Principles

### Philosophy
**Intentional, not gratuitous.** Motion enhances hierarchy and guides attention. It should feel cinematic and powerful, not gimmicky or distracting. Industrial machinery is smooth but forceful — motion should reflect this.

---

### Timing
**Durations:**
- Micro-interactions: 0.2-0.3s (hover, focus)
- Element reveals: 0.4-0.6s (fade in, slide up)
- Section transitions: 0.6-0.8s (major movements)
- Hero entrance: 0.8-1.2s (cinematic intro)

**Easing:**
- Entrances: `ease-out` or `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Exits: `ease-in` or `cubic-bezier(0.55, 0.06, 0.68, 0.19)`
- Interactive: `ease-in-out` or `cubic-bezier(0.65, 0, 0.35, 1)`

**Stagger Delays:**
- Between sequential items: 0.1-0.15s
- Between grid items: 0.08-0.12s

---

### Animation Types

**Fade + Slide Up (Element Reveal)**
```css
opacity: 0;
transform: translateY(40px);
transition: opacity 0.6s ease-out, transform 0.6s ease-out;

/* When in viewport */
opacity: 1;
transform: translateY(0);
```

**Usage:** Cards, text blocks, images on scroll

---

**Stagger Reveal (Grid/List)**
- Apply fade + slide up with increasing delays
- First item: 0s, second: 0.1s, third: 0.2s, etc.

---

**Parallax (Background Images)**
```css
transform: translateY(calc(var(--scroll-position) * -0.3));
```

**Usage:** Hero backgrounds, large section images
**Speed:** Background moves 30-40% slower than scroll

---

**Hero Text Stagger**
- Headline: 0s delay
- Subheadline: 0.15s delay
- CTA: 0.3s delay
- Each with fade + slide up

---

**Hover Lift (Cards, Buttons)**
```css
transform: translateY(-4px);
transition: transform 0.3s ease-out;
```

**Usage:** Interactive elements (cards, buttons)
**Pair with:** Background color shift, shadow increase

---

**Number Count-Up (Statistics)**
- Animate from 0 to final number
- Duration: 1.5-2s
- Easing: ease-out
- Trigger: When element enters viewport

---

**Icon Animations**
- Subtle scale (1.0 to 1.1) on hover
- Rotate (0deg to 180deg) for arrows/chevrons on expand/collapse
- Color shift (grey to orange) on hover

---

**Diagonal Cut Animation**
```css
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
transition: clip-path 0.6s ease-out;

/* Animated state */
clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
```

---

**CTA Pulse (Subtle)**
```css
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 117, 36, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(255, 117, 36, 0); }
}

animation: pulse 2s ease-out infinite;
```

**Usage:** Primary CTA in hero (subtle, slow)

---

### Scroll-Triggered Animations
**Use Intersection Observer API**
- Trigger animations when elements enter viewport
- Threshold: 20-30% of element visible
- Once only (don't re-trigger on scroll up)

**Priority:**
1. Hero entrance (on page load)
2. Trust bar (first scroll)
3. Service cards (on viewport entry)
4. Subsequent sections (as user scrolls)

---

### Sticky Elements
**Sticky Navigation:**
- Transparent initially
- Solid background (`--surface-high`) on scroll
- Backdrop blur (20px) when sticky
- Smooth transition (0.3s)

**Sticky CTA Button (Mobile):**
- Bottom-right corner
- Appears after hero section
- Slide in from bottom or fade in
- Fixed position, high z-index

---

### Reduced Motion
**Respect user preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Alternative:** Disable parallax, complex animations, but keep essential micro-interactions

---

### Motion Budget
**Don't Overdo It:**
- Maximum 3-4 motion effects per section
- Prioritize functional animations over decorative
- Ensure animations complete before user scrolls past
- Test on lower-end devices

---

## Mobile Behavior

### Layout Adaptations

**Hero:**
- Full viewport height maintained or 80vh
- Text stack vertically
- Headline size reduction (Display MD or SM)
- Buttons full-width or stacked
- Background: Simplified parallax or static

**Navigation:**
- Hamburger menu (top-right)
- Full-screen or slide-in menu overlay
- Menu background: `--surface-highest` with backdrop blur
- Close icon (X) in top-right

**Trust Bar:**
- Stack vertically (4-5 items)
- Reduce number size slightly
- Maintain icon + number + label structure
- Or horizontal scroll (swipe) if preferred

**Service Cards:**
- Single column
- Maintain card styling
- Reduce padding slightly
- Maintain hover states as tap states

**Split Sections:**
- Stack image and content vertically
- Image first, then content
- Maintain full-width image
- Content padding: `--space-5` to `--space-6`

**Forms:**
- Full-width fields
- Larger tap targets (48px minimum)
- Reduced padding slightly
- Maintain focus states

**Footer:**
- Stack columns vertically
- Centered text (optional)
- Reduce font sizes slightly

---

### Touch Interactions
- Minimum tap target: 48x48px
- Hover states become tap states
- No :hover on mobile (use @media hover)
- Swipe gestures for carousels (if used)

---

### Typography Mobile Scale
**Reduce sizes proportionally:**
- Display XL: 48px → 40px
- Display LG: 64px → 48px
- Headline XL: 40px → 32px
- Body LG: 18px → 16px
- Maintain line heights and letter spacing

---

### Spacing Mobile Scale
**Reduce section padding:**
- Section padding: 120px → 64px
- Between elements: 48px → 32px
- Card padding: 40px → 24px

---

### Sticky Mobile CTA
**Phone Button:**
```css
position: fixed;
bottom: 20px;
right: 20px;
z-index: 1000;
background: var(--color-orange-primary);
color: var(--text-on-orange);
padding: 16px 24px;
border-radius: 0;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
```

**Behavior:**
- Appears after user scrolls past hero
- Always visible on scroll
- Tap to call functionality
- Icon + "CALL NOW" text

---

### Performance
- Lazy load images below fold
- Reduce parallax complexity on mobile
- Disable heavy animations on low-end devices
- Use CSS transforms (GPU-accelerated)
- Minimize JavaScript

---

## Accessibility Rules

### Color Contrast
**WCAG 2.1 AA Minimum:**
- Normal text (16px): 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): 3:1 contrast ratio

**Current Palette Compliance:**
- White (#ffffff) on black (#0e0e0e): 19.6:1 ✓
- Light grey (#f5f5f5) on black (#0e0e0e): 18.1:1 ✓
- Orange text (#ff7524) on black (#0e0e0e): 6.8:1 ✓
- Dark text (#1a0800) on orange (#ff7524): 8.2:1 ✓

**Rule:** All text must meet minimum contrast. Test with WebAIM Contrast Checker.

---

### Focus States
**Visible Focus Indicators:**
```css
:focus {
  outline: 2px solid var(--color-orange-primary);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid var(--color-orange-primary);
  outline-offset: 2px;
}
```

**Rule:** All interactive elements must have clear focus states.

---

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order must be logical (top to bottom, left to right)
- Skip to main content link (hidden, revealed on focus)
- Escape key closes modals/menus
- Arrow keys navigate within components (if applicable)

---

### Screen Readers
**Semantic HTML:**
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- `<button>` for buttons, `<a>` for links
- Form labels with `<label>` element or aria-label

**ARIA:**
- `aria-label` for icon-only buttons
- `aria-hidden="true"` for decorative elements
- `role="button"` for clickable divs (avoid if possible, use `<button>`)
- `aria-expanded` for toggles
- `aria-live` for dynamic content

**Alt Text:**
- Descriptive alt text for all images
- Decorative images: `alt=""` or `aria-hidden="true"`
- Logo: `alt="North Geelong Diesel"`

---

### Motion & Animation
**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all animations */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Rule:** Respect user's motion preferences. Disable parallax, complex animations.

---

### Interactive Elements
- Links: Underlined or clearly visually distinct
- Buttons: Clear visual affordance (looks clickable)
- Disabled states: Reduced opacity, cursor not-allowed
- Loading states: Aria-live announcements or spinners

---

## Implementation Notes

### Technology Stack
**Recommended:**
- HTML5 (semantic)
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- No framework required (unless specified)

**Optional Enhancements:**
- Intersection Observer API (scroll animations)
- CSS custom properties (theming)
- WebP/AVIF images with fallbacks
- Lazy loading (native or library)

---

### CSS Architecture
**Structure:**
```
styles/
├── 00-reset.css (normalize, box-sizing)
├── 01-variables.css (custom properties)
├── 02-typography.css (font imports, base styles)
├── 03-layout.css (grid, spacing utilities)
├── 04-components.css (buttons, cards, forms)
├── 05-sections.css (hero, trust bar, services, etc.)
├── 06-utilities.css (helpers, overrides)
└── 07-animations.css (motion, transitions)
```

**Naming Convention:**
- BEM (Block Element Modifier) or utility classes
- Prefix component classes: `.c-button`, `.c-card`
- Prefix layout classes: `.l-container`, `.l-grid`
- Prefix utility classes: `.u-text-center`, `.u-mb-4`

---

### Performance Targets
**Core Web Vitals:**
- Largest Contentful Paint (LCP): <2.5s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1

**Optimization:**
- Critical CSS inline in `<head>`
- Defer non-critical CSS
- Lazy load images below fold
- Minify and compress assets
- Use CDN for static assets
- Optimize images (WebP, compression, sizing)

---

### Code Quality
**CSS:**
- Use CSS custom properties for theming
- Mobile-first media queries
- Avoid `!important` (use specificity)
- Comment complex selectors
- Group related properties

**JavaScript:**
- Use modern ES6+ syntax
- Minimize DOM manipulation
- Use event delegation
- Debounce scroll events
- Keep dependencies minimal

**HTML:**
- Semantic markup
- Valid, well-formed
- Accessible by default
- SEO-friendly (meta tags, headings, structure)

---

### Browser Support
**Target:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

**Fallbacks:**
- WebP → JPEG
- CSS Grid → Flexbox (if needed)
- Custom properties → Sass variables (if building)

---

### Design System Maintenance
**This Document:**
- Single source of truth for visual design
- Update as design evolves
- Version control (track changes)
- Reference in all design/development discussions

**Component Library:**
- Build components matching this spec
- Document variants and states
- Provide code snippets
- Maintain visual consistency

**Testing:**
- Regular accessibility audits
- Cross-browser testing
- Performance monitoring
- User testing for usability

---

## Keeping the Site Premium & Cohesive

### Quality Checklist

**Visual Consistency:**
- [ ] All colors from defined palette only
- [ ] Typography scale adhered to (no arbitrary sizes)
- [ ] Spacing scale used consistently
- [ ] Sharp corners everywhere (0px border-radius)
- [ ] Tonal depth (no 1px borders)
- [ ] Orange used sparingly (5-8% of visual space)

**Premium Details:**
- [ ] Generous white space (breathing room)
- [ ] High-quality imagery only (no generic stock)
- [ ] Consistent image treatment (color grading, overlays)
- [ ] Smooth, intentional motion (not gimmicky)
- [ ] Strong typographic hierarchy
- [ ] Clean, organized layouts

**Conversion Focus:**
- [ ] CTAs clearly visible (orange, high contrast)
- [ ] Phone number prominent
- [ ] Clear service offerings
- [ ] Trust signals present
- [ ] Simple, frictionless forms
- [ ] Mobile-optimized throughout

**Technical Excellence:**
- [ ] Fast loading (<3s LCP)
- [ ] Accessible (WCAG AA)
- [ ] Responsive across devices
- [ ] No layout shifts (CLS <0.1)
- [ ] Smooth animations (60fps)
- [ ] Clean, semantic code

---

### Common Pitfalls to Avoid

**Visual:**
- ❌ Too much orange (dilutes impact)
- ❌ Rounded corners (softens industrial feel)
- ❌ 1px borders everywhere (cheap look)
- ❌ Cluttered layouts (no breathing room)
- ❌ Mixing too many fonts
- ❌ Low-quality images

**Motion:**
- ❌ Excessive animation (distracting)
- ❌ Slow animations (feels sluggish)
- ❌ Motion on everything (overwhelming)
- ❌ Parallax that causes motion sickness
- ❌ Ignoring reduced motion preferences

**Content:**
- ❌ Walls of text (hard to scan)
- ❌ Unclear value proposition
- ❌ Hidden CTAs (low contrast, small)
- ❌ Complex navigation
- ❌ Too much jargon

**Technical:**
- ❌ Heavy images (slow loading)
- ❌ Layout shifts (poor CLS)
- ❌ Broken on mobile
- ❌ Inaccessible (no focus states, poor contrast)
- ❌ Over-engineered (unnecessary complexity)

---

## Summary

This design system creates a **bold, premium, industrial website** that:
- Breaks away from generic local business templates
- Maintains strong conversion focus (phone calls, quotes)
- Positions North Geelong Diesel as the premium choice
- Balances cinematic impact with practical usability
- Works beautifully on all devices
- Is accessible and performant

**Core DNA:**
- Oil-slick black backgrounds
- Hazard orange accents (sparingly used)
- Sharp, rectilinear forms (0px corners)
- Space Grotesk + Inter typography
- Generous spacing and breathing room
- High-quality industrial photography
- Intentional, cinematic motion
- Clear, high-contrast CTAs

**Implementation Priorities:**
1. Visual consistency (palette, typography, spacing)
2. Conversion clarity (CTAs, trust signals, forms)
3. Premium details (imagery, motion, polish)
4. Technical excellence (performance, accessibility)

**This document is the single source of truth for alltorque.xyz visual design.**

---

**Version:** 1.0
**Last Updated:** 2026-03-31
**Status:** Approved Design Direction
**Next Steps:** Asset creation (Nano Banana Pro), Component sourcing (21st.dev), Development
