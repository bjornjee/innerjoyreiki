# innerjoy reiki — UX & Visual Design Audit

**Audited:** 2026-05-02 · **Branch:** `feat/ux-audit` · **Method:** Playwright (Chromium) at 1280 / 768 / 390 viewports + computed-style and source inspection.

Screenshots are saved alongside this file in `audit/`.

---

## TL;DR — Overall grade: **B (78/100)**

The brand has a real point of view: warm sage hero with deep navy serif headlines, gold pill CTAs, and generous airy spacing. It feels handcrafted, calm, and on-brief for wellness. The information architecture is solid for a small practice. **It is held back by a single critical accessibility failure** (the gold primary CTA fails WCAG AA contrast), a duplicated/ambiguous nav, content inconsistencies between the FAQ and Services pricing, and a few avoidable layout bugs.

| Dimension | Grade | Headline finding |
|---|---|---|
| Visual design | A− | Cohesive palette, strong type pairing, restrained iconography. |
| Layout | B | Mostly clean; tablet row of 5 cards is awkward, services hero crops on mobile, contact form looks empty next to InfoCards. |
| Content | C+ | Well-written, but FAQ pricing contradicts Services and references a non-existent page. Hero subhead is too thin. |
| CSS / tokens | B+ | Good design-token system in `globals.css`; a few utilities look odd against Tailwind v4 conventions. |
| Color scheme | B− | Harmonious but the **primary CTA (gold)** and **primary green link** both fail WCAG AA. This is fixable without touching the brand. |
| Accessibility | C | Structure is good (semantics, labels, alt text), but contrast and the dev-build "N" overlay (separate concern) hide other smaller issues. |
| Performance | not measured | (Out of scope for this pass — no Lighthouse run yet.) |

---

## 1. Critical issues (fix before next launch)

### 1.1 Primary CTA fails WCAG AA contrast — `c4a46c` + white = 2.37 : 1
The most-clicked element on the site is unreadable to a meaningful slice of users.

- **Where:** `src/components/button.tsx:13` — `bg-accent text-white` resolves to `#c4a46c` background + `#ffffff` text.
- **Measured:** 2.37 : 1 normal state, **1.92 : 1 on hover** (`accent-light` `#d4b87c`). WCAG AA requires 4.5 : 1 for normal text, 3 : 1 for large text.
- **Pages affected:** every page (Book a Session, Book Now, Send Message, Reserve Your Spot, Register Interest…).
- **Recommended fix — invert the button (preserves the brand gold):** keep `bg-accent` `#c4a46c` and change the label from white to `--foreground` `#2c2c2c`. Measured **5.90 : 1**, comfortably AA. No token change needed; the gold stays exactly as designed, and gold-on-dark reads as a confident, magazine-style CTA. Edit `src/components/button.tsx:13` from `bg-accent text-white` to `bg-accent text-foreground` and from `hover:bg-accent-light` to `hover:bg-accent-light` (still readable on the lighter gold — 4.83 : 1).
- **Alternate fix — darken the gold token:** if you'd rather keep white labels, `#8e6d2c` is the lightest gold that passes (4.80 : 1 on white, 4.49 : 1 on background). Update `--color-accent` and a matching `--color-accent-light` like `#a07f3d` (3.75 : 1 — only passes AA-Large) in `src/app/globals.css:29-30`.

### 1.2 Primary green color fails AA on every link — `97a491` on white = 2.61 : 1
- **Where:** `--color-primary` `#97a491` is used as the active nav state, "View Details" service-card links, FAQ "primary" hover text, "send another message" link, the active mobile-menu link, Reiki-page emphasis, etc.
- **Measured:** 2.61 : 1 on white, 2.45 : 1 on `--background`. Fails AA *and* AA-Large.
- **Fix:** the file already defines `--color-primary-light: #3d5a3e` (deep forest), which gives **7.69 : 1** on white and 7.20 : 1 on background. Promote that to be the *interactive* primary, and demote the existing sage `#97a491` to a non-text role (icon backgrounds, dividers, decorative marks). Change once in `globals.css` and the entire site upgrades.

