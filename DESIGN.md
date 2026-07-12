---
version: alpha
name: Ritani Classic Luxe
description: A refined jewelry retail system balancing editorial elegance with restrained ecommerce clarity.
colors:
  primary: "#060E24"
  secondary: "#C4A556"
  tertiary: "#E9E8E4"
  neutral: "#FDFDFD"
  surface: "#FFFFFF"
  on-surface: "#060E24"
  muted: "#E5E7EB"
  text: "#000000"
  accent: "#C4A556"
  error: "#B42318"
typography:
  headline-display:
    fontFamily: "Playfair Display"
    fontSize: "50px"
    fontWeight: 400
    lineHeight: "60px"
    letterSpacing: "0.37px"
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: "44px"
    fontWeight: 400
    lineHeight: "60px"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "33.6px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Lato"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "23.97px"
    letterSpacing: "-0.07px"
  body-md:
    fontFamily: "Lato"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Lato"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Lato"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Lato"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "16px"
    letterSpacing: "0.08em"
  label-sm:
    fontFamily: "Lato"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0px"
  overline:
    fontFamily: "Lato"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "14px"
    letterSpacing: "0.16em"
  caption:
    fontFamily: "Lato"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "18px"
    letterSpacing: "0.04em"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 2px
  sm: 14px
  md: 24px
  lg: 38px
  xl: 60px
  gutter: 28px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "20px 28px"
    height: "57px"
    width: "245px"
  button-primary-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "20px 28px"
    height: "57px"
    width: "245px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "20px 28px"
    height: "57px"
    width: "245px"
  button-secondary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "20px 28px"
    height: "57px"
    width: "245px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "16px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  badge:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.overline}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Ritani Classic Luxe

## Overview
Ritani presents a polished, editorial luxury tone: elegant, trustworthy, and highly product-focused. The experience feels spacious and deliberate, using strong imagery, restrained motion cues, and a refined contrast between deep navy/black and warm gold accents. It is aimed at shoppers who want confidence and transparency while still expecting a premium jewelry brand aesthetic.

## Colors
- **Primary (#060E24):** A deep midnight navy used for primary buttons, navigation contrast, and foundational dark UI moments. It reads as premium and trustworthy rather than stark black.
- **Secondary (#C4A556):** A warm antique gold used as the signature accent for emphasis, section labels, and highlight text. It gives the interface its luxury jewelry character.
- **Tertiary (#E9E8E4):** A soft pearl-gray used to soften dark surfaces and support high-contrast button treatments. It acts like a quiet neutral companion to the navy.
- **Neutral (#FDFDFD):** An off-white gallery background that keeps product content bright and airy without feeling clinical.
- **Surface (#FFFFFF):** Pure white for cards and inset panels when maximum clarity is needed.
- **On-surface (#060E24):** The default readable text color on light backgrounds, chosen for crisp contrast and a classic editorial feel.
- **Muted (#E5E7EB):** A subtle border and divider tone for cards and low-emphasis outlines.
- **Text (#000000):** True black used sparingly for the strongest text and utility marks.
- **Error (#B42318):** Reserved for validation or destructive states; it should remain secondary to the brand’s otherwise calm palette.

## Typography
The brand is built on a classic serif/sans pairing. Playfair Display carries the luxury voice in headlines, while Lato provides a clean, modern counterbalance for navigation, body copy, labels, and controls.

- **Headlines:** `headline-display`, `headline-lg`, and `headline-md` use Playfair Display at light weights, creating an elegant magazine-like tone. These styles should remain editorial and spacious, with generous line heights.
- **Body:** `body-lg`, `body-md`, and `body-sm` use Lato for clear reading performance. Body copy is understated and slightly tight in tracking, matching the premium retail context.
- **Labels and UI text:** `label-md`, `label-sm`, `overline`, and `caption` use Lato, often in uppercase or small-caps-like treatment with letter-spacing for a refined retail interface. The section labels and button text feel compact, deliberate, and highly legible.
- **Hierarchy rule:** Serif is for narrative and persuasion; sans-serif is for structure, actions, and metadata.

## Layout
The layout is centered and fixed-width in feel, with broad side margins and large vertical breathing room between sections. Hero content is split into a text block and a dominant product image, while lower sections shift into simpler centered compositions with more whitespace and smaller content clusters.

Spacing follows a restrained rhythm: `xs` at 2px for fine adjustments, `sm` at 14px for compact UI separation, and `md`/`lg`/`xl` for visible section gaps. Cards and controls should use consistent internal padding, with buttons favoring a substantial 20px vertical rhythm and 28px horizontal framing.

## Elevation & Depth
The system is intentionally flat. Visual hierarchy comes from contrast, typography, and imagery rather than shadows or layered surfaces. When depth appears, it is subtle and functional: faint borders, gentle tonal separation, and photographic lighting cues do the work instead of heavy elevation effects.

## Shapes
The shape language is architectural and restrained. Interactive elements are mostly square-edged, with `rounded.none` for buttons and sharp product-facing controls. Cards may use a mild `8px` radius for friendliness, but the overall impression should remain crisp, premium, and precise rather than soft or playful.

## Components
- **Buttons:** Primary buttons use the deep navy fill with light text, while secondary buttons are transparent with a navy outline. Both should be large, wide, and confident, matching the observed `button-primary` and `button-secondary` tokens. Use `button-link` only for low-emphasis utility actions. Buttons should feel editorial rather than app-like: no pill shapes, no shadows, and no aggressive gradients.
- **Button states:** Hover states should invert or slightly intensify contrast without changing the geometry. Keep borders clean and maintain the same fixed height for consistent alignment.
- **Cards:** Cards are simple white or off-white containers with a light border and modest padding. They should frame content quietly and never compete with the photography.
- **Inputs:** Inputs should be plain, rectangular, and high-clarity, with minimal ornament. Use dark text, light borders, and enough padding to feel luxurious rather than dense.
- **Chips / tabs:** Category toggles and tabs should look like slim, text-first chips with minimal decoration. Active states may be indicated with underline, color shift, or subtle weight changes instead of filled backgrounds.
- **Labels and overlines:** Small uppercase labels are a key brand signature. They should use tracked-out sans-serif text and generous whitespace to create the premium retail rhythm.
- **Navigation:** Navigation items should remain compact, uppercase or small-caps in feel, and visually secondary to the hero imagery.
- **Product imagery:** Photography is a primary component. Images should sit within large, dark, contrast-rich frames and preserve a cinematic presentation.

## Do's and Don'ts
- Do keep layouts spacious and centered, with strong visual breathing room.
- Do use Playfair Display for emotional, high-end headline moments.
- Do use Lato for all navigation, body copy, labels, and button text.
- Do preserve the navy-and-gold contrast as the core brand signature.
- Don't introduce heavy shadows, glassmorphism, or loud gradients.
- Don't round buttons into pills or soften the interface excessively.
- Don't overuse the gold accent; reserve it for emphasis and premium highlights.
- Don't let utility UI overpower the imagery or editorial hierarchy.