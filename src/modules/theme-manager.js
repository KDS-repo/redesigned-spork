export class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || 'light';
    this.applyTheme(this.currentTheme);
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.addEventListener('click', () => {
      this.toggleTheme();
    });
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    this.storeTheme(this.currentTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  storeTheme(theme) {
    localStorage.setItem('calculator-theme', theme);
  }

  getStoredTheme() {
    return localStorage.getItem('calculator-theme');
  }
}
