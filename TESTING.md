# Website Test Cases

These browser test cases cover the site's four pages, shared navigation, assets,
and interactive features.

## Test environment

- Website opened locally from `index.html` in the integrated browser.
- Desktop viewport: 1280 × 900.
- Mobile viewport: 390 × 844.
- Execution date: November 5, 2026.
- Actual results below are from browser checks performed on this version of the
  site.

## Test cases

### TC-001 — Home page

- **What is being tested:** The home page title and main heading render.
- **Steps to run:**
  1. Open `index.html` in a browser.
  2. Check the page title and the heading inside the main content.
- **Expected result:** The title starts with “Home” and exactly one main
  heading is present.
- **Actual result:** **PASS** — Title and main heading were present.

### TC-002 — About page

- **What is being tested:** The About page title and main heading render.
- **Steps to run:**
  1. Open `about.html` in a browser.
  2. Check the page title and the heading inside the main content.
- **Expected result:** The title starts with “About” and exactly one main
  heading is present.
- **Actual result:** **PASS** — Title and main heading were present.

### TC-003 — Projects page

- **What is being tested:** The Projects page title and main heading render.
- **Steps to run:**
  1. Open `projects.html` in a browser.
  2. Check the page title and the heading inside the main content.
- **Expected result:** The title starts with “Projects” and exactly one main
  heading is present.
- **Actual result:** **PASS** — Title and main heading were present.

### TC-004 — Contact page

- **What is being tested:** The Contact page title and main heading render.
- **Steps to run:**
  1. Open `contact.html` in a browser.
  2. Check the page title and the heading inside the main content.
- **Expected result:** The title starts with “Contact” and exactly one main
  heading is present.
- **Actual result:** **PASS** — Title and main heading were present.

### TC-005 — Shared navigation and active page

- **What is being tested:** All four pages provide consistent navigation and
  identify the current page.
- **Steps to run:**
  1. Visit each of the four pages.
  2. Check that the main navigation has four links.
  3. Check that exactly one link has `aria-current="page"`.
- **Expected result:** Every page has the same four navigation links and one
  current-page indicator.
- **Actual result:** **PASS** — All four pages met both checks.

### TC-006 — Desktop navigation layout

- **What is being tested:** Navigation behavior at a desktop viewport.
- **Steps to run:**
  1. Set the browser viewport to 1280 × 900.
  2. Open a site page.
  3. Check the main navigation and the Menu button.
- **Expected result:** Main navigation is visible and the mobile Menu button is
  hidden.
- **Actual result:** **PASS** — Desktop navigation was visible and Menu was
  hidden.

### TC-007 — Mobile navigation initial state

- **What is being tested:** The collapsed menu state on a narrow viewport.
- **Steps to run:**
  1. Set the browser viewport to 390 × 844.
  2. Open `index.html`.
  3. Check the Menu button's `aria-expanded` value and navigation visibility.
- **Expected result:** Menu is visible, `aria-expanded` is `false`, and the
  navigation is hidden.
- **Actual result:** **PASS** — The menu started collapsed as expected.

### TC-008 — Open mobile navigation

- **What is being tested:** The Menu button opens the mobile navigation.
- **Steps to run:**
  1. At 390 × 844, open `index.html`.
  2. Click the Menu button.
  3. Check `aria-expanded` and navigation visibility.
- **Expected result:** `aria-expanded` becomes `true` and the navigation is
  visible.
- **Actual result:** **PASS** — The button opened the navigation.

### TC-009 — Close mobile navigation with Escape

- **What is being tested:** Escape closes the mobile menu and restores focus.
- **Steps to run:**
  1. Open the mobile navigation.
  2. Press Escape.
  3. Check the Menu button state and keyboard focus.
- **Expected result:** Navigation closes, `aria-expanded` becomes `false`, and
  focus returns to the Menu button.
- **Actual result:** **PASS** — The menu closed and focus returned to the
  button.

### TC-010 — Close mobile navigation by clicking outside

