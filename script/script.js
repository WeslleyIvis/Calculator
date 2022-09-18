import Calculator from './modules/calc.js';

const calc = new Calculator(
  '.buttons button',
  '.display-value',
  '.display-count',
);

calc.init();
