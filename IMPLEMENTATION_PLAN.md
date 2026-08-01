# The Style Robe - Website Redesign Implementation Plan

## Project Overview
Transform The Style Robe website into a modern, premium single-page application with complete content separation using content.json.

## Business Context
- **Business Name:** TSR - The Style Robe by H & S
- **Founders:** Hirwa Patel & Sanjana Upadhyay
- **Core Business:** Wedding planning and event management
- **Target Audience:** Couples planning weddings, seeking comprehensive planning services
- **Key Differentiator:** Curated vendor recommendations, custom themes, full-service packages

---

## Architecture Decision: Single-Page Application (SPA)

### Page Structure
**Single scrollable page with sections:**
1. Hero Section (with tagline and CTA)
2. About Us Section
3. Services Overview Section
4. Packages Section (with pricing cards)
5. Vendor Recommendations Section
6. Decor Gallery Section (Seasonal + Timeless)
7. Why Choose Us / Process Section
8. FAQ Section
9. Contact Section
10. Footer

### Navigation
- Fixed header with smooth scroll navigation
- Mobile hamburger menu
- Scroll-spy active state indicators

---

## Content Structure (content.json)

```json
{
  "site": {
    "name": "TSR - The Style Robe",
    "tagline": "your forever, curated",
    "founders": ["Hirwa Patel", "Sanjana Upadhyay"]
  },
  "navigation": {
    "links": [
      { "label": "Home", "href": "#hero" },
      { "label": "About", "href": "#about" },
      { "label": "Services", "href": "#services" },
      { "label": "Packages", "href": "#packages" },
      { "label": "Gallery", "href": "#gallery" },
      { "label": "Contact", "href": "#contact" }
    ]
  },
  "hero": { ... },
  "about": { ... },
  "services": { ... },
  "packages": [ ... ],
  "vendors": [ ... ],
  "decor": { ... },
  "faqs": [ ... ],
  "contact": { ... },
  "footer": { ... }
}
```

---

## Component Architecture

### Core Components
1. **App.js** - Main container, content loader
2. **Header.js** - Fixed navigation with smooth scroll
3. **Footer.js** - Contact info, social links, copyright
4. **Hero.js** - Full-screen hero with CTA
5. **About.js** - About section with founders info
6. **Services.js** - Service cards with icons
7. **Packages.js** - Pricing cards with hover effects
8. **Vendors.js** - Vendor recommendation cards
9. **Gallery.js** - Image grid with lightbox
10. **FAQ.js** - Accordion component
11. **Contact.js** - Contact form/info with CTAs

### Reusable UI Components
- **Button.js** - Primary, secondary, outline variants
- **Card.js** - Reusable card component
- **Section.js** - Section wrapper with consistent spacing
- **SectionTitle.js** - Consistent section headings

---

## Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary: #e91e63;        /* Pink - brand color */
  --primary-dark: #c2185b;
  --primary-light: #f8bbd0;
  
  /* Secondary Colors */
  --secondary: #9c27b0;      /* Purple - accent */
  --secondary-dark: #7b1fa2;
  --secondary-light: #e1bee7;
  
  /* Neutrals */
  --dark: #1a1a1a;
  --gray-dark: #333333;
  --gray: #666666;
  --gray-light: #e0e0e0;
  --white: #ffffff;
  --background: #fafafa;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  --gradient-overlay: linear-gradient(135deg, rgba(233, 30, 99, 0.9), rgba(156, 39, 176, 0.9));
}
```

### Typography
```css
/* Font Stack */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Playfair Display', Georgia, serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing System
```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
--spacing-3xl: 6rem;    /* 96px */
```

### Border Radius
```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 1rem;      /* 16px */
--radius-xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
```

---

## UI/UX Enhancements

### Animations & Transitions
1. **Scroll animations** - Fade in on scroll using Intersection Observer
2. **Hover effects** - Scale, shadow, color transitions
3. **Smooth scrolling** - Native CSS smooth scroll
4. **Loading states** - Skeleton screens for images
5. **Micro-interactions** - Button ripples, card lifts