### 1.3 Content inconsistency: FAQ pricing contradicts Services
- **Where:** `src/app/faq/page.tsx:60-62`.
- **Says:** "Private sessions range from SGD $75 to $130. Group classes start at SGD $45. Visit our Classes & Sessions page for full details. A reduced-rate First-Time Discovery session is available."
- **Truth (per `src/app/services/page.tsx`):** sessions are $75 / $150, workshops are $460 / $560, no "Classes & Sessions" page exists, no "First-Time Discovery" session is offered.
- **Why it matters:** a prospect cross-references pricing before booking. The contradiction reads as careless and erodes trust.
- **Fix:** rewrite that FAQ entry to match Services, or simply replace the body with: "Pricing varies by session and workshop. See [Services](/services) for the full list." Drop the dead reference.

### 1.4 Contact form is non-functional
- **Where:** `src/components/contact-form.tsx:6`.
- **Issue:** `FORMSPREE_URL = "https://formspree.io/f/your-form-id"` — this is the placeholder value. The form will silently fail.
- **Fix:** wire to a real Formspree form ID and pull it from `process.env.NEXT_PUBLIC_FORMSPREE_ID` so it isn't hard-coded. (You may already know about this; calling it out because it gates conversion.)

---

## 2. High-impact (do this sprint)

### 2.1 Nav has a redundancy that confuses first-time visitors
**Six top-level items: About / Reiki / Services / Events / FAQ / Contact.**
"About" (founder story) and "Reiki" ("What is Reiki" educational) read as two answers to the same first-time question. New visitors don't know which to click first.

- **Recommendation:** collapse into one of:
  - Rename **Reiki → "What is Reiki"** (matches the page H1 and the site label) and **About → "About Yin Ling"**. Tiny relabel, big clarity gain.
  - Or merge: drop the Reiki page top-nav slot; surface it as a section *inside* About, and keep the Reiki page reachable from a content link or homepage card. Reduces nav to 5 — tighter.
- **Files:** `src/lib/constants.ts:5-12`, `src/app/reiki/page.tsx`.

### 2.2 Hero subhead is too quiet for the space it occupies
The hero is the most expensive real estate on the site. It currently says:
> Reconnect with your inner wisdom.
> Step fully into your true potential and experience joy within.

Both lines are abstract — interchangeable with any other reiki/yoga/meditation site. A first-time visitor wants two things in 3 seconds: **what you do** and **why they should book**.

- **Recommendation:** keep the poetic H1, harden the sub-line:
  > "1-hour Usui Reiki healing sessions in Singapore — in-person and distant. Workshops for those ready to learn it for themselves."
- This also helps SEO (currently the page only ranks for "innerjoy reiki").
- **File:** `src/app/page.tsx:23-25`.

### 2.3 Body text contrast on `--surface` (`#7a746e` on `#f5f1ea`) is 4.10 : 1 — fails AA
Used in OfferingCard descriptions, service-card descriptions, Reiki-page paragraphs, FAQ open content, services workshop list, and many subtitle/help-text spots.

- **Fix:** push `--color-text-muted` from `#7a746e` to `#5d574f` (darker walnut) → **6.34 : 1** on surface (verified), 6.68 : 1 on background, 7.14 : 1 on white. Still soft enough not to fight the headline color. Single token change in `src/app/globals.css:39`.

### 2.4 Tablet (768) layout drops a whole grid row to 3+2 awkwardness
At 768 the "Why Reiki" 5-card grid lands as 3 across + 2 across with a gap on the right. See `audit/tablet-home-768.png`.

- **Fix:** at `md:` breakpoint use 2 columns (which gives clean 2/2/1 stacking), then 3 at `lg:`. One Tailwind change on `src/app/page.tsx:62`:
  ```diff
  - className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3"
  + className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
  ```

### 2.5 Services-page horizontal carousel has a partially-visible card on desktop
At 1280 the home `SessionsSection` shows ~3 full cards plus a sliced fourth. Either intentional ("there's more, scroll →") or a layout accident. The intent is clear from the chevron buttons, but with only **4** total cards, scroll-to-reveal is overhead — at this width all 4 fit if `min-w` is reduced.

- **Recommendation:** below the breakpoint where all 4 fit, keep horizontal scroll; at `lg` and above, render as a 4-up grid and hide the chevrons. Saves users a click on every desktop visit.
- **File:** `src/components/sessions-section.tsx:49-109`.

### 2.6 Footer feels skeletal for a service business
`src/components/bottom-bar.tsx`. Currently: tagline + 3 links (What to Expect, Contact, Instagram) + 2 legal + © line.

- Add: contact email, response-time line, area served / venue note, optional newsletter capture. The footer is the last conversion checkpoint; it should reassure rather than echo.
- The italic Playfair `innerjoy reiki` mark is nice; pair it with a 1-line "Singapore-based Reiki healing & workshops by Yin Ling, Usui Reiki Master Teacher."

