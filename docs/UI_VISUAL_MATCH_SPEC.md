Edit the existing **Club Court Booking** application.

## PRIMARY OBJECTIVE

Restyle the existing application so that its visual design is **at least 95% identical to the supplied reference screenshots**.

The screenshots are the authoritative visual reference.

Do **not** redesign the application.

Do **not** invent a different design system.

Do **not** simplify the screenshots into a generic SaaS dashboard.

Do **not** change the existing booking, membership, wallet, admin, authentication, routing or data functionality unless required to support the UI.

The objective is to reproduce:

- colours
- typography
- spacing
- card dimensions
- borders
- shadows
- navigation
- page widths
- layout proportions
- buttons
- badges
- tabs
- calendar styling
- court cards
- wallet cards
- membership cards
- tables
- forms
- modals

as closely as reasonably possible.

---

# 1. GLOBAL VISUAL DIRECTION

The application should feel like a **premium modern pickleball club management system**, not a generic banking app and not a colourful consumer sports app.

The visual character should be:

- professional
- slightly luxurious
- sporty
- calm
- highly legible
- spacious
- structured
- predominantly navy, teal and warm off-white

Avoid:

- bright gradients everywhere
- excessive shadows
- glassmorphism
- translucent navigation
- neon colours
- oversized rounded pill components
- emojis
- playful illustrations
- excessive animation
- huge empty hero sections

---

# 2. AUTHORITATIVE COLOUR SYSTEM

Match the screenshots closely.

Use approximately these CSS variables:

```css
:root {
  --navy-950: #07182c;
  --navy-900: #0b1b2f;
  --navy-850: #0c2946;
  --navy-800: #103454;

  --teal-700: #087d72;
  --teal-600: #0b8f83;
  --teal-500: #10a89a;
  --teal-300: #70ddd1;
  --teal-100: #d8f3ee;
  --teal-50: #effbf8;

  --page-background: #f7f6f1;
  --surface: #ffffff;
  --surface-muted: #f5f7f8;
  --surface-grey: #edf0f3;

  --text-primary: #0b1b2f;
  --text-secondary: #61738b;
  --text-muted: #8795a8;

  --border: #d7dee5;
  --border-light: #e6eaee;

  --success-background: #dcf4e7;
  --success-text: #087654;

  --danger: #b42318;
  --danger-light: #fce8e6;

  --purple-light: #eee8ff;
  --purple-text: #6941c6;
}

```

The most important colour relationships are:

### Navigation

Very dark navy:

```css
#0B1B2F

```

or visually equivalent.

### Main page background

Warm off-white:

```css
#F7F6F1

```

Do NOT use pure white as the page background.

### Cards

Pure or near-white:

```css
#FFFFFF

```

### Primary teal actions

Approximately:

```css
#087D72

```

to:

```css
#0B8F83

```

### Dark feature cards

Use navy → teal gradients only where they exist in the screenshots, particularly:

- Wallet balance card
- Membership hero card
- selected-date booking header

Do not apply gradients randomly elsewhere.

---

# 3. PAGE WIDTH AND SPACING

The screenshots use a wide centred application layout.

Desktop content should use approximately:

```css
max-width: 1580px;
margin: 0 auto;
padding-left: 32px;
padding-right: 32px;

```

At larger desktop widths, allow roughly:

```css
padding-left: 48px;
padding-right: 48px;

```

Pages should NOT stretch content edge-to-edge.

Typical spacing:

```text
Navbar → page content: 48–58px

Eyebrow → page title: 8–10px

Title → description: 10–14px

Page introduction → first main card: 34–42px

Card → card: 22–26px

```

The screenshots should feel spacious but not empty.

---

# 4. TYPOGRAPHY

Use a clean modern sans-serif close to the reference.

Recommended:

```text
Inter

```

or the closest existing project font.

For small uppercase section labels, use strong letter spacing.

Example:

```css
.section-eyebrow {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--teal-700);
}

```

Main page titles should resemble:

```css
font-size: clamp(42px, 4vw, 55px);
font-weight: 400;
line-height: 1.05;
letter-spacing: -0.035em;
color: var(--text-primary);

```

The title should look elegant and relatively light, as shown in:

- Choose a date. Find an open court.
- My Bookings
- Membership
- Your Wallet

Do not use extremely bold page titles.

Body text:

```css
font-size: 15px;
line-height: 1.6;
color: var(--text-secondary);

```

---

# 5. TOP NAVIGATION — VERY IMPORTANT

Recreate the desktop navigation almost exactly.

