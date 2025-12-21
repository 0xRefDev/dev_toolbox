# DEV TOOLBOX 🧰

## Styles Guide

### 🖋️ Typography

#### Used Fonts
* **Inter** (Primary UI)
* **Poppins** (Headlines)
* **Do Hyeon** (Brand Accents)

#### Font Sizes
Standard modular scale for consistent hierarchy:
`12px` | `14px` | `16px` | `18px` | `20px` | `24px` | `32px`

---

### 🎨 Color Palette

> **Note:** Use pure hex values and handle opacity via RGBA/Opacity properties in your code.

#### Primary Colors
| Category | Hex Codes |
| :--- | :--- |
| **Grayscale** | `#FFFFFF`, `#9D9D9D`, `#5B5B5B`, `#0E0B0B`, `#000000` |
| **Brand Purples** | `#B2A8F1`, `#A294FC`, `#8A73D4`, `#6577FF` |
| **Deep Blues** | `#8AA1CE`, `#354055`, `#443F73` |
| **Dark UI** | `#3A3743`, `#272738`, `#27243D` |
| **Status** | `#FF4A4A` (Error/Danger), `#59A165` (Success) |

#### Gradients
* **Primary:** `linear-gradient(180deg, #558AED 0%, #292046 100%)`
* **Electric:** `linear-gradient(180deg, #FFFFFF 0%, #0F00DB 100%)`
* **High-Contrast:** `linear-gradient(180deg, #2CFF1D 0%, #50604F 84%)`

---

### 📏 Layout & Spacing

#### Spacing System
Consistent spacing tokens for margins and padding:
`8px` | `12px` | `24px` | `32px` | `48px`

#### Responsive Design
Breakpoints starting from **320px** (Mobile-first approach):
- **Mobile:** `320px` to `767px`
- **Tablet:** `768px` to `1023px`
- **Desktop:** `1024px` and above

---

### 🖱️ UI Components (General Rules)

#### Buttons & Interaction
* **Border Radius:** Default to `8px` or `12px` for a modern feel.
* **Transitions:** Use `200ms ease-in-out` for all hover states.
* **Active State:** Apply a subtle `scale(0.98)` on click/tap.

#### Elevation & Shadows
* **Soft Shadow:** `0px 4px 12px rgba(0, 0, 0, 0.1)`
* **Floating Element:** `0px 8px 24px rgba(0, 0, 0, 0.15)`

#### Icons
* **Primary Set:** Use Iconify Icons.
* **Default Size:** `20px` for UI actions, `24px` for navigation.