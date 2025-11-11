export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

export const percent = (value) => {
  return value / 100;
};

export const toggleSign = (value) => {
  return -value;
};

export const isFiniteNumber = (value) => {
  return typeof value === 'number' && value === value && value !== Infinity && value !== -Infinity;
};

export const countDecimals = (value) => {
  const str = value.toString();
  if (str.indexOf('.') === -1) {
    return 0;
  }
  return str.split('.')[1].length;
};

export const roundToDecimals = (value, decimals) => {
  const factor = 10 ** decimals;
  return (value * factor + (value >= 0 ? 0.5 : -0.5)) | 0;
};

export const formatNumber = (value) => {
  if (!isFiniteNumber(value)) {
    return 'Error';
  }

  const str = value.toString();
  const parts = str.split('.');

  if (parts[1] && parts[1].length > 10) {
    const factor = 10 ** 10;
    const rounded = ((value * factor + (value >= 0 ? 0.5 : -0.5)) | 0) / factor;
    return rounded.toString();
  }

  return str;
};
