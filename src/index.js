import './main.css';
import { CalculatorUI } from './modules/calculator-ui.js';
import { ThemeManager } from './modules/theme-manager.js';

document.addEventListener('DOMContentLoaded', () => {
  new CalculatorUI();
  new ThemeManager();
});
