# Arvo Design System

Arvo is a UAE fractional property-investment platform. Investors browse listed Dubai properties,
buy shares in them, hold them in a portfolio, and receive dividends into an **Arvo Wallet** — every
figure denominated in dirhams (AED) and set with the dirham glyph rather than a currency code.

This design system is a full extraction of the attached Figma file **"Design System.fig"**
(cover: *Design System*, collaborator *Viktoria D*). It contains the token system, the type system,
the icon and flag sets, the reusable component library, two product UI kits, and the brand rules
below.

## Sources

- **Figma file:** `Design System.fig`, attached to this project and mounted read-only. 45 pages,
  14,573 nodes, 109 component sets + 484 standalone symbols, 413 Figma Variables across 5
  collections. No public Figma URL was supplied — if you have access, the node ids referenced in
  component comments (e.g. `18:2751` for the master button) resolve inside that file.
- **No codebase, repository or slide deck was provided.** There is therefore no slides directory,
  and nothing here is derived from production code.

## Products represented

| Surface | Evidence in the file |
| --- | --- |
| **Web app (desktop)** | `Topbar [Navigation]` at 1440×68, `Page Header [1.1]` desktop variant with 80px gutters, desktop banners, the table system. |
| **Mobile app** | `mobile-bottom-nav` at 375×72 (Properties · Portfolio · Wallet · Account), mobile status bar, drawers, the notification feed, mobile page headers. |

There is no marketing site, docs site or slide template in the file, so none is recreated here.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The entry point consumers link. `@import`s only. |
| `tokens/fig-tokens.css` | All 413 Figma Variables, plus every theme mode (`data-mode="slate"`, `data-theme="dark"`, `data-mode="orange"/"purple"/"green"`). |
| `tokens/fig-typography.css` | Generated typography file (the .fig defines **0** named text styles — see Typography). |
| `tokens/fonts.css` | The four families + `@import` of the Google Fonts they come from. |
| `tokens/brand.css` | Brand and semantic aliases (`--arvo-orange`, `--sand-*`, `--surface-*`, `--text-*`) and the `a` / `a:hover` rules. |
| `tokens/typography.css` | The transcribed type scale + a small set of utility classes. |
| `tokens/elevation.css` | Shadows, radii, spacing lengths, motion. |
| `guidelines/*.html` | 19 foundation specimen cards (Colors, Type, Spacing, Brand). |
| `components/<group>/` | The component library — see below. |
| `assets/brand/` | Arvo mark, wordmark, dirham glyph, page-background tile. |
| `assets/labels/` | The strategy-ribbon and strategy-glyph vectors. |
| `assets/images/` | The photography and avatars shipped in the file. |
| `assets/icons/` | 163-glyph icon set (`icon-data.js` + `Icon.jsx`). |
| `assets/flags/` | 262-flag set (`icon-data.js` + `Flag.jsx`). |
| `ui_kits/web-app/` | Desktop click-through recreation. |
| `ui_kits/mobile-app/` | Mobile click-through recreation. |
| `SKILL.md` | Agent-Skills wrapper so this folder works in Claude Code. |

### Components

