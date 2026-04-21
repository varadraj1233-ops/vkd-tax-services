# Design Brief

## Direction

Corporate Trust — light theme with deep navy primary and warm gold accents for Indian tax services credibility. Professional, regulatory, financially responsible aesthetic.

## Tone

Authoritative minimalism with governed precision. Structured, serious, corporate confidence. Trustworthy and detail-oriented professional services.

## Differentiation

Layered card surfaces with navy-to-white hierarchy and gold accents on CTAs, form highlights, and service badges. Gold borders on secondary elements signal professional approval and financial responsibility. Regulatory authority via navy primary.

## Color Palette

| Token      | OKLCH       | Role                                   |
| ---------- | ----------- | -------------------------------------- |
| background | 0.98 0.008 230 | Off-white with cool undertone         |
| foreground | 0.18 0.015 230 | Deep navy-gray text, regulatory tone  |
| card       | 1.0 0.004 230 | Pure white elevated surfaces          |
| primary    | 0.35 0.12 250 | Deep midnight navy for authority      |
| secondary  | 0.95 0.01 230 | Subtle background for inactive states |
| muted      | 0.92 0.008 230 | Soft backgrounds for secondary content |
| accent     | 0.65 0.16 60 | Warm gold/amber for CTAs & approval   |

## Typography

- Display: Space Grotesk — hero headlines, professional authority, corporate fintech aesthetic
- Body: General Sans — body text, UI labels, service descriptions, high legibility for regulatory clarity
- Mono: JetBrains Mono — technical details, tax codes, API references
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl font-bold`, labels `text-sm font-semibold tracking-widest uppercase`, body `text-base`

## Elevation & Depth

Minimal shadows (soft) create gentle separation between zones. Navy borders and gold accents define hierarchy more than shadows. Layered card hierarchy: header with `bg-primary text-primary-foreground border-b`, content sections with `bg-background`, footer with `bg-muted/40 border-t border-border`. Gold accents on service badges and secondary CTAs.

## Structural Zones

| Zone    | Background      | Border         | Notes                                        |
| ------- | --------------- | -------------- | -------------------------------------------- |
| Header  | bg-primary      | —              | Sticky, navy background, white text, authority |
| Hero    | bg-background   | —              | Full-bleed, alternating sections with Navy accent banner |
| Content | bg-background   | —              | Alternating sections: services (gold badges), info, CTA    |
| Cards   | bg-card         | border-accent  | 12px rounded, `shadow-subtle`, gold borders on hover |
| Footer  | bg-muted/40     | border-t       | Gray background with company details, navy accents |

## Spacing & Rhythm

Generous breathing room between sections (6rem gaps) with tight micro-spacing inside cards (1rem padding). Balanced density. Service cards laid out in 3-column grid with 2rem gaps.

## Component Patterns

- **Buttons**: Primary (navy bg, white text, rounded-md), Secondary (border-gold, text-gold, hollow), Primary CTAs use gold accent for approval, rounded corners 6-8px, `transition-smooth` on hover
- **Cards**: rounded-lg (12px), bg-card, shadow-subtle, border-accent on hover (gold), 24px padding
- **Labels**: uppercase, text-xs, font-semibold, letter-spacing, text-muted-foreground, navy accents on service types
- **Badges**: Service badges use gold-accent background (`bg-accent/10`), text-accent foreground, 4px rounded, smaller padding
- **Form inputs**: border-border, focus:border-primary (navy), focus:ring-accent (gold)

## Motion

- Entrance: Fade + subtle upward slide on page load (200ms)
- Hover: All interactive elements use `transition-smooth` with color/shadow shifts
- Decorative: None — focus on functional clarity

## Constraints

- No gradients; flat navy and gold palette with strategic depth through layering
- Accent (gold) reserved for CTAs, form highlights, service badges, active states
- No animations beyond transitions; clarity over motion, regulatory compliance-appropriate
- Navy text on white/light backgrounds; white/light text on navy; never colored text

## Signature Detail

Gold accent borders on service cards that appear on hover, combined with elevated shadow lift and badge highlights. This layered reveal establishes professional approval and financial trustworthiness. Navy primary authority + gold secondary approval creates regulatory confidence.