It must be a single dark navy bar approximately:

```css
height: 80px;
background: #0B1B2F;

```

The content should be centred within the same max-width as the application.

## Left

Logo block:

```text
[logo icon] Club Court
            PICKLEBALL CLUB

```

Club Court should be white and bold.

PICKLEBALL CLUB should be:

- uppercase
- smaller
- muted blue-grey
- letter spaced

Use the existing logo if available.

The logo icon should have a thin teal outline similar to the screenshots.

---

# 6. NAVIGATION ITEMS

Desktop navigation:

```text
Book a Court
My Bookings
Membership
Wallet
Admin View

```

The currently selected route should:

- use a slightly lighter navy background
- have white text
- have a thin bright teal underline at the bottom

Approximate active state:

```css
background: rgba(255,255,255,0.05);
border-bottom: 3px solid #18b7aa;

```

Inactive items:

```css
color: #b4c0cf;
font-weight: 600;

```

Do not turn navigation items into rounded floating buttons.

---

# 7. NAVIGATION RIGHT SIDE

Match the screenshots closely.

Show:

### Demo Role

Dark outlined container:

```text
DEMO ROLE   [ Player      v ]

```

### Wallet

Outlined compact wallet control:

```text
[wallet icon] 240.00
              Credits

```

### Help & Tour

Outlined dark button:

```text
?  Help & Tour

```

### Profile

Round teal avatar:

```text
BS

```

Then:

```text
Bernard Small
Pickle Pro

```

Use the current signed-in user dynamically, but preserve this visual arrangement.

---

# 8. CARD SYSTEM

Main cards should use:

```css
background: #fff;
border: 1px solid #d7dee5;
border-radius: 20px;

```

Typical shadow:

```css
box-shadow:
  0 1px 2px rgba(16, 24, 40, 0.04),
  0 10px 25px rgba(16, 24, 40, 0.05);

```

Do not use dramatic floating shadows.

Inner sections can use smaller radii around:

```text
12px
14px
16px

```

Primary large containers should generally use:

```text
18–22px

```

---

# 9. BOOK A COURT PAGE

Match the supplied booking screenshot as closely as possible.

Header:

```text
BOOK A COURT

Choose a date. Find an open court.

Pick a day and available start time, then choose a one-hour,
90-minute or two-hour booking. Eligible membership hours
are selected automatically.

```

Use the same hierarchy and spacing.

## Main booking layout

Desktop:

```text
---------------------------------------------------------
| Calendar             | Selected Date + Court Results |
| ~32% width           | ~68% width                    |
---------------------------------------------------------

```

Use approximately:

```css
grid-template-columns: minmax(390px, 0.85fr) minmax(650px, 1.7fr);
gap: 22px;

```

---

# 10. CALENDAR

Calendar should be contained in a white rounded card.

Header:

```text
SELECT A DATE

August 2026                      [<] [>]

```

Month name:

```css
font-size: 21px;
font-weight: 500;

```

Calendar weekday headings:

```text
MON TUE WED THU FRI SAT SUN

```

Use small uppercase muted text.

Each date should show:

```text
23
6 courts

```

Available-court count should be tiny teal text.

Selected date should be a dark navy rounded square.

Example:

```text
┌──────────┐
│    23    │
│ 6 courts │
└──────────┘

```

Selected style:

```css
background: #0C2946;
color: white;
border-radius: 14px;
box-shadow: 0 8px 20px rgba(11, 27, 47, .18);

```

Out-of-month dates should appear muted.

---

# 11. SELECTED DATE PANEL

The right-side booking results area should have a dark navy header.

Example:

```text
SELECTED DATE

Sunday, 23 August

6 of 6 courts have times available · Club open 15:00–19:00.

                                        6
                                  COURTS AVAILABLE

```

Use a dark navy / dark blue background close to:

```css
#0c2946

```

The available-court number should be bright teal.

Header bottom should transition into the white filtering/results area without looking disconnected.

---

# 12. BOOKING FILTER BAR

Under the selected-date header:

```text
[filter icon] REFINE TIMES

```

Right:

```text
[ All courts v ] [ Any time v ] [ Show all times v ]

```

Dropdowns:

```css
height: 38px;
border: 1px solid #d7dee5;
border-radius: 11px;
background: white;

```

Keep them compact.

---

# 13. COURT AVAILABILITY CARDS

Each court card should look like the screenshots.

Top section:

```text
[1] Court 1                          [4 times open]

    Outdoor acrylic · Club hours 15:00–19:00 · 80.00 Credits / hour

```

