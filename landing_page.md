# Pareeksha landing page v2: product-led design prompt

Use with `AGENTS.md` in the project root (Next.js 16, npm, vanilla CSS Modules, zero images). This prompt REPLACES the earlier hero, wall, bento and collage instructions. Build in the three phases at the bottom and stop after each phase.

---

ROLE
You are a senior design engineer. Build the Pareeksha landing page as a PRODUCT-LED page: the visitor should be able to see (and lightly interact with) the product within the first screen, the way a coding-lab platform lets you try a lesson before signing up. Follow AGENTS.md strictly. Keep all existing tokens; add only the tokens listed here. No images, no new dependencies, "/" stays static, no cookies/headers.

DESIGN DIRECTION (inspired by product-led learning platforms; all copy, visuals and branding are original to Pareeksha)
- Show the product, not adjectives: an interactive-feeling playground in the hero, a browsable library of "rounds" like a catalogue of labs, a "how it works" stepper, and a visible free tier.
- Calm, confident dark UI. Quiet backgrounds, crisp small type inside product frames, one accent gradient, generous spacing. Motion is purposeful (state changes inside product frames), never decorative noise.
- Lessons already learned in this project (non-negotiable):
  1. Never reuse a container-scaled (cqw) mock inside a large frame. Large frames use a fixed-pixel design canvas that scales as a whole.
  2. Every tile fills its grid area exactly; no cropped content, no empty halves.
  3. Backgrounds support the text; they never compete with it. No steep 3D planes, no text-only tiles.
  4. Inside product frames, text is 11 to 14px (titles up to 20px). Nothing bigger.

NEW SHARED COMPONENT: ScaledCanvas (Server Component)
- Props: width (design px), height (design px), children.
- Renders a wrapper with aspect-ratio width/height and container-type: inline-size; an inner div of exactly width x height px, transform-origin top left, transform: scale(calc(100cqw / {width}px)) (use a registered @property --w and a unitless ratio fallback if calc division by length is unsupported; fallback is a JS-free CSS variable set per breakpoint).
- All large product frames (hero playground, workflow demo, template previews) are built inside ScaledCanvas with real pixel sizes. Allowed type sizes inside: 11, 12, 13, 14, 18, 20px.

PAGE STRUCTURE (exact order)

1. NAVBAR (unchanged): sticky 64px, bg rgba(0,0,0,0.85), blur(16px), bottom border at 8% white, z-index above everything. Links: Platform, Rounds, Templates (New badge), Pricing, Docs, Changelog. Right: theme toggle, "Start hiring".

2. HERO
- Pill: "Changelog · AI interview rounds are live". H1 "The hiring stack for small teams." Lead: "Assessments, coding rounds, AI interviews and a built-in candidate CRM. Everything a small company needs to hire well, in one place." CTAs "Start free" (52px, border beam, soft glow) and "Book a demo" (glass, play icon). Under CTAs: "Free for your first hiring drive. No credit card." with a check icon. Avatar stack with "Trusted by 500+ hiring teams" (sample).
- Background (calm): top spotlight cone (radial indigo at 20% from the top center), 64px grid lines at 4% white masked to the top/center, grain overlay at 3%, two slow blurred blobs (opacity 0.12, 40s, transform only). NO card wall in the hero.
- 4 floating glass event cards at the far left and right, desktop 1280px and up only: "Aarav cleared the coding round", "AI interview scored 86 / 100", "12 candidates shortlisted", "Invite sent via WhatsApp". Max-width 240px, rgba(12,12,14,0.8), blur(12px), 6 to 9s float loops, z-index above the background and below the text column's interactive elements. They must never overlap the H1, lead or buttons at 1366x768.
- INTERACTIVE PLAYGROUND (under the avatar row, peeking into the first viewport): a ScaledCanvas 1100x640 inside a frame (radius 20px, 1px gradient border, top highlight, shadow 0 40px 120px -20px rgba(99,102,241,0.3), bottom 25% masked into the background). Entry tilt rotateX(8deg) flattening via a view() scroll timeline.
  - Segmented control at the top of the frame: "Candidate view" | "Recruiter view", implemented with two hidden radio inputs and :has() so it works without JS (default Candidate).
  - Candidate view (3 panes, 640px tall): left pane (280px) "Problem": title "Two Sum", difficulty chip, 6 lines of statement, constraints list, 3 example rows. Center pane (480px) code editor: line numbers, 14 lines of syntax-colored code revealed by a typing animation (steps() clip-path per line, 14s loop), blinking caret, tab bar (solution.js, tests). Right pane (340px) "Checks": button "Run checks" that pulses, then 5 test rows flipping from pending to passed in sequence, a "5/5 passed" badge, a timer countdown (CSS @property), and a proctoring chip "Tab focus: OK".
  - Recruiter view (same canvas): header "Engineering hiring drive · 4 active rounds · 142 candidates", 3 stat cards (Applied 142, Passed code 68, AI interviewed 24) each with a sparkline, a 4-column pipeline board (Applied, Screening, Test, Interview, 3 compact cards each) where one card slides to the next column every 4s, and a live toast (bottom-right, 280px) "Aarav K. completed Round 2 · 94%".
  - Animations loop only while data-inview="true"; under reduced motion show the final static state.