`components/core/` — **Button**, **DirhamGlyph**, **IconButton**, **LinkButton**, **TextLink**
`components/forms/` — **Checkbox**, **Radio**, **Switch**, **CheckboxLabel**, **RadioLabel**, **SwitchLabel**
`components/data/` — **Badge**, **StatusBadge**, **Indicator**, **Tag**, **TagCategory**, **TagIconCategory**
`components/feedback/` — **Alert**, **Toast**, **Loader**, **Tooltip**, **Notification**, **NotificationsHeader**, **NotificationsFooter**, **NotificationsTabMenu**
`components/overlays/` — **Modal**, **ModalOverlay**, **ModalHeader**, **ModalContent**, **ModalFooter**, **StatusModal**, **Drawer**, **DrawerOverlay**, **DrawerHeader**, **DrawerFooter**, **StatusDrawer**
`components/layout/` — **ContentDivider**, **Scroll**, **SortingIcons**, **PageHeader**, **Banner**, **PropertyToast**, **DesktopBackElement**, **SeparatorDocumentation**, **AddContent**
`components/navigation/` — **TabMenu**, **TabMenuHorizontalItems**, **TabMenuVerticalItems**, **PrimaryTabs**, **SegmentedControl**, **ButtonGroup**, **ButtonGroupItems**, **MenuItem**, **MobileBackElement**
`components/table/` — **TableHeaderCell**, **TableRowCell**
`components/media/` — **Avatar**, **AvatarGroup**, **TopStatus**, **BottomStatus**, **FileFormatIcons**, **Steps**, **Apex**, **BrandLogoSlot**
`components/product/` — **Topbar**, **TopbarItem**, **TopbarIconButton**, **NavbarTab**, **MobileBottomNav**, **FooterIconButton**, **Logo**, **Amount**, **Balance**, **BalanceDropdown**, **ButtonPrimary**, **IconIteractive**, **Frame**, **RewardsBanner**
`components/device/` — **StatusBar**, **Time**, **NetworkSignal**, **WiFiSignal**, **Battery**, **Notch**
`components/docs/` — **LibraryTypes**, **StatusIndicator**, **BackgroundPattern**
`assets/icons/` — **Icon** · `assets/flags/` — **Flag**
`components/kit-names/` — **KitNames** plus its aliases: **ButtonMaster**, **ButtonSize**, **IconButtonSize**, **ButtonGroupItems**, **ButtonPrimaryChrome**, **SortingIcons**, **FileFormatIcons**, **LoaderAnim**, **StatusModals**, **NotificationsItems**, **NotificationsTabMenuItems**, **TabMenuHorizontal**, **TabMenuHorizontalItems**, **TabMenuVerticalItems**, **TopbarItems**, **IconIteractive**, **LibraryTypes**, **CountryFlag**, **UaeDirham**, **BannerForUpcomingFeature**, **BannerEarnPoints**, **NavbarProperties**, **NavbarPortfolio**, **NavbarWallet**, **NavbarAccount**, **NavbarIcons**, **NotifsButton**, **CartButton**, **MNotifButton**, **MCartButton**, **TimeLight**, **TimeDark**, **NetworkSignalLight**, **NetworkSignalDark**, **WifiSignalLight**, **WifiSignalDark**, **BatteryLight**, **BatteryDark**

`components/kit-names/` is a **name-compatibility layer**, not new UI: every export there renders
an existing component under the name the Figma file uses (version tags, leading dots, light/dark
suffixes, kebab case). `KitNames` is the lookup table itself — `KitNames['cart-button']`.

## Intentional additions

Confirmed intentional additions — **Flag**, **DirhamGlyph**, **KitNames**, **AvatarGroup**,
**BrandLogoSlot**, **FILE_FORMAT_COLORS**, **BADGE_COLORS**, **RewardsBanner**, **Logo**,
**Amount**, **TopbarItem**, **Icon**, **BackgroundPattern**, **CountryFlag**, **UaeDirham**,
**NotificationsTabMenuItems** — none of which is new UI. Each is a wrapper over material the file
ships, a shared constant, or a name the Figma file spells in a way that cannot be a JS identifier.
Every other export in the library now carries the kit's own vocabulary.

**Wrappers over shipped material**

- **Icon** — addresses the file's 163 icon symbols by name instead of 163 imports.
- **Flag** / **CountryFlag** — the same for the 262 country-flag symbols (`CountryFlag` is the
  Figma-facing alias).
- **DirhamGlyph** / **UaeDirham** / **Amount** — the file's `uae-dirham` vector plus the
  glyph-then-figure pair it repeats verbatim in nine places (buttons, balances, dropdowns, tables).
- **Logo** — the mark + wordmark lockup the topbar composes at fixed offsets.
- **BackgroundPattern** — the file's `Background Pattern / Light` tile plus its white wash.
- **KitNames** — the Figma-name → component lookup table (not a rendered component).

**Renames of Figma families whose names can't be a JS identifier**

| Figma name | Exported as | Why |
| --- | --- | --- |
| `Sorting Icons [1.1]` | **SortingIcons** | singular; `SortingIcons` alias kept |
| `File Format Icons [1.1]` | **FileFormatIcons** | singular; `FileFormatIcons` alias kept |
| `_Library Types` | **LibraryTypes** | leading underscore, singular; `LibraryTypes` alias kept |
| `Time / Light` · `Time / Dark` | **Time** (+ `TimeLight` / `TimeDark`) | slashes |
| `WiFi Signal / Light` · `/ Dark` | **WiFiSignal** (+ `WifiSignalLight` / `WifiSignalDark`) | slashes, casing |
| `Network Signal / …` · `Battery / …` | **NetworkSignal** · **Battery** (+ light/dark aliases) | slashes |
| `Button Group Items [1.1]` | **ButtonGroupItems** | singular; `ButtonGroupItems` alias kept |
| `Tab Menu Horizontal Items [1.1]` | **TabMenuHorizontalItems** | singular; `TabMenuHorizontalItems` alias kept |
| `Notifications Tab Menu [1.1]` | **NotificationsTabMenu** (+ `NotificationsTabMenuItems`) | version tag |
| `Icon - Iteractive` | **IconIteractive** (+ `IconIteractive`) | the file's typo is preserved only in the alias |
| `Avatar Group [1.1]` (frame) | **AvatarGroup** | published as a frame, not a set |
| `Top Status [1.1]` · `Bottom Status [1.1]` | **TopStatus** · **BottomStatus** | version tags |