Number square:

```css
background: #d8f3ee;
color: #087d72;
border-radius: 12px;

```

Availability badge:

```css
background: #dcf4e7;
color: #087654;

```

Time-slot row:

```text
[15:00 BOOK] [16:00 BOOK] [17:00 BOOK] [18:00 BOOK]

```

Available times should use:

```css
background: #effbf8;
border: 1px solid #6fd4c8;
color: #00695f;
border-radius: 11px;

```

Hover:

```css
background: #dff7f2;
border-color: #0b8f83;

```

Selected:

```css
background: #087d72;
color: white;

```

---

# 14. MY BOOKINGS PAGE

Match the supplied screenshot.

Header:

```text
YOUR SCHEDULE

My Bookings

Review upcoming games, past court time and cancellations.

```

Top-right:

```text
+ Book another court

```

Use teal primary button.

Tabs:

```text
Upcoming  1
Past      1
Cancelled 1

```

Tabs sit inside a soft light-grey rounded container.

Active tab should be white with subtle shadow.

Booking card layout must preserve the screenshot:

```text
[date block] Court 2
             clock Saturday, 22 August 2026 · 09:00–10:30

             REFERENCE       PLAYER         STANDARD PRICE
             ...             ...            ...

             PAYMENT TYPE                 FINAL CLUB CREDITS

                                             Upcoming
                                             View Details
                                             Cancel Booking

```

Date block:

```css
background: #0c2946;
color: white;
border-radius: 14px;

```

Cancellation text should be red, not a huge red button.

---

# 15. MEMBERSHIP PAGE

Match the reference screenshot closely.

Header:

```text
YOUR CLUB BENEFITS

Membership

Membership payments happen at the club.
Free court hours and Club Credits are tracked separately.

```

## Membership hero

Use the screenshot's dark navy → teal gradient.

Approximate:

```css
background:
  linear-gradient(
    110deg,
    #171633 0%,
    #293d6b 50%,
    #087d72 100%
  );

```

Large rounded corners:

```css
border-radius: 30px;

```

Show:

```text
CURRENT CATEGORY

Pickle Pro

Active until 11 November 2026

```

Then four benefit cards:

```text
OPEN PLAY
Unlimited

FREE COURT HOURS
2 of 2 free court hours remaining

TOURNAMENT DISCOUNT
20%

DAYS REMAINING
80

```

Inner benefit cards should be translucent white overlays with subtle borders.

Example:

```css
background: rgba(255,255,255,.08);
border: 1px solid rgba(255,255,255,.14);

```

---

# 16. MEMBERSHIP DETAIL PANEL

White card beneath the hero.

Title:

```text
Current membership month

```

Subtitle:

```text
Allowances follow your activation anniversary, not calendar months.

```

Right:

```text
No rollover

```

Show four equal information tiles:

```text
MEMBERSHIP STARTED
12 Aug 2026

MEMBERSHIP ENDS
11 Nov 2026

CURRENT ALLOWANCE PERIOD
12 Aug–11 Sept

HOURS USED
0 of 2

```

Use light-grey tile backgrounds.

---

# 17. WALLET PAGE

Match the reference screenshot.

Header:

```text
CLUB CREDITS

Your Wallet

Use Club Credits to book courts.
They cannot be transferred or withdrawn as cash.

```

## Wallet hero card

Dark navy → teal horizontal gradient.

Large balance:

```text
Available balance

240.00 Credits

Equivalent to R240.00

```

The number must be visually prominent.

Use approximately:

```css
font-size: 68px;
font-weight: 300;

```

Do not make it overly bold.

Right-side embedded card:

```text
SIMPLE CONVERSION

R1.00 = 1 Club Credit

All actions in this prototype are simulated.

+ Top Up Wallet

```

Use translucent white border/background.

---

# 18. TRANSACTION HISTORY

Large white card.

Header:

```text
Transaction history

Every simulated wallet movement in one place.

SHOW [ All transactions v ]

```

Rows should use subtle separators.

Example:

```text
↓   Demo wallet top-up                           Top-up
    14 Aug 2026, 12:00                      +250.00 Credits
                                            Balance 360.00 Credits

↑   Court 2 booking · CC-DEMO-101               Booking
    20 Aug 2026, 12:00                      -120.00 Credits
                                            Balance 240.00 Credits

```

Use pale green icon background for credits added.

Use pale blue icon background for booking deductions.

---

# 19. BUTTON SYSTEM

Primary:

```css
background: #087d72;
color: white;
border-radius: 10px;
font-weight: 700;

```

