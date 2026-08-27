# HTML → Next.js Exact Conversion — Production Project Specification

## 1. Project Objective

Convert the provided **existing HTML project into a modern Next.js project** with maximum visual and functional fidelity.

The goal is **not to redesign, improve, modernize, or reinterpret the existing UI**.

The final Next.js application must reproduce the original HTML project as closely as technically possible:

* Same layout
* Same sections
* Same spacing
* Same dimensions
* Same typography
* Same font weights
* Same colors
* Same borders
* Same shadows
* Same gradients
* Same images
* Same icons
* Same hover states
* Same transitions
* Same animations
* Same scroll effects
* Same responsive behavior
* Same mobile/tablet/desktop appearance
* Same content
* Same visual hierarchy
* Same interactions

**HTML is the source of truth.**

Do not make creative UI decisions when the HTML already defines the behavior or appearance.

---

# 2. Technology Requirements

Use the latest stable versions available at implementation time.

### Required stack

* Next.js — latest stable version
* React — latest stable version compatible with Next.js
* TypeScript where appropriate
* Tailwind CSS — latest stable version
* Framer Motion / Motion for React — latest stable version if animation requires it
* ESLint — latest compatible version
* Node.js — current supported LTS version

Do not intentionally use outdated packages, deprecated APIs, legacy configuration, or unnecessary dependencies.

Before implementation, verify package compatibility so the project installs and builds without dependency conflicts.

---

# 3. Non-Negotiable Fidelity Rule

The original HTML/CSS/JavaScript must be treated as the **visual specification**.

Do NOT:

* Redesign the UI
* Change colors
* Change typography
* Change spacing
* Change section order
* Change content
* Replace images unnecessarily
* Remove animations
* Simplify complex sections merely for convenience
* Introduce a different design system
* Make the UI look "AI generated"
* Add unnecessary gradients
* Add unnecessary glassmorphism
* Add unnecessary rounded cards
* Add arbitrary shadows
* Change desktop proportions
* Change mobile behavior unless the original implementation requires it

If something looks unusual in the original HTML, **preserve it**.

---

# 4. Source Analysis Before Coding

Before writing the Next.js implementation, inspect the complete HTML project.

Analyze:

### Structure

Identify:

* Header
* Navigation
* Hero
* Announcement bars
* Sections
* Cards
* Grids
* Galleries
* Testimonials
* Pricing sections
* CTA sections
* Footer
* Modals
* Forms
* Sidebars
* Mobile navigation
* Other interactive areas

### Styling

Extract:

* Font families
* Font sizes
* Font weights
* Line heights
* Letter spacing
* Colors
* Backgrounds
* Borders
* Border radius
* Shadows
* Gradients
* Widths
* Heights
* Max widths
* Padding
* Margins
* Gaps
* Breakpoints
* Positioning
* Z-index behavior

### Behavior

Identify:

* Hover effects
* Click interactions
* Menus
* Accordions
* Sliders
* Carousels
* Tabs
* Modals
* Scroll behavior
* Sticky elements
* Intersection-based animations
* Loading behavior
* Mobile navigation
* Form behavior

### Assets

Locate every existing:

* Image
* SVG
* Icon
* Logo
* Video
* Font
* Background image
* Local media asset

---

# 5. Asset Preservation

Existing project assets must be reused.

If an image already exists locally, **do not download or replace it with another visually similar image**.

Use:

```text
/public
```

for static assets that are intended to be publicly accessible.

Example:

```text
public/
├── images/
├── icons/
├── logos/
├── fonts/
└── videos/
```

If the original project already contains an appropriate asset structure, preserve it where practical.

For images, use the actual source image rather than generating replacements.

Verify:

* Correct image
* Correct aspect ratio
* Correct crop
* Correct object positioning
* Correct resolution
* Correct rendering size

Do not accidentally distort images.

---

# 6. Next.js Project Architecture

Use a clean reusable architecture.

Recommended structure:

