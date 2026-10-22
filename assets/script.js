document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const mobileLayout = window.matchMedia('(max-width: 700px)');

if (menuToggle && navigation) {
  const setMenuOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    navigation.hidden = mobileLayout.matches && !open;
  };

  const syncNavigation = () => {
    // Return focus before hiding a navigation link during a resize.
    if (mobileLayout.matches && navigation.contains(document.activeElement)) {
      menuToggle.focus();
    }
    setMenuOpen(false);
  };

  menuToggle.hidden = false;
  syncNavigation();
  mobileLayout.addEventListener('change', syncNavigation);

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && mobileLayout.matches) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileLayout.matches &&
        menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (mobileLayout.matches && !event.target.closest('.site-header')) {
      setMenuOpen(false);
    }
  });
}

const themeToggle = document.querySelector('.theme-toggle');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme = null;

try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch {
  // The toggle still works when browser storage is unavailable.
}

if (savedTheme !== 'dark' && savedTheme !== 'light') savedTheme = null;

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }
};

applyTheme(savedTheme || (preferredTheme.matches ? 'dark' : 'light'));

preferredTheme.addEventListener('change', (event) => {
  if (!savedTheme) applyTheme(event.matches ? 'dark' : 'light');
});

if (themeToggle) {
  themeToggle.hidden = false;
  themeToggle.addEventListener('click', () => {
    savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(savedTheme);
    try {
      localStorage.setItem('portfolio-theme', savedTheme);
    } catch {
      // Keep the chosen theme active for this page even without storage.
    }
  });
}
