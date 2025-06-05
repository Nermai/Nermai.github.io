document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  });
});