```text
project/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── cards/
│   ├── ui/
│   └── animations/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   ├── fonts/
│   └── videos/
│
├── lib/
├── hooks/
├── types/
├── utils/
│
├── package.json
├── tsconfig.json
├── eslint.config.*
├── next.config.*
├── postcss.config.*
├── .gitignore
└── README.md
```

Adjust the structure according to the actual HTML project.

Do not create hundreds of unnecessary components.

---

# 7. Section-by-Section Conversion

Convert the project **section by section**.

For example:

```text
Header
↓
Announcement
↓
Hero
↓
Feature Section
↓
Product Section
↓
Gallery
↓
Testimonials
↓
CTA
↓
Footer
```

Each significant reusable section should become a component.

Example:

```tsx
<Header />
<Hero />
<Features />
<ProductGrid />
<Testimonials />
<CTA />
<Footer />
```

Do not place the entire website inside one huge `page.tsx`.

---

# 8. Reusable Components

Create reusable components where the HTML contains repeated structures.

Examples:

```text
Button
Card
SectionHeading
Container
ImageBlock
Icon
NavigationItem
ProductCard
TestimonialCard
FeatureCard
CTA
```

Repeated data should preferably be represented as data structures rather than duplicated JSX.

Example:

```tsx
const features = [
  {
    title: "...",
    description: "...",
    image: "...",
  },
];
```

Then render through reusable components.

However, **do not over-componentize** simple one-off markup merely to satisfy an architectural rule.

The final code should remain readable and lightweight.

---

# 9. Tailwind CSS

Use Tailwind CSS for styling.

Translate existing CSS into Tailwind utilities wherever practical.

Example:

```tsx
<section className="mx-auto max-w-7xl px-6 py-20">
```

Maintain exact values where visual accuracy requires them.

Do not arbitrarily substitute:

```text
17px → 16px
31px → 32px
```

or similar approximations if the original design depends on the exact value.

For unique values, use Tailwind arbitrary values where appropriate:

```tsx
className="text-[17px]"
```

```tsx
className="tracking-[-0.02em]"
```

```tsx
className="max-w-[1180px]"
```

---

# 10. Global CSS

Use `globals.css` only for genuinely global requirements such as:

* Font-face declarations
* CSS variables
* Global reset
* Body configuration
* Custom scrollbar
* Required keyframes
* Browser-specific behavior
* Complex CSS that is impractical in Tailwind

Do not dump the entire original stylesheet into `globals.css` unnecessarily.

Prefer component-level Tailwind classes.

---

# 11. Typography Accuracy

Typography must visually match the original HTML.

Preserve:

* Font family
* Font source
* Font size
* Font weight
* Line height
* Letter spacing
* Text transform
* Text rendering
* Paragraph width
* Heading width

If local fonts are available, use them.

Use the appropriate Next.js font loading mechanism when possible.

Do not replace the original font with a generic font simply because it is easier.

---

# 12. Image Handling

Use Next.js image optimization when compatible with the original visual result.

Example:

```tsx
<Image
  src="/images/example.webp"
  alt=""
  width={1200}
  height={800}
/>
```

Preserve:

```text
object-fit
object-position
aspect ratio
crop
position
```

If optimization changes the visual result or the original implementation requires normal static image behavior, use a normal image element appropriately.

Do not sacrifice visual fidelity for optimization.

---

# 13. Animation Conversion

Every animation present in the HTML project must be identified and reproduced.

Animation types may include:

* Fade
* Fade-up
* Fade-down
* Slide
* Scale
* Blur
* Parallax
* Stagger
* Hover animation
* Scroll reveal
* Image movement
* Text animation
* Menu animation
* Modal animation
* Carousel animation
* Continuous animation

Use **Motion / Framer Motion** where it provides the cleanest implementation.

Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

Do not blindly add animations to static elements.

The animation should reproduce the original behavior.

---

# 14. Animation Accuracy

Match:

