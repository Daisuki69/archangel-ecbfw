# 🛠️ DevTools — STYLES Variable Reference

All variables live inside `DEFAULT_STYLES` at the very top of `src/App.jsx`.
To permanently apply a change: open DevTools in the app → adjust the value → hit **💾 Save to GitHub** → Vercel auto-deploys.

> **Tip:** Changed variables turn **green** in the DevTools panel. The pending counter shows how many unsaved changes you have.

---

## 📦 Shortcut Grid
> The 8 icon buttons on the Home screen: Bank transfer, Raffle Promo, Crypto, Refer & Earn, Load, Bills, PBB, More.

| Variable | Default | Type | What it affects | Increase | Decrease |
|---|---|---|---|---|---|
| `shortcutIconSize` | `56` | number (px) | Width AND height of each icon box square | Bigger boxes, more prominent icons | Smaller boxes, more compact grid |
| `shortcutIconRadius` | `14` | number (px) | Corner roundness of each icon box | Rounder corners → `28` = almost circular | Sharper corners → `0` = perfect square |
| `shortcutIconBg` | `#f4f6f5` | color | Background fill color of each icon box | — | — |
| `shortcutIconColor` | `#333333` | color | Stroke/fill color of the SVG icons inside the box (not PBB) | Lighter color → less contrast | Darker color → more contrast |
| `shortcutLabelSize` | `10.5` | number (px) | Font size of the label text below each icon (e.g. "Bank transfer") | Bigger text, may overflow at >13 | Smaller text, more compact |
| `shortcutLabelFont` | `CerebriBook` | font | Font used for the shortcut label text | — | — |
| `shortcutLabelWeight` | `800` | number | Font weight of the shortcut label text | Bolder | Lighter |

---

## 💸 Transaction Rows
> Every row in both the Home screen preview (last 3 transactions) and the full Transactions screen.

| Variable | Default | Type | What it affects | Increase | Decrease |
|---|---|---|---|---|---|
| `txnRowPadding` | `10px 20px` | text (CSS) | Space inside each transaction row. Format: `"top/bottom left/right"` | More breathing room between rows (increase first number e.g. `"16px 20px"`) | Tighter rows, more fit on screen (e.g. `"6px 20px"`) |
| `txnLabelSize` | `15` | number (px) | Font size of the transaction name (e.g. "PBB Save Princess x500") | Larger, more readable | Smaller, more compact |
| `txnLabelWeight` | `800` | number | Font weight of the transaction name | Bolder | Lighter |
| `txnSubSize` | `12` | number (px) | Font size of the gray subtitle ("Purchased on", "Received money from") AND the time/date on the right | Larger subtitle | Smaller subtitle |
| `txnSubWeight` | `600` | number | Font weight of the subtitle and time text | Bolder | Lighter |
| `txnAmountSize` | `15` | number (px) | Font size of the peso amount on the right (e.g. "- ₱500.00") | Larger amount, more prominent | Smaller amount |
| `txnAmountWeight` | `900` | number | Font weight of the peso amount | Bolder | Lighter |
| `txnSubGap` | `3` | number (px) | Gap between "Purchased on" and the transaction name on the **left side** | More space between subtitle and name | Less space |
| `txnTimeGap` | `3` | number (px) | Gap between the time and the peso amount on the **right side** | More space between time and amount | Less space |
| `txnLabelFont` | `CerebriBook` | font | Font used for the transaction name text | — | — |
| `txnAmountFont` | `JekoMedium` | font | Font used for the peso amount. Jeko looks more financial/numeric | — | — |

> **Note:** Both sides of each row (name + amount) are vertically centered to each other. If the left and right sides look misaligned, adjust `txnSubGap` and `txnTimeGap` independently until they match visually.

---

## 🏷️ Date Pill
> The pill-shaped dividers in the Transactions screen that separate dates (e.g. "Today", "February 21, 2026").

| Variable | Default | Type | What it affects | Increase | Decrease |
|---|---|---|---|---|---|
| `datePillSize` | `14` | number (px) | Font size of the date text inside the pill | Bigger text inside pill | Smaller text inside pill |
| `datePillWeight` | `800` | number | Font weight of the date text inside the pill | Bolder | Lighter |
| `datePillPadding` | `6px 18px` | text (CSS) | Space inside the pill. Format: `"top/bottom left/right"` | Taller pill (first number), wider pill (second number) | Smaller, more compact pill |
| `datePillRadius` | `30` | number (px) | Corner roundness of the pill | `30` = fully rounded pill shape | `0` = rectangle, `8` = slightly rounded |
| `datePillBg` | `#111111` | color | Background color of the pill | — | — |
| `datePillFont` | `CerebriBook` | font | Font used for the date text inside the pill | — | — |