### 2.7 Pets section on Services lacks visual containment
`src/app/services/page.tsx:119-178`. The pets imagery sits flush in the middle of the surface band, then a heading, then text, then two cards. It reads as **two unrelated mini-pages** rather than one offering.

- **Recommendation:** wrap the pets block (image + heading + 2 paragraphs + 2 cards) in its own `bg-white` card with a soft border/radius, or move it into its own section above the workshop section with a subtle break (a hairline + label "Reiki for Pets"). Right now nothing visually announces the topic shift.

---

## 3. Medium-impact (next iteration)

### 3.1 Border radius is being silently capped at the 24-bit max
`src/components/button.tsx:11` uses `rounded-full`, computed at 16,777,216 px. Visually it's fine because of the small height, but on Safari iOS some versions render a fixed cap at extremely high values. Replace with `rounded-[999px]` or `rounded-full` once you've confirmed your Tailwind v4 build emits the safe value (it does — this is a non-issue in practice, just noting).

### 3.2 Section vertical rhythm is too uniform
Every major section is `py-20`. After 4 sections it starts to feel like the homepage *breathes the same way every time*. Vary by signal weight:
- Hero: `py-24` (anchor)
- Why Reiki / What is Reiki: `py-20`
- Services teaser / Sessions: `py-16`
- CTA section: `py-24` (closing emphasis)

### 3.3 Iconography on the home is generic
The 5 SVGs in "Why Reiki" (heart, sun, moon, plus, person) read as a stock-icon collage. A small handcrafted set — one stroke weight, one corner style, the same brand sage — would lift the page meaningfully. Same applies to the SessionsSection icons (plus/paper-plane/book/user).

- **Cheap path:** keep the 24×24 outline format but unify stroke width to 1.25, switch all to `text-primary-light` (the deep forest) on the existing `bg-icon-bg-*` chips. Visual cohesion overnight.

### 3.4 Services-page workshops are presented as plain article cards
`src/app/services/page.tsx:196-242` lists Levels 1, 2, 3 in three near-identical white cards. There's no visual hierarchy among levels and no "what's the difference at a glance" summary. Most prospects want to compare, not read three full prose bodies.

- **Recommendation:** introduce a small "Level / Duration / Outcome / Prereq" header strip at the top of each card, then the prose. Or do all three as a single comparison card with rows. Even just adding **prerequisite badges** ("L1 → L2 → L3") cuts cognitive load.

### 3.5 Two languages, two hidden costs
`GoogleTranslateProvider` is integrated and the homepage screenshots include the `中文` toggle (`audit/desktop-home-1280.png`).

- **Concern 1:** Console showed a `ERR_NETWORK_CHANGED` against `translate.googleapis.com/element/log` during load — likely benign, but worth confirming the Google Translate widget doesn't add ~100 KB of JS for a feature few visitors use.
- **Concern 2:** the site already has `T` (`translate-override`) glossary terms hard-coded for important UI strings. If the goal is a quality bilingual experience for Chinese-reading clients, machine-translating prose paragraphs reads poorly for trust-building copy ("Reconnect with your inner wisdom" autotranslated will feel cheap). Consider:
  - Phase 1: ship a real `/zh/` route with hand-translated H1, hero, and CTAs (the `T` infrastructure is already there).
  - Phase 2: drop the Google Translate dependency entirely.

### 3.6 FAQ page lacks an in-page jump index
11 questions in a single accordion. A first-time prospect will scroll by question, not read top-to-bottom. Add a short two-column index at the top (anchor links to each `<details id>`) — keeps the warm aesthetic and adds navigation.