* Duration
* Delay
* Easing
* Direction
* Distance
* Scale
* Opacity
* Stagger
* Trigger
* Repeat behavior

For example, if the original animation starts after entering the viewport, do not convert it into an animation that starts immediately on page load.

If the original animation repeats continuously, preserve the repeating behavior.

If an element animates only once, preserve that behavior.

---

# 15. Performance-Aware Animation

Avoid unnecessarily expensive animation.

Prefer GPU-friendly properties:

```text
transform
opacity
```

Avoid continuously animating:

```text
width
height
top
left
margin
padding
```

when equivalent transform-based animation is possible.

Use animation libraries only where useful.

Do not install multiple animation libraries when one library is sufficient.

---

# 16. Responsive Design

The final Next.js website must work across:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

The responsive implementation must reproduce the HTML's actual behavior.

Check at minimum:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px
```

Do not simply make the desktop UI shrink.

Verify:

* Navigation
* Typography
* Images
* Grid columns
* Section spacing
* Buttons
* Cards
* Container widths
* Hero layout
* Mobile menus
* Overflow
* Alignment
* Content wrapping

---

# 17. Mobile Fidelity

Mobile should receive special attention.

Check:

* Hamburger/menu behavior
* Header height
* Logo size
* Navigation visibility
* Horizontal overflow
* Text wrapping
* Image cropping
* Card stacking
* Button width
* Section padding
* Footer layout

Never allow accidental:

```text
horizontal scrollbar
content clipping
overflow
broken images
overlapping text
```

unless the original HTML intentionally behaves that way.

---

# 18. Functional Parity

All interactive functionality from the HTML must continue to work.

Examples:

* Navigation
* Dropdowns
* Mobile menu
* Buttons
* Links
* Forms
* Tabs
* Accordions
* Sliders
* Modals
* Search
* Filters
* Carousels

Do not replace functional interactions with static placeholders.

---

# 19. Client Components

Use `"use client"` only when required.

Examples:

* Motion interaction
* Browser APIs
* State
* Event handlers
* Interactive menus
* Sliders
* Client-side effects

Keep static sections as Server Components whenever possible.

Do not make the entire application a Client Component unnecessarily.

---

# 20. Code Weight Reduction

Optimize the implementation without changing the visual output.

Remove:

* Duplicate JSX
* Duplicate CSS
* Unused imports
* Unused dependencies
* Dead components
* Unused assets
* Redundant wrappers
* Repeated logic
* Unnecessary JavaScript

Prefer:

```text
server rendering
static rendering
reusable components
data-driven rendering
CSS/Tailwind
CSS transforms
optimized assets
```

Avoid adding a package when native Next.js, React, CSS, or Tailwind can solve the problem.

---

# 21. SEO and Metadata

Maintain appropriate metadata.

Implement:

* Page title
* Description
* Viewport behavior
* Open Graph metadata where appropriate
* Favicon
* Semantic HTML

Do not change visible content merely for SEO.

Use semantic elements where they do not alter layout:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

---

# 22. Accessibility

Preserve the original UI while improving accessibility where it does not change appearance.

Ensure:

* Images have appropriate `alt`
* Buttons are actual buttons
* Links are actual links
* Keyboard interaction works
* Focus states exist
* Navigation is accessible
* Form controls have labels
* Interactive elements are identifiable

Do not add visually intrusive accessibility UI.

---

# 23. Production Configuration

Configure Next.js for production.

The project must support:

```bash
npm install
npm run dev
npm run build
npm run start
```

If static export is required, configure:

```text
output: 'export'
```

The production build must generate:

```text
out/
```

as a separate static output directory.

Do not manually create fake build files.

The `out` directory must be generated by the actual Next.js build process.

---

# 24. Git Configuration

Create a correct `.gitignore`.

It should ignore generated/runtime files such as:

```text
node_modules/
.next/
out/
dist/
coverage/
*.log
.env
.env.local
.DS_Store
```

Do not ignore source code, assets, configuration, or required project files.

---

# 25. Package Management

Keep dependencies minimal.

Before finalizing:

* Remove unused dependencies
* Remove duplicate libraries
* Verify peer dependencies
* Verify package compatibility
* Use the latest stable versions
* Avoid deprecated packages

The final `package.json` should contain only packages actually required by the project.

---

# 26. Error-Free Requirement

The final application must have:

```text
0 TypeScript errors
0 ESLint errors
0 build errors
0 runtime errors
0 hydration errors
0 broken imports
0 broken images
0 missing modules
```

Browser console must be clean during normal usage.

Do not hide errors using:

```text
console.clear()
```

or similar techniques.

Fix the actual source of every warning/error.

---

# 27. Validation Process

After implementation, run:

```bash
npm install
```

Then:

```bash
npm run lint
```

Then:

```bash
npm run build
```

Then run the production application:

```bash
npm run start
```

Check the browser console.

Verify:

```text
No red errors
No hydration warnings
No missing assets
No failed requests
No broken interactions
```

---

# 28. Visual Comparison

The project must be visually compared against the original HTML.

Do not consider the conversion complete merely because:

```bash
npm run build
```

passes.

Perform visual inspection section by section.

Compare:

```text
Original HTML
        VS
