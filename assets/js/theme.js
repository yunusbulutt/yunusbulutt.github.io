document.querySelector('.theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch {}
});
