# Design Guidelines: Deepak Singh Portfolio Website

## Design Approach: Reference-Based (Developer Portfolio Pattern)

**Primary References:** Modern developer portfolio aesthetics drawing from the provided templates, combining Gursimran Singh's clean structure with Ryan Fitzgerald's contemporary polish.

**Design Philosophy:** Professional, code-focused portfolio that balances visual appeal with developer credibility. Emphasis on readability, smooth interactions, and showcasing technical expertise.

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (Default):**
- Background: 220 15% 12% (deep slate)
- Surface: 220 15% 16% (elevated slate)
- Primary Accent: 210 100% 58% (vibrant blue)
- Secondary Accent: 160 60% 45% (teal)
- Text Primary: 0 0% 98% (near white)
- Text Secondary: 220 10% 70% (muted gray)

**Light Mode Alternative:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 15% 12%
- Accent colors remain consistent

### B. Typography

**Font Stack:**
- Primary: 'Inter' via Google Fonts (headings, body)
- Code/Monospace: 'JetBrains Mono' (code snippets, tech labels)

**Type Scale:**
- Hero Title: text-6xl/text-7xl, font-bold (72-80px desktop)
- Section Headings: text-4xl/text-5xl, font-bold
- Subsection: text-2xl, font-semibold
- Body: text-base/text-lg, font-normal
- Caption: text-sm, text-secondary

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, py-16, etc.)

**Container Strategy:**
- Max-width: max-w-6xl for content sections
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gap: gap-8 to gap-16 between major elements

**Grid System:**
- Skills: 3-4 columns on desktop (grid-cols-3 lg:grid-cols-4)
- Projects: 1-column cards with side-by-side layout on larger screens
- Experience/Education: Timeline layout (single column with left indicator)

---

## Section-Specific Design

### 1. Navigation Bar
- Fixed/sticky header with backdrop blur
- Logo/Name on left, nav links center, social icons right
- Smooth scroll navigation to sections
- Mobile: Hamburger menu with slide-in drawer

### 2. Hero Section (100vh or 90vh)
**Layout:** Full viewport height with centered content
**Elements:**
- Greeting text: "Hi, I'm" in accent color, smaller text
- Name: Massive, bold typography (Deepak Singh)
- Tagline: "Full Stack Developer" with gradient text effect or accent color
- Brief one-liner from professional summary
- Primary CTA: "View Projects" button (primary accent)
- Secondary CTA: "Download Resume" (outline variant with backdrop blur)
- Social links row: GitHub, LinkedIn, Leetcode icons (horizontal)

**Visual Treatment:**
- Animated gradient background or subtle particle effect
- Terminal/code-themed decorative element (optional SVG)
- Profile image: Circular, 200-250px, positioned strategically (right side or subtle background)

### 3. About Section
**Layout:** Two-column on desktop (40% image, 60% text)
**Elements:**
- Professional summary text (from resume)
- Key highlights in bullet points or pill badges
- Profile image placeholder (if not in hero)
- Tech stack quick-view: Small icon row of primary technologies

### 4. Skills Section
**Design:** Card grid with icon + label pattern
**Technology Cards:**
- Icon at top (use DevIcons or similar CDN library)
- Technology name below
- Subtle hover effect: lift + glow
- Categories: Frontend, Backend, Database, Tools (or mixed grid)
- 12 total skill cards displaying: Java, Python, React, Node.js, Express, MongoDB, MySQL, PostgreSQL, Firebase, Tailwind, Git, Figma

### 5. Projects Section
**Layout:** Vertical card stack (1-column on mobile, alternating image-text on desktop)

**Project Cards (5 Total):**

1. **City Guardian** (Real)
   - Title + brief description
   - Tech stack badges: Flutter, Firebase, AI/ML
   - GitHub + Live demo buttons
   - Project thumbnail image placeholder