Next.js implementation
```

Check:

* Header
* Hero
* Every section
* Images
* Text
* Buttons
* Cards
* Spacing
* Typography
* Alignment
* Animation
* Hover state
* Mobile layout
* Tablet layout
* Desktop layout
* Footer

---

# 29. Screenshot-Based Validation

Use browser-based visual validation where available.

Take screenshots at multiple viewport sizes.

Compare:

```text
Original screenshot
Next.js screenshot
```

Identify mismatches such as:

```text
+ spacing mismatch
+ font mismatch
+ incorrect image crop
+ incorrect section height
+ wrong alignment
+ wrong breakpoint
+ missing animation
+ incorrect button dimensions
+ incorrect mobile stacking
```

Fix mismatches iteratively.

Do not stop after the first implementation.

---

# 30. Section Completion Rule

A section is considered complete only when all of these are correct:

```text
[ ] Structure
[ ] Content
[ ] Typography
[ ] Colors
[ ] Spacing
[ ] Dimensions
[ ] Images
[ ] Responsive behavior
[ ] Hover behavior
[ ] Animation
[ ] Interaction
[ ] Accessibility
[ ] Console
```

Then move to the next section.

Do not implement the entire page approximately and attempt to fix everything at the end.

---

# 31. Do Not Change Existing Design

This project is an **exact conversion**, not a redesign.

Therefore, never introduce personal design preferences.

Avoid statements such as:

> "This looks better with rounded corners."

> "This would look more modern with gradients."

> "I changed the color for better contrast."

> "I simplified this section."

> "I replaced the image with a better one."

Unless explicitly requested, these changes are forbidden.

---

# 32. Responsive Breakpoint Strategy

First identify the breakpoints used by the original HTML.

If the original project does not explicitly define breakpoints, infer them from its actual responsive behavior rather than applying an arbitrary Tailwind breakpoint system.

Use Tailwind responsive utilities where appropriate:

```text
sm:
md:
lg:
xl:
2xl:
```

But do not force every component to use all breakpoints.

Use only the breakpoints required by the actual design.

---

# 33. Component Naming

Use clear names.

Example:

```text
Header
MobileMenu
HeroSection
FeatureSection
FeatureCard
ProductSection
ProductCard
TestimonialSection
TestimonialCard
CtaSection
Footer
```

Avoid meaningless names such as:

```text
Box1
Section2
ComponentX
DivWrapper
```

---

# 34. Data and Content

Do not alter the original content.

Preserve:

* Headings
* Paragraphs
* Labels
* Buttons
* Navigation text
* Product names
* Descriptions
* Testimonials
* Footer content

Do not rewrite copy unless explicitly instructed.

---

# 35. Links

Preserve the original links.

Verify:

* Internal links
* External links
* Anchor links
* Navigation links
* Button links

Do not replace real links with:

```text
#
```

unless the original project itself uses it.

---

# 36. Forms

If the HTML contains forms, preserve:

* Input types
* Placeholder
* Labels
* Button
* Validation behavior
* Layout
* Error states
* Success states

Do not introduce a backend unless required by the original project.

---

# 37. Icons

Use the original icon assets whenever available.

Do not replace an original icon with an arbitrary icon library icon if that changes its visual appearance.

If an icon library is already required, use the appropriate icon consistently.

Avoid importing an entire icon package unnecessarily.

---

# 38. CSS Precision

When translating CSS, preserve important exact values.

Examples:

```css
padding: 73px 0;
```

should not automatically become:

```text
py-16
```

if that creates a visual difference.

Use:

```tsx
py-[73px]
```

when necessary.

The priority order is:

```text
Visual fidelity
↓
Maintainability
↓
Code brevity
```

Do not optimize code at the expense of exact appearance.

---

# 39. Performance Requirements

Optimize without changing the UI.

Use:

* Server Components where possible
* Static rendering where possible
* Optimized images
* Lazy loading where appropriate
* Minimal client JavaScript
* Minimal dependencies
* Efficient animations
* Proper component boundaries

Avoid:

* Unnecessary global state
* Huge client bundles
* Repeated expensive calculations
* Unnecessary effects
* Unnecessary animation libraries
* Large duplicate assets

---

# 40. Hydration Safety

Ensure server/client output matches.

Avoid unstable rendering caused by:

```text
Date.now()
Math.random()
window
document
navigator
```

during server rendering.

If browser-only APIs are necessary, isolate them inside Client Components and appropriate effects.

There must be no hydration mismatch.

---

# 41. Final Quality Gate

The project is complete only when all conditions below are satisfied.

### Code

* [ ] Clean architecture
* [ ] Reusable components
* [ ] No unnecessary duplication
* [ ] Minimal dependencies
* [ ] Production-ready code

### UI

* [ ] Exact design match
* [ ] Exact typography
* [ ] Exact colors
* [ ] Exact spacing
* [ ] Exact dimensions
* [ ] Exact imagery
* [ ] Exact responsive behavior

### Animation

* [ ] All original animations identified
* [ ] All required animations reproduced
* [ ] Correct timing
* [ ] Correct easing
* [ ] Correct trigger
* [ ] Correct hover effects

### Responsive

* [ ] 320px
* [ ] 375px
* [ ] 390px
* [ ] 414px
* [ ] 768px
* [ ] 1024px
* [ ] 1280px
* [ ] 1440px
* [ ] 1920px

### Validation

* [ ] `npm install` succeeds
* [ ] `npm run lint` succeeds
* [ ] `npm run build` succeeds
* [ ] `npm run start` succeeds
* [ ] `out/` generated correctly
* [ ] Browser console clean
* [ ] No hydration errors
* [ ] No broken assets
* [ ] No broken links
* [ ] No runtime errors

---

# 42. Final Deliverable

The final project must contain:

```text
Next.js Project
├── app/
├── components/
├── public/
├── lib/
├── hooks/
├── types/
├── utils/
├── package.json
├── tsconfig.json
├── eslint configuration
├── next.config.*
├── postcss configuration
├── globals.css
├── .gitignore
└── README.md
```

After:

```bash
npm run build
```

the project must produce:

```text
out/
```

as the production static output.

---

# 43. Final Instruction

**Do not consider the task complete just because the HTML has been technically converted to JSX.**

The actual definition of completion is:

> **The Next.js website must look, behave, animate, and respond like the original HTML website while using a clean, reusable, lightweight, modern Next.js architecture.**

Work **section by section**, validate each section visually, fix every mismatch, then continue.

Use the original HTML as the single source of truth.

The final result must be:

**pixel-accurate + responsive + animated + reusable + lightweight + production-ready + build-safe + console-clean.**
