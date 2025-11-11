import { Calculator } from './calculator.js';

export class CalculatorUI {
  constructor() {
    this.calculator = new Calculator();
    this.currentOperandElement = document.getElementById('current-operand');
    this.previousOperandElement = document.getElementById('previous-operand');
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    document.querySelectorAll('.btn-number').forEach((button) => {
      button.addEventListener('click', () => {
        const number = button.dataset.number;
        if (number !== undefined) {
          this.calculator.inputNumber(number);
          this.updateDisplay();
        }
      });
    });

    document
      .querySelector('[data-action="decimal"]')
      .addEventListener('click', () => {
        this.calculator.inputDecimal();
        this.updateDisplay();
      });

    document.querySelectorAll('.btn-operator').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.action;
        this.calculator.handleOperator(action);
        this.updateDisplay();
      });
    });

    document
      .querySelector('[data-action="equals"]')
      .addEventListener('click', () => {
        this.calculator.performEquals();
        this.updateDisplay();
      });

    document
      .querySelector('[data-action="clear"]')
      .addEventListener('click', () => {
        this.calculator.clear();
        this.updateDisplay();
      });

    document
      .querySelector('[data-action="percent"]')
      .addEventListener('click', () => {
        this.calculator.handlePercent();
        this.updateDisplay();
      });

    document
      .querySelector('[data-action="toggle-sign"]')
      .addEventListener('click', () => {
        this.calculator.handleToggleSign();
        this.updateDisplay();
      });

    document.addEventListener('keydown', (event) => {
      this.handleKeyboardInput(event);
    });
  }

  handleKeyboardInput(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
      this.calculator.inputNumber(key);
      this.updateDisplay();
    } else if (key === '.') {
      this.calculator.inputDecimal();
      this.updateDisplay();
    } else if (key === '+') {
      this.calculator.handleOperator('add');
      this.updateDisplay();
    } else if (key === '-') {
      this.calculator.handleOperator('subtract');
      this.updateDisplay();
    } else if (key === '*') {
      this.calculator.handleOperator('multiply');
      this.updateDisplay();
    } else if (key === '/') {
      event.preventDefault();
      this.calculator.handleOperator('divide');
      this.updateDisplay();
    } else if (key === 'Enter' || key === '=') {
      event.preventDefault();
      this.calculator.performEquals();
      this.updateDisplay();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
      this.calculator.clear();
      this.updateDisplay();
    } else if (key === '%') {
      this.calculator.handlePercent();
      this.updateDisplay();
    }
  }

  updateDisplay() {
    this.currentOperandElement.textContent =
      this.calculator.getCurrentDisplay();
    this.previousOperandElement.textContent =
      this.calculator.getPreviousDisplay();
  }
}
