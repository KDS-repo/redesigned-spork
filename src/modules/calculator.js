import {
  add,
  subtract,
  multiply,
  divide,
  percent,
  toggleSign,
  formatNumber,
} from './math.js';

export class Calculator {
  constructor() {
    this.reset();
  }

  reset() {
    this.currentValue = '0';
    this.previousValue = '';
    this.operation = null;
    this.waitingForNewValue = false;
    this.lastResult = null;
    this.operable = false;
  }

  inputNumber(number) {
    if (this.waitingForNewValue) {
      this.currentValue = number;
      this.waitingForNewValue = false;
    } else {
      if (this.currentValue === '0' && number !== '.') {
        this.currentValue = number;
      } else {
        if (this.currentValue.length < 16) {
          this.currentValue += number;
        }
      }
    }
  }

  inputDecimal() {
    if (this.waitingForNewValue) {
      this.currentValue = '0.';
      this.waitingForNewValue = false;
      return;
    }

    if (this.currentValue.indexOf('.') === -1) {
      this.currentValue += '.';
    }
  }

  handleOperator(nextOperator) {
    if (this.previousValue === '' && (!this.waitingForNewValue || this.operable)) {
      this.previousValue = this.currentValue;
      this.operable = false;
    } else if (this.operation && !this.waitingForNewValue) {
      const result = this.calculate();
      this.currentValue = formatNumber(result);
      this.previousValue = this.currentValue;
      this.lastResult = result;
    }

    this.operation = nextOperator;
    this.waitingForNewValue = true;
  }

  calculate() {
    const previous = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);

    if (isNaN(previous) || isNaN(current)) {
      return current;
    }

    try {
      switch (this.operation) {
        case 'add':
          return add(previous, current);
        case 'subtract':
          return subtract(previous, current);
        case 'multiply':
          return multiply(previous, current);
        case 'divide':
          return divide(previous, current);
        default:
          return current;
      }
    } catch (error) {
      if (error.message === 'Division by zero') {
        return NaN;
      }
      throw error;
    }
  }

  performEquals() {
    if (this.operation && this.previousValue !== '') {
      const result = this.calculate();
      this.currentValue = formatNumber(result);
      this.previousValue = '';
      this.operation = null;
      this.waitingForNewValue = true;
      this.operable = true;
      this.lastResult = result;
    }
  }

  handlePercent() {
    const current = parseFloat(this.currentValue);
    if (!isNaN(current)) {
      const result = percent(current);
      this.currentValue = formatNumber(result);
      this.waitingForNewValue = true;
    }
  }

  handleToggleSign() {
    const current = parseFloat(this.currentValue);
    if (!isNaN(current) && current !== 0) {
      const result = toggleSign(current);
      this.currentValue = formatNumber(result);
    }
  }

  clear() {
    this.reset();
  }

  getCurrentDisplay() {
    return this.currentValue;
  }

  getPreviousDisplay() {
    if (this.previousValue && this.operation) {
      const operatorSymbols = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
      };
      return `${this.previousValue} ${operatorSymbols[this.operation]}`;
    }
    return '';
  }
}