**Shared constants** — **BADGE_COLORS** and **FILE_FORMAT_COLORS** expose the ten badge hues and
nine file-format hues the file uses, so consumers don't re-type them.

## Deliberately not built

- **Synergy** (×2) — a component set with **zero instances anywhere in the file**. Nothing was
  reconstructed for it, so there is no geometry to build from; inventing one would be a guess.
  **Send me a frame that uses it** and I'll build it.
- **Component** — an unnamed Figma wrapper frame with no design of its own.
- **Monday.com**, **Mastercard** — real third-party logos used as placeholder data inside table
  cells. They are example content, not Arvo components, and are not reproduced. Use
  `BrandLogoSlot` and pass the real mark.

`Apex` **is** built (`components/media/Apex.jsx`) — it turned out to be the file's own fictional
sample-company mark, drawn from vectors present in the file, not a third-party logo.
- Pages named **Text Input**, **Text Area**, **Select**, **Dropdown**, **Accordion**,
  **Date Picker**, **File Upload**, **Pagination**, **Popover**, **Progress Bar**, **Slider** and
  **Avatar** exist in the file but are **empty placeholders with no frames and no components**. The
  Avatar family lives elsewhere in the file and *is* built; the rest genuinely do not exist, so
  they are not invented. **If Arvo has form inputs, they are not in this file** — send them over.
- Size-only helper sets (`.Button Size`, `.Icon Button Size`, `.Modal Content/Header/Footer`,
  `.Navbar - Icons`, `.Balance`) are folded into their parent component's `size` / slot props
  rather than shipped as separate exports.

### Family → component map

The file lists **109 component sets**. Several are duplicated across pages (the same family
appears twice where a page re-published it), and many are internal size/slot helpers. Every set is
accounted for below; where the name here differs from the Figma name it is a rename to the public
API, not an omission.