---

## 💰 Balance
> The main wallet balance shown on the Home screen (e.g. "₱1,690.75").

| Variable | Default | Type | What it affects | Increase | Decrease |
|---|---|---|---|---|---|
| `balanceFontSize` | `30` | number (px) | Font size of the balance number | Bigger, more prominent balance display | Smaller balance, more compact header |
| `balanceWeight` | `500` | number | Font weight of the balance number | Bolder | Lighter/thinner |
| `balanceFont` | `JekoMedium` | font | Font used for the balance number. Jeko is recommended for numbers | — | — |

> **Warning:** Going above `40` may cause the balance to overflow on smaller phone screens.

---

## 🗳️ PBB Screen
> The candidate photo grid on the PBB voting screen.

| Variable | Default | Type | What it affects | Increase | Decrease |
|---|---|---|---|---|---|
| `pbbPhotoSize` | `75%` | text (%) | Width of each candidate photo relative to its grid cell | Bigger photos, fills more of the cell. Max `100%` | Smaller photos, more whitespace around them |
| `pbbPhotoRadius` | `12` | number (px) | Corner roundness of each candidate photo box | Rounder corners | Sharper corners → `0` = sharp rectangle |
| `pbbNameSize` | `11` | number (px) | Font size of the candidate name below their photo | Bigger name text | Smaller name text |
| `pbbNameWeight` | `800` | number | Font weight of the candidate name | Bolder | Lighter |
| `pbbNameFont` | `CerebriBook` | font | Font used for candidate names | — | — |

---

## 🔤 Global Font
> Affects the entire app body text that doesn't have its own font override.

| Variable | Default | Type | What it affects |
|---|---|---|---|
| `bodyFont` | `CerebriBook` | font | Default font for all text in the app that isn't overridden by a specific font variable |

---

## 🎨 Available Fonts
> These are all the fonts loaded from the `/public` folder. Use these exact names in any font variable.

| Font Name | Weight Feel | Best Used For |
|---|---|---|
| `CerebriBook` | Regular | Body text, labels, general UI — the default app font |
| `CerebriBold` | Bold | Headings, strong labels |
| `JekoLight` | Thin | Large decorative display text |
| `JekoRegular` | Regular | Clean modern alternative to Cerebri |
| `JekoMedium` | Medium | Numbers, balances, amounts — gives a financial look |
| `JekoBold` | Bold | Strong modern headings |
| `JekoBlack` | Extra Bold | Hero text, maximum emphasis |

---

## 💡 Common Adjustments

| What you want to do | What to change |
|---|---|
| More space between transactions | Increase `txnRowPadding` first number: `"10px 20px"` → `"16px 20px"` |
| Left and right side of transaction rows look misaligned | Adjust `txnSubGap` and `txnTimeGap` separately until they match |
| Icons look too small | Increase `shortcutIconSize`: `56` → `64` or `70` |
| Icons look too square | Increase `shortcutIconRadius`: `14` → `20` or `28` |
| Balance looks too small | Increase `balanceFontSize`: `30` → `36` |
| Date pills look too small | Increase `datePillSize` and `datePillPadding` second value |
| PBB photos too small | Increase `pbbPhotoSize`: `"75%"` → `"90%"` or `"100%"` |
| Transaction names too small | Increase `txnLabelSize`: `15` → `17` |
| Everything looks too plain | Try switching `bodyFont` to `CerebriBold` or `JekoMedium` |
| Want a darker date pill | Change `datePillBg` to `#000000` |
| Want a green date pill | Change `datePillBg` to `#00b464` |
| Icon boxes look too light | Change `shortcutIconBg` to `#e8e8e8` or darker |
| Transaction amounts look too thin | Increase `txnAmountWeight` to `900` |
| Transaction names look too bold | Decrease `txnLabelWeight` to `600` or `400` |

---

## ⚠️ Important Notes

- Changes in DevTools are **live only** until you hit **💾 Save to GitHub**
- Hitting **Discard** reverts everything back to the defaults in `DEFAULT_STYLES`
- After saving to GitHub, Vercel auto-deploys — wait ~1 minute for changes to go live
- The DevTools floating button only appears when Developer Tools is toggled ON in Hidden Settings
- You can drag the floating button up/down and it snaps to left or right side of the screen