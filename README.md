# 🛠️ DevTools — STYLES Variable Reference

All variables live inside `DEFAULT_STYLES` at the very top of `src/App.jsx`. To permanently apply a change: open DevTools in the app → adjust the value → hit 💾 Save → Vercel auto-deploys.

**Tip:** Changed variables turn green in the DevTools panel. The pending counter shows how many unsaved changes you have.

---

## 🔑 How to Access DevTools

DevTools is hidden behind a secret gesture to prevent accidental access.

1. Log in to the app and go to the **Home screen**
2. Tap the **"More"** shortcut icon (bottom-right of the shortcut grid) **5 times quickly** within 1 second
3. The **⚙️ Hidden Settings** sheet will slide up
4. Scroll to the bottom and toggle **🛠️ Developer Tools** ON
5. Close the sheet — a **floating tab button** will appear on the right edge of the screen
6. Tap it to open the DevTools panel from the bottom of the screen

The floating button is **draggable** — drag it up or down and it will snap to either the left or right edge of the screen.

To close DevTools entirely, go back into Hidden Settings and toggle Developer Tools OFF.

---

## 📂 DevTools Pages

The DevTools panel is split into **4 pages** to keep things organized. Use the scrollable button row in the header to switch between them.

| Button | Page | What's inside |
|--------|------|---------------|
| (default) | 🏠 Home | Shortcut grid, balance, tab bar, floating nav, eye button, profile icon, splash, body font |
| 🔐 Login | Login screen | Everything on the login screen |
| 🗳️ PBB | PBB voting screen | Banner, photo grid, stats notch, chances/days display |
| 📋 Txns | Transactions | Transaction rows, date pills |

Hit **← Back** from any page to return to Home.

---

## 📦 Shortcut Grid
The 8 icon buttons on the Home screen: Bank transfer, Raffle Promo, Crypto, Refer & Earn, Load, Bills, PBB, More.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `headerPadding` | `"20px 25px"` | text (CSS) | Padding of the entire header area above the shortcuts |
| `shortcutIconSize` | `56` | px | Width and height of each icon box |
| `shortcutIconRadius` | `14` | px | Corner roundness — `28` = almost circular, `0` = square |
| `shortcutIconBg` | `#f4f6f5` | color | Background fill of each icon box |
| `shortcutIconColor` | `#333333` | color | Color of the SVG icons inside each box |
| `shortcutLabelSize` | `10.5` | px | Font size of the label below each icon |
| `shortcutLabelFont` | `CerebriBook` | font | Font used for shortcut labels |
| `shortcutLabelWeight` | `800` | number | Font weight of shortcut labels |

---

## 💸 Transaction Rows
Every row in both the Home screen preview and the full Transactions screen.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `txnRowPadding` | `"10px 20px"` | text (CSS) | Space inside each row — first number = top/bottom, second = left/right |
| `txnLabelSize` | `15` | px | Font size of the transaction name |
| `txnLabelWeight` | `800` | number | Font weight of the transaction name |
| `txnLabelFont` | `CerebriBook` | font | Font used for the transaction name |
| `txnSubSize` | `12` | px | Font size of the gray subtitle ("Purchased on") and time/date |
| `txnSubWeight` | `600` | number | Font weight of the subtitle and time text |
| `txnAmountSize` | `15` | px | Font size of the peso amount |
| `txnAmountWeight` | `900` | number | Font weight of the peso amount |
| `txnAmountFont` | `JekoMedium` | font | Font used for the peso amount |
| `txnSubGap` | `3` | px | Gap between subtitle and transaction name (left side) |
| `txnTimeGap` | `3` | px | Gap between time and peso amount (right side) |

> **Note:** "Reset / Password" transactions intentionally show no peso amount — this is by design to match how Maya displays password reset entries.

---

## 🏷️ Date Pill
The pill-shaped dividers in the Transactions screen (e.g. "Today", "February 21, 2026").

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `datePillSize` | `10.5` | px | Font size of the date text inside the pill |
| `datePillWeight` | `800` | number | Font weight of the date text |
| `datePillFont` | `CerebriBook` | font | Font used for the date text |
| `datePillPadding` | `"6px 18px"` | text (CSS) | Space inside the pill — first = height, second = width |
| `datePillRadius` | `30` | px | Corner roundness — `30` = full pill, `0` = rectangle |
| `datePillBg` | `#111111` | color | Background color of the pill |
| `datePillTopPad` | `14` | px | Space above each date pill divider |
| `datePillBottomPad` | `9` | px | Space below each date pill divider |

---

## 💰 Balance
The main wallet balance on the Home screen.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `balanceFontSize` | `32` | px | Font size of the balance number |
| `balanceWeight` | `600` | number | Font weight of the balance number |
| `balanceFont` | `JekoMedium` | font | Font used for the balance — Jeko recommended for numbers |

---

## 🗳️ PBB Screen