| Figma family | Built as |
| --- | --- |
| Button - Master (×2), .Button Size (×4) | `Button` (`type` × `size`) |
| Icon Button (×2), .Icon Button Size (×3) | `IconButton` |
| Link Button · Text Link | `LinkButton` · `TextLink` |
| Button- Primary (×2) | `ButtonPrimary` |
| Button Group [1.1] · Button Group Items [1.1] (×2) | `ButtonGroup` · `ButtonGroupItems` |
| Badge · Badge [1.1] (×2) · Badge/Dot | `Badge` |
| Status Badge [1.1] (×2) | `StatusBadge` |
| Indicator | `Indicator` |
| Tag · Tag [1.1] | `Tag` |
| Tag-Category (×2) · Tag-Icon-Category | `TagCategory` · `TagIconCategory` |
| Checkbox [1.1] (×2) · Checkbox Label [1.1] | `Checkbox` · `CheckboxLabel` |
| Radio [1.1] (×2) · Radio Label [1.1] | `Radio` · `RadioLabel` |
| Switch [1.1] · Switch Label [1.1] | `Switch` · `SwitchLabel` |
| Alert & Notification [1.1] | `Alert` |
| Toast [1.1] | `Toast` |
| Loader anim (×2) | `Loader` |
| Tooltip [1.1] | `Tooltip` |
| Notification (×2) · Notifications Items [1.1] | `Notification` |
| Notifications Tab Menu [1.1] | `NotificationsTabMenu` |
| Modal Header [1.1] · .Modal Header/Content/Footer | `ModalHeader` · `ModalContent` · `ModalFooter` |
| Status Modals | `StatusModal` |
| .Drawer Header · Status Drawer | `DrawerHeader` · `StatusDrawer` |
| Content Divider [1.1] | `ContentDivider` |
| Scroll [1.1] | `Scroll` |
| Sorting Icons [1.1] | `SortingIcons` |
| Table Header Cell [1.1] · Table Row Cell [1.1] | `TableHeaderCell` · `TableRowCell` |
| Segmented Control [1.1] (×2) | `SegmentedControl` |
| Tab Menu Horizontal [1.1] · …Items [1.1] · Tab Menu Vertical Items [1.1] | `TabMenu` · `TabMenuHorizontalItems` · `TabMenuVerticalItems` |
| Primary Tabs | `PrimaryTabs` |
| Menu-item | `MenuItem` |
| Mobile Back Element | `MobileBackElement` |
| Avatar [1.1] | `Avatar` (+ `AvatarGroup`) |
| Top Status [1.1] (×2) · Bottom Status [1.1] (×2) | `TopStatus` · `BottomStatus` |
| File Format Icons [1.1] | `FileFormatIcons` |
| Steps | `Steps` |
| Page Header [1.1] | `PageHeader` |
| Banner for Upcoming Feature (×2) | `Banner` |
| Banner / Earn Points. Build Your Portfolio · Frame | `RewardsBanner` · `Frame` |
| Icon - Iteractive | `IconIteractive` |
| Topbar Items [Topbar] [1.0] | `TopbarItem` |
| .Navbar - Tab · .Navbar - Icons · . Properties · .Portfolio · .Wallet · .Account | `NavbarTab` (labels + icons) inside `MobileBottomNav` |
| notifs-button · cart-button · m-notif-button · m-cart-button | `TopbarIconButton` (`kind`, `mobile`, `badge`) |
| footer- icon button (×2) | `FooterIconButton` |
| .Balance · Balance / Dropdown | `Balance` · `BalanceDropdown` |
| Status Bar · Notch · Battery /Light+Dark · Network Signal /Light+Dark · WiFi Signal /Light+Dark · Time /Light+Dark | `StatusBar` and its parts |
| _Library Types · _Status Indicator · Background Pattern / Light | `LibraryTypes` · `StatusIndicator` · `BackgroundPattern` |
| Country flags (262 symbols) | `Flag` |
| Icon symbols (163 glyphs) | `Icon` |
| **Apex · Synergy (×2) · Monday.com · Mastercard** | **not built** — third-party / placeholder logos used as sample data |
| **. Properties (Pressed) variants of partner cards** | folded into `NavbarTab` |

| Property Toast [1.1] | `PropertyToast` |
| Desktop Back Element | `DesktopBackElement` |
| Separator [Documentation] | `SeparatorDocumentation` |
| Add Content | `AddContent` |

**Built 105 of 109 component sets (127 of 135 families as the compiler counts them).** The
remainder are deliberately skipped sample content: **Apex**, **Synergy** (×2), **Monday.com**,
**Mastercard** — third-party or fictional partner logos used as placeholder data inside table
cells — and **Component**, an unnamed Figma wrapper frame with no design of its own.

---

## Content fundamentals

**Voice.** Plain, quantitative, second-person-implied. The file's own copy is short and declarative:
*"Fundamental interactive elements that guide user actions within digital interfaces."*,
*"Buttons that seamlessly integrate with text content."*, *"Click on the image to see the applied
shadow style."* No exclamation marks outside the placeholder alert string
(*"Insert your alert title here!"*), no marketing adjectives, no "we".

**Casing.** This is the sharpest rule in the system, and it is unusual:

- **Buttons are lowercase in the source and capitalized by CSS.** Labels are authored
  `interested`, `go to rewards`, `top up`, `invest`, and the button style applies
  `text-transform: capitalize`. Write button labels lowercase and let the component do the work.
- **Badges are uppercase**, forced by the type style (11px, +0.02em).
- **Documentation separators are uppercase** with +0.06em tracking: `COMPONENTS`.
- **Everything else is sentence case** — page titles ("Insert page title here"), table headers
  ("Members"), notification labels, modal titles.

**Numbers.** Always the dirham glyph then the figure, 2px apart: `⌐ 10,000`. Thousands separators
always. Percentages bare (`8.4%`). Time deltas are human and abbreviated: `18 hrs 32 min`,
`8 min ago`, `10 min left`.

**Product nouns.** *Properties*, *Portfolio*, *Wallet* (always "**Arvo Wallet**" when named in
full), *Rewards Balance*, *Investors Interested*, *Balanced* / *High Growth* / *High Yield* for
the three strategy labels.

**Emoji.** Used **only** as Figma variant-axis decoration (`📏 Size`, `🎨 Color`, `✨ Status`) —
never in product copy, never in UI. Do not put emoji in an Arvo interface.