2. **AlgoQuest** (Real)
   - MERN stack badges
   - Algorithm visualizer screenshot placeholder
   - Links to repo and live site

3-5. **Dummy Projects** (Editable placeholders):
   - E-commerce Platform (React, Node, Stripe)
   - Task Management Dashboard (Next.js, TypeScript)
   - Real-time Chat Application (Socket.io, MongoDB)
   - Each with placeholder image, description, tech stack, and link buttons

### 6. Experience Section
**Design:** Timeline layout with left accent bar
**Cards:**
- CodeUnia Internship (Jul-Aug 2025)
- GSSoC Contributor (June 2025-Present)
- Each with: Company name, role, duration, 3 bullet achievements

### 7. Education Section
**Design:** Clean card layout (horizontal on desktop)
**Entries:**
- MITRC B.Tech (2022-2026, CGPA 8.9)
- Kendriya Vidyalaya 12th (76%)
- Army Public School 10th (84%)

### 8. Resume Download Section
**Prominent Section:** Dedicated area before contact
**Elements:**
- Headline: "View My Resume" or "Want to know more?"
- PDF preview thumbnail (first page preview or placeholder)
- Two large buttons:
  - "View Resume" (opens in new tab)
  - "Download PDF" (downloads file)
- Last updated date
- File size indicator

### 9. Contact Section
**Design:** Clean CTA block
**Elements:**
- Headline: "Let's Connect"
- Email: deepaksingh91065@gmail.com (large, clickable)
- Social icons row (larger size)
- Optional simple contact form
- Background: Subtle gradient or different background color for contrast

### 10. Footer
**Minimal Design:**
- Name + copyright
- Quick links to sections
- Social icons repeated
- "Made with React" or tech stack used

---

## Component Library

### Buttons
- Primary: Filled with primary accent, white text
- Secondary: Outline variant with accent border
- On images: Outline with backdrop-blur-md background
- Hover: Transform scale-105, brightness increase

### Cards
- Background: Surface color (elevated from page bg)
- Border: 1px solid with low opacity accent
- Radius: rounded-lg or rounded-xl
- Shadow: Subtle on hover (shadow-xl)
- Padding: p-6 to p-8

### Badges/Pills (Tech Stack)
- Small rounded-full pills
- Background: Accent color with 10% opacity
- Text: Accent color
- Spacing: gap-2 in flex-wrap

### Icons
- Library: Heroicons for UI icons, DevIcons for technology logos
- Size: Consistent w-6 h-6 for UI, w-12 h-12 for tech skills

---

## Animations & Interactions

**Use Sparingly:**
- Fade-in on scroll for sections (use Intersection Observer)
- Hover lift effect on cards (transform translateY(-4px))
- Smooth scroll behavior for navigation
- Button scale on hover (scale-105)
- No parallax, no heavy animations

---

## Images

**Hero Section:**
- Large decorative illustration or abstract tech pattern (SVG) as background element
- OR profile photo (circular, professional headshot) - positioned right side

**About Section:**
- Professional profile photo (if not in hero)

**Projects:**
- 5 project thumbnail images (screenshots or placeholder mockups)
- Aspect ratio: 16:9 or 3:2
- City Guardian: Mobile app mockup
- AlgoQuest: Dashboard screenshot
- Dummy projects: Generic UI mockups

**Resume Section:**
- PDF first page thumbnail preview

---

## Accessibility & Responsiveness

- All interactive elements keyboard navigable
- Focus states clearly visible (ring-2 ring-accent)
- Semantic HTML structure
- Mobile-first responsive: stack columns, adjust font sizes
- Breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- Dark mode toggle (optional) in navigation

---

## Technical Implementation Notes

- Single-page application (SPA) with smooth scroll navigation
- React components: reusable for projects, experience, education cards
- Resume PDF hosted in /public folder
- Social links: External, open in new tab
- Lazy load images for performance
- Use Framer Motion or CSS transitions for animations