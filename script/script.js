import Calculator from './modules/calc.js';

const calc = new Calculator(
  '.buttons button',
  '.display-value',
  '.display-count',
);

calc.init();

const regex = /[0-9*-+/]/g;

const texto = 'c23+lc*e/5';

//console.log(regex.test('f'));

const A = 2;
const B = 5;
const C = 7;

function angle(A, B, C) {
  if (A <= B + C && B <= A + C && C <= A + B) {
    if (A == B && B == C) {z
      console.log('Triangulo equilátero');
    } else {
      if (A == B || B == C || C == A) {
        console.log('Triangulo isó');
      } else {
        console.log('Tri Escaleno');
      }
    }
  } else {
    console.log('Não é um triangulo');
  }
}

angle(A, B, C);