**Placeholder convention.** Slots say `Insert <thing> here` / `Insert <Thing> Title` rather than
lorem ipsum. Keep that pattern when you add slots.

---

## Visual foundations

**Two type voices, on purpose.**
*Blinker* (SemiBold 600 / Regular 400 / Bold 700) is **product chrome** — buttons, balances, page
titles, nav labels, toast titles, banner copy. *Inter* and *Inter Display* are **UI and
documentation** — tables, forms, alerts, modal headers, descriptions, badges. If you are unsure:
if a user reads it while *doing money things*, it is Blinker.

**Colour.** The brand is a single hot orange — `#EE4F00` (`--arvo-orange`) for CTAs, `#ED3300`
(`--arvo-orange-hot`) for the logo mark, pressed states and the "18 hrs 32 min" urgency accent,
with `#FF6E41 / #FF936B / #FFB796` as the decorative ramp. The neutral is **sand, not grey** —
warm browns from `#131313` to `#D6CFCC` — and page surfaces are `#F4F4F1` and `#F6F6EF` (chalk).
A cool `#005D82` blue carries links and the "verified" state. The inherited base-library ramps
(gray, slate) survive for tables and documentation, and four accent modes
(`data-mode="orange|purple|green"`, default blue) plus `data-theme="dark"` are all present in the
tokens — Arvo product surfaces use the brand orange directly and leave `--primary-*` alone.

Semantic colours always come in four stops — `lighter` / `light` / `base` / `dark` — across
success, error, warning, information, verified, away, feature, faded, stable and highlighted.

**Backgrounds.** Screens are **not** flat. The page canvas is a 22.4px repeating tile
(`assets/brand/background-pattern-light.png`) under a top-down white wash (80% → 40%) over
`#F9F9F9` — use `<BackgroundPattern>`. Cards then sit on top in white or `#FBFBF9`. One decorative
gradient exists: the rewards banner's radial peach wash anchored at 108%/159% bottom-right. No
blue-purple gradients anywhere.

**Corner radii.** 12px is the house radius — buttons, cards, banners, notification rows. 16px for
larger surfaces (modals, topbar, drawers, bottom nav top corners). 10px for inputs and segmented
trays, 8px for badges/alert strips/glyph tiles, 6px for tags and tooltips, 999px for pills, dots
and avatars. Documentation frames use 40px. Non-round values appear and are correct: the checkbox
inner tile is **2.6px**, the file-format sheet is **4.8px**, a Figma doc frame is **5px**.

**Cards.** White or `#FBFBF9` fill, 12–16px radius, and **either** a hairline ring **or** a shadow —
rarely a heavy border. Rings are drawn as `inset 0 0 0 1px` (an inset shadow, not a border) so they
never affect layout: `#EBEBEB` for documentation, `#D6CFCC` / `rgba(130,123,119,0.4)` for product,
`#D9D9D9` for the wallet dropdown.

**Shadows.** Five, all in `tokens/elevation.css`. The signature is `--shadow-topbar`: six stacked
layers at 4% opacity each, ending in a `0 0 0 1px` ring — a soft, very wide lift rather than a hard
drop. `--shadow-dome` extends the same idea to nine stops for hero shapes. `--shadow-xs`
(`0 1px 2px rgba(10,13,20,.03)`) is the whisper used on glyph discs; `--shadow-md` is the single
`0 16px 32px -12px` lift; `--shadow-card` is the wallet dropdown's symmetric `±12px` pair.

**Transparency and blur.** Used in exactly one place: the desktop topbar is `rgba(255,255,255,0.8)`
with a backdrop blur, so the page pattern shows through. Scrims are `rgba(51,51,51,0.24)` light /
`0.56` dark. Everything else is opaque.

**Borders and hairlines.** Two weights: `#EBEBEB` (documentation, tables, modal dividers) and the
warmer `#D6CFCC` / `rgba(130,123,119,0.6)` (product chrome). `#F4F5F6` is the faintest, used on
glyph tiles and the scrollbar track. The mobile drawer draws its sand hairline on **all four**
sides even though only the top is visible.

**States.**
- *Hover*: a tint, not a new colour. Primary buttons darken to `#ED3300`; secondary/outlined swap
  their ring from `#D6CFCC` to `rgba(130,123,119,0.6)` and fill with chalk; ghost picks up
  `rgba(130,123,119,0.08)`; table rows tint to `#F7F7F7`. Text links underline.
- *Focused*: the control's ring darkens to `--sand-4` (`#4C4744`). No blue focus glow.
- *Pressed / active*: a chalk fill (`#F6F6EF`) and, on nav, the icon turns orange. No scale
  transforms, no shrink.