3. TRUST STRIP
Eyebrow "Teams hiring with Pareeksha", 10 text wordmark placeholders in 2 marquee rows (sample), plus a stat row: "12+ round types · 40+ question formats · 2 free rounds per drive · 10-minute setup" (sample claims, mark in lib/content.ts).

4. ROUND LIBRARY (catalogue of rounds)
- Eyebrow "Round library", H2 "Every round a small team needs.", lead one line, right-aligned count "48 ready-made rounds" (sample).
- Category tabs (pills): All, MCQ, Coding, SQL, System design, AI interview, HR. CSS-only filtering with hidden radios and :has(); default All; switching fades cards (opacity/transform, 200ms).
- 12 round cards in a 4-column grid (3 tablet, 1 mobile). Each card: 40px icon tile, title, 2-line description, chips (difficulty, duration such as "45 min"), question count, and a "Free" badge on 4 of them. Hover: spotlight, tilt (max 4deg), border brightens, a tiny preview line animates.
- Example rounds (original wording): Aptitude screen, Core CS MCQs, DSA coding round, SQL query challenge, Debugging with an AI helper, Frontend build task, System design discussion, AI behavioral interview, Case study, Group discussion, HR screening, Offer and onboarding.
- Footer link "Browse all rounds →".

5. HOW IT WORKS (stepper)
- H2 "From job post to offer in four steps."
- A sticky left list of 4 steps (Create the workflow, Invite candidates, Assess and interview, Decide with scorecards) and a right ScaledCanvas 640x420 preview that changes per step. Active step is driven by animation-timeline: view() on each step block (fallback: all steps stacked with their previews inline on mobile and without timeline support). Each preview is a distinct mini product screen: workflow builder with cutoffs, invite composer with a WhatsApp/email toggle, live assessment with proctoring chips, scorecard with radar and "Strong hire".

6. WORKFLOW FUNNEL DEMO
- H2 "Set cutoffs once. Let the funnel run."
- A ScaledCanvas 1100x360: five round nodes connected by lines (S1 Online assessment, S2 Coding round, S3 AI debugging round, S4 System design or AI interview, S5 Human interviews), each node showing a cutoff input and candidate count that animates down as the line "fills": 500, 200, 60, 20, 5 (count-up via @property). A sample recruiter prompt chip above S2: "Start with a moderate DP question". Loops while in view.

7. FEATURE BENTO (real grid, tiles fill their areas)
- 12-column grid, gap 16px, auto-rows 150px desktop, named areas:
  "a a a a a a b b b b c c" / "a a a a a a b b b b c c" / "a a a a a a d d d d d d" / "e e e e f f f f g g g g" x3 rows.
  a = AI interviewer session (waveform, transcript, score ring), b = Proctoring monitor (6 tiles with integrity chips), c = Scorecard ring, d = Analytics funnel (bars grow in), e = Question bank (filters, rows, tags), f = Scheduler (week grid with a moving highlight), g = Notifications (toasts stacking in).