### Interactive Elements
1. **Image gallery** - Grid with hover overlay and lightbox
2. **Accordion FAQ** - Smooth expand/collapse
3. **Pricing cards** - Hover lift effect with shadow
4. **Vendor cards** - Flip or slide reveal on hover
5. **CTA buttons** - Gradient background with hover animation

### Responsive Design
- **Mobile First:** Base styles for mobile (320px+)
- **Tablet:** 768px breakpoint
- **Desktop:** 1024px breakpoint
- **Large Desktop:** 1280px breakpoint

---

## File Structure

```
src/
├── App.js                      # Main app component
├── App.css                     # Global styles
├── index.js                    # Entry point
├── index.css                   # Reset & base styles
├── content.json                # ALL website content
├── components/
│   ├── layout/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Section.js
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Packages.js
│   │   ├── Vendors.js
│   │   ├── Gallery.js
│   │   ├── FAQ.js
│   │   └── Contact.js
│   └── ui/
│       ├── Button.js
│       ├── Card.js
│       └── SectionTitle.js
├── assets/
│   └── backdrops/
│       ├── banana.jpeg
│       ├── candle.jpeg
│       ├── green.jpeg
│       ├── led.jpg
│       ├── mirror.jpeg
│       ├── mogra.jpeg
│       ├── mughal.jpeg
│       └── rustic.avif
└── styles/
    ├── variables.css           # CSS custom properties
    ├── components.css          # Component styles
    └── utilities.css           # Utility classes
```

---

## Implementation Phases

### Phase 1: Foundation (Tasks 1-3)
- Analyze brochure content
- Create comprehensive content.json
- Set up folder structure

### Phase 2: Core Components (Tasks 4-6)
- Create reusable component architecture
- Build Header with navigation
- Build Footer with contact info

### Phase 3: Section Components (Tasks 7-13)
- Build all section components
- Implement content loading from JSON
- Add interactive features

### Phase 4: Styling & Polish (Tasks 14-16)
- Implement design system
- Add responsive styles
- Add animations and effects

### Phase 5: Integration & Testing (Tasks 17-20)
- Refactor to use content.json
- Add routing if needed
- Test responsiveness
- Verify content loading

---

## Key Features

### 1. Hero Section
- Full-screen background with overlay
- Animated tagline
- Prominent CTA button
- Scroll indicator

### 2. Services Section
- Icon-based service cards
- Hover animations
- Clear descriptions

### 3. Packages Section
- Pricing cards with comparison
- "Most Popular" badge
- Detailed inclusions
- CTA buttons

### 4. Vendor Recommendations
- Categorized vendor cards
- Top picks highlighted
- "Explore More" expandable lists

### 5. Gallery Section
- Masonry or grid layout
- Seasonal vs Timeless tabs
- Image hover effects
- Lightbox view

### 6. FAQ Section
- Accordion component
- Smooth animations
- Search functionality (optional)

### 7. Contact Section
- Multiple contact methods
- WhatsApp/Call buttons
- Instagram link
- Booking CTA

---

## Performance Optimizations

1. **Lazy loading** - Images load as they enter viewport
2. **Code splitting** - Dynamic imports for heavy components
3. **Image optimization** - WebP format with fallbacks
4. **CSS optimization** - Critical CSS inline
5. **Minification** - Production build optimization

---

## Accessibility

1. **Semantic HTML** - Proper heading hierarchy
2. **ARIA labels** - For interactive elements
3. **Keyboard navigation** - Tab order and focus states
4. **Color contrast** - WCAG AA compliance
5. **Alt text** - Descriptive image alternatives

---

## Success Metrics

1. ✅ Zero hardcoded content in components
2. ✅ All content loaded from content.json
3. ✅ Fully responsive (mobile, tablet, desktop)
4. ✅ Smooth animations and transitions
5. ✅ Fast load time (<3s)
6. ✅ Accessible (WCAG AA)
7. ✅ Modern, premium aesthetic

---

## Next Steps

Once this plan is approved, I will switch to **Code mode** to implement:
1. Create content.json with all website content
2. Build component architecture
3. Implement design system
4. Create all sections with dynamic content
5. Add responsive styles and animations
6. Test and refine