### Banner
| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `pbbBannerHeight` | `140` | px | Height of the PBB banner image at the top |
| `pbbTopStripHeight` | `0` | px | Extra strip height above the banner |
| `pbbBottomStripHeight` | `87` | px | Height of the dark strip below the banner |
| `pbbMayaLogoTop` | `56.2` | px | Top position of the Maya logo inside the banner |
| `pbbMayaLogoRight` | `9.8` | px | Right position of the Maya logo inside the banner |
| `pbbMayaLogoWidth` | `92` | px | Width of the Maya logo inside the banner |

### Stats Notch
The white card below the banner showing days and chances.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `pbbStatsOverlap` | `83` | px | How much the notch overlaps upward into the banner |
| `pbbNotchPaddingY` | `30` | px | Top/bottom padding inside the notch card |
| `pbbNotchRadius` | `11` | px | Corner roundness of the notch card |
| `pbbNotchMarginX` | `20` | px | Left/right margin of the notch card from screen edges |
| `pbbNotchNumSize` | `22` | px | Font size of the **number** (e.g. the "0" in "0 days") |
| `pbbNotchNumFont` | `JekoMedium` | font | Font of the number — separate from the word next to it |
| `pbbNotchNumWeight` | `900` | number | Font weight of the number |
| `pbbNotchStatSize` | `18` | px | Font size of the word next to the number (e.g. "days", "/30") |
| `pbbNotchStatWeight` | `900` | number | Font weight of the word next to the number |
| `pbbNotchStatFont` | `CerebriBook` | font | Font of the word next to the number |
| `pbbNotchLabelSize` | `11` | px | Font size of the subtitle below (e.g. "voting ends today") |
| `pbbNotchLabelWeight` | `700` | number | Font weight of the subtitle |
| `pbbNotchLabelFont` | `CerebriBook` | font | Font of the subtitle |
| `pbbChancesUnlimited` | `false` | toggle | When ON — shows "🎟️ unlimited / limited time only" instead of the number count |

> **Days display:** When `daysLeft` is 0, the subtitle automatically changes from "before voting ends" to "voting ends today".

### Candidate Grid
| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `pbbPhotoSize` | `"75%"` | % | Width of each candidate photo relative to its cell — `100%` = fills the cell |
| `pbbPhotoRadius` | `12` | px | Corner roundness of candidate photo boxes |
| `pbbNameSize` | `11` | px | Font size of the candidate name below their photo |
| `pbbNameWeight` | `800` | number | Font weight of the candidate name |
| `pbbNameFont` | `CerebriBook` | font | Font used for candidate names |

---

## 🔐 Login Screen

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `loginTopSpacing` | `"22.5vh"` | text (CSS) | Space above the Maya logo when keyboard is closed |
| `loginTopSpacingKeyboard` | `"100px"` | text (CSS) | Space above the Maya logo when keyboard is open |
| `loginHelpIconSize` | `24` | px | Size of the `?` help icon in the top-right corner |
| `loginHelpIconTop` | `24` | px | Top position of the help icon |
| `loginHelpIconRight` | `24` | px | Right position of the help icon |
| `loginLogoWidth` | `149.1` | px | Width of the maya SVG logo — height scales proportionally |
| `loginLogoMarginBottom` | `19` | px | Gap between the logo and the phone number below it |
| `loginPasswordBoxHeight` | `60` | px | Height of the password input box |
| `loginPasswordBoxRadius` | `14` | px | Corner roundness of the password box |
| `loginPasswordLabelSize` | `12` | px | Font size of the "Password" label inside the box |
| `loginEyeIconSize` | `20` | px | Size of the show/hide password eye icon |
| `loginEyeIconRight` | `14` | px | Right offset of the eye icon inside the password box |
| `loginForgotSize` | `14` | px | Font size of "Forgot your password?" link |
| `loginRequiredErrorSize` | `12` | px | Font size of the "Password is required" error message |
| `loginScreenLockRadius` | `30` | px | Corner roundness of the "Log in with screen lock" button |
| `loginScreenLockFontSize` | `14.5` | px | Font size of the "Log in with screen lock" button text |
| `loginSwitchAccountSize` | `14` | px | Font size of the "Not you? Switch account" text |
| `loginBtnRadius` | `14` | px | Corner roundness of the green "Log in" button |
| `loginBtnFontSize` | `16` | px | Font size of the "Log in" button text |
| `loginBtnPaddingY` | `16.5` | px | Top/bottom padding inside the "Log in" button — controls its height |

---

## 🧭 Floating Nav Bar
The pill-shaped bottom navigation.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `floatingNavBottom` | `37` | px | Distance from the bottom of the screen |
| `floatingNavRadius` | `15` | px | Corner roundness of the nav pill |
| `floatingNavMaxWidth` | `265` | px | Maximum width of the nav pill |
| `floatingNavOuterPadding` | `"0 20px"` | text (CSS) | Outer horizontal padding around the nav pill |
| `floatingNavInnerPadding` | `"15.7px 40px"` | text (CSS) | Inner padding inside the nav pill |