### 3.7 Contact page right column looks empty
At desktop the right column has 4 InfoCards spread vertically, leaving meaningful white space below. Either:
- Tighten cards (less padding) so the column ends near the form's submit button, *or*
- Add a real photo (the practice space, the treatment table, Yin Ling's hands) above the InfoCards. A face/space humanises a contact page enormously.

### 3.8 No social proof anywhere on the site
For a service that depends on trust (entering someone's home, lying on a table, paying $150/session), there is no testimonial, no quote, no photo of the practice space. There is a `testimonial-card.tsx` component that ships with the codebase but is **never imported**.

- **Recommendation:** add 3 short testimonials to the home (between "Why Reiki" and the Services teaser) using the existing component. If you don't have explicit consent yet, gather it now.

---

## 4. Low-impact polish

- **`src/app/page.tsx:42` blob shape.** `rounded-[40%_60%_50%_50%]` for the hero portrait is on-brand and pretty, but inconsistent — the about page uses a circle, services pets uses a clean square 4:5. Pick one organic shape language.
- **`src/components/feature-card.tsx:9`** uses `hover:-translate-y-1` (4 px). On the home, all 5 cards lift on hover — the page literally jiggles as a cursor passes through. Tone down to `1px` or remove on the home (lift makes more sense on the *clickable* OfferingCards / ServiceCards).
- **Headline tracking.** `-tracking-[0.02em]` is applied to H1s. With Playfair Display at 60 px this is fine; at 30–40 px it pinches the letterforms. Move tracking adjustment to a class scoped to "display" sizes only.
- **`src/components/translate-override.tsx`** is loaded on every page; check it doesn't ship the entire glossary client-side when a page doesn't need it.
- **`src/app/services/page.tsx:307` "Includes a $220 non-refundable deposit"** sits as a `<span class="block">` under the price — at small viewports it can clip at the right edge of the dl row. Switch to a `<p class="mt-1">` outside the `<dd>` for safer wrapping.
- **`primary-button.png`** in repo root (829 B) and the rest of the loose `*.png` files in the project root — these are exploration artifacts and should move to `audit/` or be added to `.gitignore` so they don't bloat future commits.

---

## 5. Color scheme — strengths and a refined palette

**What's working**
- The sage→dust-sage hero (`#c6d8c0 → #b8c8b0`) with deep navy serif (`#1f3a6b`) is genuinely distinctive. Most reiki sites land on washed-out pastel pink or beige; this one feels rooted and confident.
- Cream `--background` (`#faf7f2`) and deeper cream `--surface` (`#f5f1ea`) give a magazine warmth without going beige-monotone.
- The peach + green icon-chip variants (`#f0d9cc`, `#d4ddd4`) introduce variety without breaking the harmony.

**What needs tuning** (all evidence-backed by §1 + §2.3)

| Token | Current | Proposed | Reason |
|---|---|---|---|
| `--color-accent` | `#c4a46c` | **keep, invert label** to `#2c2c2c` (5.90 : 1) | Pass AA without losing the brand gold. |
| `--color-accent-light` | `#d4b87c` | keep (4.83 : 1 with foreground label) | Hover stays AA. |
| `--color-primary` | `#97a491` | demote to icon/decoration only | Currently used for *interactive* color, fails AA. |
| `--color-primary-light` | `#3d5a3e` | promote to "primary text/link" | Already 8.2 : 1 on white. |
| `--color-text-muted` | `#7a746e` | `#5d574f` | Body-on-surface goes from 4.1 to 6.8. |
| `--color-hero-text` | `#1f3a6b` | keep | Already 7.46 on hero. Excellent. |

Result: same brand mood, AA-safe across the board, single-file change.

---

## 6. Suggested fix order (cheapest wins first)

1. **One-line tokens:** swap `--color-accent`, `--color-accent-light`, `--color-primary` (demoted), `--color-text-muted` in `globals.css`. Fixes §1.1, §1.2, §2.3 in a single PR.
2. **Two content edits:** rewrite the FAQ pricing answer (§1.3); fix the Formspree URL (§1.4). 5-minute PR.
3. **Tablet grid + pets-section containment:** §2.4, §2.7. ~30 minutes.
4. **Nav relabel + hero subhead:** §2.1, §2.2. Copy decision, then small PR.
5. **Footer expansion + add testimonials:** §2.6, §3.8. Needs the testimonial copy first.
6. **Carousel-to-grid at lg, accordion index, contact column polish:** §2.5, §3.6, §3.7.
7. **Design polish:** unified iconography, hover-lift restraint, headline tracking. Lower priority.

---

## 7. What I did *not* test

- Lighthouse / Core Web Vitals (no perf measurement run).
- Real-device iOS Safari font rendering (Playwright Chromium only).
- Keyboard-only navigation and focus states (visual snapshots only — focus rings *look* present in the form CSS, but I didn't tab through every page).
- Screen-reader pass (the contrast issues likely matter more first).
- The Chinese `T`-overridden render path — would need a separate run with the `<T>` provider engaged.

These are the obvious next-pass items if you want to extend this audit.

---

*Audit captured against `feat/ux-audit` on 2026-05-02 using Playwright via local `next dev` on port 3737. Twelve full-page screenshots are committed to `audit/` for reference.*