- **What is being tested:** An outside click closes the open mobile menu.
- **Steps to run:**
  1. Open the mobile navigation.
  2. Click in the main content area outside the header.
  3. Check the Menu button's `aria-expanded` value.
- **Expected result:** The menu closes and `aria-expanded` is `false`.
- **Actual result:** **PASS** — The outside click closed the menu.

### TC-011 — Navigate from the mobile menu

- **What is being tested:** Selecting a page from the mobile menu navigates and
  closes the menu.
- **Steps to run:**
  1. At 390 × 844, open the mobile navigation on the home page.
  2. Select About.
  3. Check the destination URL and menu state.
- **Expected result:** The browser opens `about.html` and the mobile menu closes.
- **Actual result:** **PASS** — About loaded and the menu closed.

### TC-012 — Shared stylesheet and script

- **What is being tested:** The Contact page loads the shared CSS and JavaScript.
- **Steps to run:**
  1. Open `contact.html` in a browser.
  2. Check that `assets/styles.css` is loaded.
  3. Check that `assets/script.js` is loaded.
- **Expected result:** Both shared assets are present on the page.
- **Actual result:** **PASS** — Both assets were loaded.

### TC-013 — Project gallery images

- **What is being tested:** Project images load and have alternative text.
- **Steps to run:**
  1. Open `projects.html`.
  2. Check the project cards and each image's load state and `alt` text.
- **Expected result:** There are three project cards, and each contains a
  successfully loaded image with non-empty alternative text.
- **Actual result:** **PASS** — All three images loaded and had alternative
  text.

### TC-014 — Full-size project image links

- **What is being tested:** Each project image links to its corresponding local
  image file.
- **Steps to run:**
  1. Open `projects.html`.
  2. Compare each project image link's destination with the image's source.
- **Expected result:** All three image links point to their corresponding
  full-size image files.
- **Actual result:** **PASS** — All three destinations matched.

### TC-015 — Contact email link

- **What is being tested:** The Contact page email action.
- **Steps to run:**
  1. Open `contact.html`.
  2. Check the email link's `href`.
- **Expected result:** The link uses
  `mailto:dunsin1015@gmail.com`.
- **Actual result:** **PASS** — The email link had the expected destination.

### TC-016 — Résumé links open safely

- **What is being tested:** External résumé links use safe new-tab attributes.
- **Steps to run:**
  1. Open `contact.html`.
  2. Inspect every Google Drive résumé link.
- **Expected result:** Each résumé link opens in a new tab and includes both
  `noopener` and `noreferrer` in `rel`.
- **Actual result:** **PASS** — All checked résumé links had the expected
  attributes.

### TC-017 — Skip link destination

- **What is being tested:** The keyboard skip link targets the main content.
- **Steps to run:**
  1. Open a site page.
  2. Check the skip link's `href` and the matching target element.
- **Expected result:** The skip link points to `#main`, and an element with
  `id="main"` exists.
- **Actual result:** **PASS** — The link and target were present.

### TC-018 — About page skills and experience

- **What is being tested:** The About page includes its skills and experience
  content.
- **Steps to run:**
  1. Open `about.html`.
  2. Count the skill cards and experience entries.
- **Expected result:** At least five skill cards and at least two experience
  entries are present.
- **Actual result:** **PASS** — Five skill cards and two experience entries
  were present.

### TC-019 — Current footer year

- **What is being tested:** The footer year is updated by the site script.
- **Steps to run:**
  1. Open a site page.
  2. Compare the footer's `[data-year]` text with the current browser year.
- **Expected result:** The displayed year matches the browser's current year.
- **Actual result:** **PASS** — The footer displayed 2026, matching the test
  date.

### TC-020 — Theme toggle

- **What is being tested:** The theme button changes the page theme and
  accessible pressed state.
- **Steps to run:**
  1. Open a site page.
  2. Record the current `data-theme` value.
  3. Click the theme button and inspect `data-theme` and `aria-pressed`.
- **Expected result:** The theme changes, and `aria-pressed` reflects whether
  dark mode is active.
- **Actual result:** **PASS** — The theme changed and the pressed state matched.
