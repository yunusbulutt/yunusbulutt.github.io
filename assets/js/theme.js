const root = document.documentElement;
const themeColor = document.querySelector('meta[name="theme-color"]');

const syncThemeColor = () => {
  themeColor.content = getComputedStyle(root).getPropertyValue('--color-bg').trim();
};

document.querySelector('.theme-toggle').addEventListener('click', () => {
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch {}
  syncThemeColor();
});

syncThemeColor();

document.documentElement.addEventListener('click', () => {});