Hover:

```css
background: #066b62;

```

Secondary:

```css
background: white;
border: 1px solid #ccd5df;
color: #0b1b2f;

```

Dark navigation controls:

```css
background: rgba(255,255,255,.04);
border: 1px solid rgba(255,255,255,.15);

```

Avoid giant pill buttons.

---

# 20. ICONOGRAPHY

Use Lucide React or the existing clean line-icon system.

Examples:

- Wallet
- HelpCircle
- Plus
- Clock
- Filter
- ChevronDown
- ChevronLeft
- ChevronRight
- CreditCard
- Calendar
- User
- BookOpen

Icons should be:

- thin
- simple
- consistent
- approximately 16–20px

No emojis.

---

# 21. FORM CONTROLS

Inputs and selects should resemble:

```css
height: 42px;
background: white;
border: 1px solid #d3dbe4;
border-radius: 10px;
padding: 0 14px;

```

Focus:

```css
outline: none;
border-color: #0b8f83;
box-shadow: 0 0 0 3px rgba(11, 143, 131, .12);

```

---

# 22. RESPONSIVENESS

Preserve the desktop screenshot at approximately:

```text
1440–1920px

```

At tablet widths:

- reduce horizontal padding
- allow filter controls to wrap
- reduce large heading sizes slightly

At mobile widths:

- collapse desktop nav into a compact mobile navigation
- stack calendar above court availability
- stack membership tiles
- stack wallet hero sections
- cards should use full width
- booking time slots may use 2-column grids
- avoid horizontal scrolling

Do NOT simply shrink the desktop layout until it becomes unreadable.

---

# 23. ADMIN VIEW

The Admin View must use exactly the same visual system.

Maintain:

- warm off-white background
- white cards
- dark navy headings
- teal actions
- subtle grey borders
- compact filters
- clean tables
- rounded cards

Admin tabs/sections:

```text
Bookings
Courts & Hours
Court Blocks
Members
Wallet Adjustments

```

Do not style Admin View as a completely different application.

---

# 24. HELP & TOUR

Help & Tour should open a white modal using the same design system.

Dark navy title.

Teal progress/accent colour.

Page description cards.

Buttons:

```text
Back
Next
Skip
Finish

```

Do not use visual spotlight overlays that navigate automatically.

---

# 25. CONSISTENCY REQUIREMENT

Create reusable design tokens and shared classes/components.

For example:

```text
AppShell
TopNavigation
PageHeader
Card
PrimaryButton
SecondaryButton
Badge
TabList
Tab
Select
StatCard
FeatureHero
SectionEyebrow

```

Do NOT recreate slightly different CSS for every page.

All pages must look like parts of the same application.

---

# 26. VISUAL MATCHING PROCESS

Before considering the task finished:

1. Open each supplied reference screenshot.
2. Open the corresponding application route.
3. Compare them side-by-side.
4. Adjust dimensions and spacing.
5. Adjust colours.
6. Adjust typography.
7. Adjust card widths.
8. Adjust navigation height.
9. Adjust borders and shadows.
10. Adjust vertical spacing.

Do not stop when the design is merely "similar."

The goal is **95% visual similarity**.

Pay particular attention to:

- navbar height
- navbar colours
- content maximum width
- page background
- typography scale
- calendar proportions
- booking panel proportions
- court-card height
- teal tones
- navy tones
- wallet gradient
- membership gradient
- white-card radii
- table/tab styling
- placement of page titles

---

# 27. DO NOT CHANGE FUNCTIONALITY

This task is primarily a **visual reconstruction**.

Preserve all existing:

- routes
- booking logic
- six courts
- operating-hour rules
- Club Credit rules
- wallet transactions
- membership logic
- free-hour logic
- cancellation behaviour
- Admin View functionality
- role switcher
- tour
- local/mock persistence or connected backend functionality

Only change application logic where necessary to make existing functionality work correctly with the recreated components.

---

# 28. FINAL ACCEPTANCE STANDARD

The finished application should make someone looking at the supplied screenshots say:

> "This is essentially the same website."

It should not merely have the same colours.

It should match the screenshots in:

- overall density
- proportions
- hierarchy
- spacing
- typography
- colour balance
- navigation
- cards
- button appearance
- selected states
- gradients
- badge styling
- calendar design
- court layout
- booking layout
- wallet presentation
- membership presentation

The screenshots are the final authority whenever there is uncertainty about styling.

Do a complete final visual pass on **Book a Court, My Bookings, Membership and Wallet** before considering the UI complete.