- *Disabled*: **opacity 0.6**, colours unchanged. This is consistent across every family — never
  grey out an Arvo control.

**Motion.** The file ships no prototype easing, so the system defines house defaults:
`--ease-standard: cubic-bezier(.2,0,.2,1)` at 120ms (hover/press), 180ms (toggles, switch knob),
280ms (sheets). Movement is short and non-bouncy; the loader is a plain linear 900ms rotation.
Fades and small slides only — no spring, no bounce.

**Layout.** Desktop content sits in a centred column with **80px** page-header gutters; the topbar
is a floating 1440×68 pill with 12/18px inner padding, and it is the only fixed element. Mobile is
375px with 16px gutters and a fixed 72px bottom nav. Spacing runs 0, 2, 4, 6, 8, 10, 12, 14, 16,
24, 32, 40, 48 — 12 and 24 do most of the work. Documentation frames use 72px/100px padding and
48px section gaps.

**Imagery.** Warm-daylight architectural photography (Dubai towers, balconies) — colour, not
duotone, no grain, no heavy filter. Photographs are 12px-rounded rectangles; people are always
round avatars, overlapped at **-4px** in groups with a 1px white ring and a `+n` chalk chip.

---

## Iconography

- **The icon set is bespoke and shipped in-file** — 163 glyphs, materialized to
  `assets/icons/icon-data.js` and addressed by name through `<Icon name="…" />`. **No icon font, no
  CDN, no substitution.**
- Two styles coexist: a **Feather-derived outline set** (`fi:*` in Figma → `Fi*` here) drawn on a
  24px grid at ~1.5px stroke, and a **filled set** (`*Fill` — `ErrorFill`, `DoneFill`, `ShieldFill`,
  `InfoFill`, `KeyFill`, `ClockFill`, `MapPinFill`, `PercentFill`, `BuildingOfficeFill`,
  `FlashlightFill`, `CloseFill`, `FileFill`) used **only inside** status chips, alerts and outcome
  discs. A handful of Remix-style line glyphs (`AddLine`, `ArrowUpSLine`, …) round it out.
- Arvo-specific glyphs the public Feather set does not have: `FiInvest`, `FiInvesting`, `FiRewards`,
  `FiReferrral` (the file's typo is preserved as the key), `FiWithdraw`, `FiTrend`,
  `FiStackedCoins`, `FiReceipt`, `FiBank`, `FiWallet`, `FiCalculator`.
- Standard sizes: **16** (inline, badges), **18** (dense chrome), **20** (buttons, list rows),
  **24** (nav, outcome modals). Glyphs paint with `currentColor`.
- **262 country flags** ship as a separate full-colour set (`<Flag name="UnitedArabEmirates" />`) —
  used in the `country` variant of `Tag` and in table cells.
- The **dirham glyph** (`assets/brand/uae-dirham.svg`) is treated as a typographic element, not an
  icon — it is always immediately left of a figure, 2px away, at the figure's own size.
- **Three vector "labels"** carry the strategy ribbon and its glyph
  (`assets/labels/ribbon.svg`, `balance-fill.svg`, `high-growth.svg`, `high-yield.svg`).
- **Emoji are never used as icons.** Unicode characters are used decoratively in exactly one place:
  the `•` in "Reserved • 10 min left" and in a Figma variant-axis name.

---

## Fonts — flagged substitution

The .fig carries no font binaries, so `tokens/fonts.css` pulls the four families from Google Fonts:

| Role | Family in the file | What ships here |
| --- | --- | --- |
| Product chrome | **Blinker** (400/600/700) | Blinker — exact match on Google Fonts |
| UI + docs | **Inter** (400/500/600) | Inter — exact match |
| Section titles | **Inter Display** (500) | ⚠️ **`Inter Tight` substituted.** Inter Display is not distributed by Google Fonts. |
| Token values | **DM Mono** (500) | DM Mono — exact match |

**Please send the real `Inter Display` files** (or confirm Inter Tight is acceptable) and drop them
in `assets/fonts/` — then replace the `@import` in `tokens/fonts.css` with `@font-face` rules.

## Typography — flagged gap

The Figma file defines **0 named text styles** (`fig-typography.css` is generated but empty). The
scale in `tokens/typography.css` is therefore transcribed from the type actually set on nodes
across the file, not from a style library. **0 of 0 text styles built** — if Arvo maintains a text
style library elsewhere, it is not in this file.