---

## 🔖 Tab Bar
The "Wallet / Savings / Credit / Loans / Cards" tabs on the Home screen.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `tabRowPaddingLeft` | `35` | px | Left padding of the whole tab row |
| `tabRowGap` | `-10` | px | Gap between tab items (negative = overlap) |
| `tabPillPaddingX` | `30` | px | Horizontal padding inside the active tab pill |
| `tabPillPaddingY` | `6.8` | px | Vertical padding inside the active tab pill |
| `tabPillRadius` | `20` | px | Corner roundness of the active tab pill |
| `tabPillBg` | `#000000` | color | Background of the active tab pill |
| `tabPillColor` | `#ffffff` | color | Text color of the active tab |
| `tabInactiveColor` | `#555555` | color | Text color of inactive tabs |
| `tabFont` | `CerebriBook` | font | Font used for all tabs |
| `tabActiveFontSize` | `14` | px | Font size of the active tab |
| `tabActiveFontWeight` | `900` | number | Font weight of the active tab |
| `tabInactiveFontSize` | `14` | px | Font size of inactive tabs |
| `tabInactiveFontWeight` | `600` | number | Font weight of inactive tabs |
| `tabFirstActivePaddingLeft` | `25` | px | Left padding of the first tab when active |
| `tabFirstInactivePaddingLeft` | `15` | px | Left padding of the first tab when inactive |

---

## 👁️ Eye / Balance Toggle
The eye button that shows/hides the balance on the Home screen.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `eyeIconSize` | `25` | px | Size of the eye icon |
| `eyeIconMarginTop` | `-22` | px | Vertical nudge of the eye icon (negative = move up) |
| `eyeIconMarginRight` | `10` | px | Right margin of the eye icon |

---

## 👤 Profile Icon

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `profileIconMarginTop` | `0` | px | Vertical nudge of the profile icon |
| `profileIconMarginLeft` | `0` | px | Horizontal nudge of the profile icon |

---

## 🌊 Splash Animation
The black Maya splash screen shown on app load and on login.

| Variable | Default | Type | What it does |
|----------|---------|------|--------------|
| `splashEnterDuration` | `0.4` | seconds | How long the splash takes to slide in |
| `splashExitDuration` | `0.6` | seconds | How long the splash takes to slide out |
| `splashCenterDuration` | `5000` | ms | How long the splash stays visible at center before exiting |

---

## 🔤 Global Font

| Variable | Default | What it affects |
|----------|---------|-----------------|
| `bodyFont` | `CerebriBook` | Default font for all app text that doesn't have its own font variable |

---

## 🎨 Available Fonts

| Font Name | Weight Feel | Best Used For |
|-----------|-------------|---------------|
| `CerebriBook` | Regular | Body text, labels, general UI — the default |
| `CerebriBold` | Bold | Headings, strong labels |
| `JekoLight` | Thin | Large decorative display text |
| `JekoRegular` | Regular | Clean modern alternative to Cerebri |
| `JekoMedium` | Medium | Numbers, balances, amounts |
| `JekoBold` | Bold | Strong modern headings |
| `JekoBlack` | Extra Bold | Hero text, maximum emphasis |

---

## 💡 Common Adjustments

| What you want | What to change |
|---------------|---------------|
| More space between transactions | Increase `txnRowPadding` first number: `"10px 20px"` → `"16px 20px"` |
| Transaction rows feel misaligned | Adjust `txnSubGap` and `txnTimeGap` separately until they match visually |
| Icons too small | Increase `shortcutIconSize`: `56` → `64` |
| Icons too square | Increase `shortcutIconRadius`: `14` → `28` |
| Balance too small | Increase `balanceFontSize`: `32` → `38` |
| Date pills too small | Increase `datePillSize` and second value of `datePillPadding` |
| PBB photos too small | Increase `pbbPhotoSize`: `"75%"` → `"100%"` |
| Show unlimited chances on PBB | Toggle `pbbChancesUnlimited` ON in PBB DevTools page |
| Login logo too small | Increase `loginLogoWidth`: `149.1` → `180` |
| Login button too flat | Increase `loginBtnPaddingY`: `16.5` → `22` |
| Splash stays too long | Decrease `splashCenterDuration`: `5000` → `2000` |
| Nav pill too low | Decrease `floatingNavBottom`: `37` → `20` |

---

## ⚠️ Important Notes

- Changes in DevTools are **live immediately** but only saved after hitting 💾 Save
- Hitting **Discard** reverts everything back to the defaults in `DEFAULT_STYLES`
- After saving, Vercel auto-deploys — wait ~1 minute for changes to go live
- DevTools is only accessible after enabling it via the **5-tap More shortcut** secret
- The **Fast mode** toggle in Hidden Settings skips animation delays — useful for testing transactions quickly