- Each tile: header (icon, title, one-line description) and a body that fills the remaining height. Tablet 6 columns, mobile 1 column (aspect-ratio 4/3). Internal loops pause out of view; static final state under reduced motion.
- Tile effects: gradient border, spotlight, tilt, scroll entrance (translate3d 0,32px and scale 0.96 to none, stagger by --i), sibling dimming on hover via :has().

8. TEMPLATES
- H2 "Start from a template." 3 large cards (Campus drive, Software engineer, Sales and support), each two-column: left title, 2-line description, chips (rounds count, average setup time), "Live preview" link; right a ScaledCanvas 520x320 mini workflow preview. Staggered reveal.

9. PRICING (all values sample, comment "SAMPLE: replace with real pricing")
- 3 slim tiers: Free (first hiring drive, 2 rounds, 50 candidates), Team (unlimited rounds, AI interviews, notifications), Scale (custom). Middle tier highlighted with gradient border and a "Most popular" chip. Monthly/annual toggle via hidden checkbox and :has() (prices swap with a fade). Feature checklist per tier. No claim of free trials beyond the sample.

10. TESTIMONIALS (sample, flagged)
- Two opposing marquee rows of 8 cards each (avatar initials, name, handle, 14px quote), pause on hover, edge fade masks; under 640px collapse to a single column of 4 cards.

11. FAQ
- Native <details name="faq">, 9 items (same questions as before), animated chevron, FAQPage JSON-LD. Two-column layout: heading and support link on the left, accordion on the right (stacked on mobile).

12. FINAL CTA
- Large card (max 1100px, radius 24px, gradient border beam via @property --angle, 6s). Background: a DIM calm wall (3 flat columns of real mini mocks drifting vertically, opacity 0.18, blur 1.5px on the wrapper, center clearing overlay). Avatar stack, H2 "Hire your next teammate this week.", lead, CTAs "Start free" and "Book a demo", the "No credit card" line.

13. FOOTER
- Logo, blurb, "Built by" line, social icons, 5 link columns (Product, Rounds, Templates, Company, Popular), bottom row with "© 2026 Pareeksha. All rights reserved." and Privacy, Terms, Refunds. 2-up columns on mobile.

NEW TOKENS TO ADD (tokens.css only)
--grid-line rgba(255,255,255,0.04), --glass rgba(12,12,14,0.8), --glow rgba(99,102,241,0.3), --shadow-frame 0 40px 120px -20px var(--glow), --ring-beam conic-gradient via @property --angle, --dur-loop-slow 40s, --dur-float 7s. Light-theme equivalents for each.

MOTION RULES
Only transform and opacity animate, plus stroke-dashoffset and @property counters. will-change: transform only on elements actively moving. Max ~12 simultaneously animating elements in view (pause the rest with data-inview). Everything stops under prefers-reduced-motion with a meaningful static state. Every modern CSS feature has an @supports fallback.

COPY AND DATA RULES
All text in lib/content.ts. Sample items (logos, testimonials, "500+ hiring teams", pricing, round counts) are marked `// SAMPLE: replace with real data` and listed in README.md. No real company logos, no real people.

BUILD ORDER (stop and wait for review after each phase)
Phase A: tokens additions, ScaledCanvas, Navbar, Hero (including the interactive playground), Trust strip. Run npm run check and confirm "/" is static, then stop.
Phase B: Round library, How it works, Workflow funnel, Feature bento. Check at 375, 768, 1280, 1536, then stop.
Phase C: Templates, Pricing, Testimonials, FAQ, Final CTA, Footer, SEO and JSON-LD, README. Final npm run check.

ACCEPTANCE CHECKS
At 1366x768 the first screen shows the navbar, pill, H1, lead, both CTAs, the free-tier line, avatars and the top of the playground, with crisp 11 to 14px text inside it. No cropped or empty mock areas anywhere. Text contrast is AA in both themes. No horizontal scroll at 375px.