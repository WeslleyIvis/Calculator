// 6) Uma empresa irá dar 25% de aumento para todos os funcionários, você deverá desenvolver um programa que leia o salário atual do funcionário. Após a leitura, calcule e mostre na própria página o salário atual em uma linha e em outra linha o salário com o aumento de 25%.

const valorSalario = document.querySelector('#salario');
const printValor = document.querySelector('.valor');
const valorPorc = document.querySelector('.valor-porce');

valorSalario.addEventListener('keyup', () => {
  printValor.innerHTML = `Valor Atual: R$ ${parseFloat(valorSalario.value)}`;
  valorPorc.innerHTML = `Valor com aumento: R$ ${
    (parseFloat(valorSalario.value) * 25) / 100 + parseFloat(valorSalario.value)
  }`;
});

//7) Crie um script que calcule e mostre na própria página a média aritmética de 4 números reais digitados pelo usuário.

const valorM = document.querySelectorAll('.valorMedia');
const textMedia = document.querySelector('.textMedia');

valorM.forEach((element) => {
  element.addEventListener('keyup', () => {
    if (
      +valorM[0].value != '' && +valorM[1].value != '' && +valorM[2].value != '' && +valorM[3].value != ''
    ) {
      const total =  +valorM[0].value + +valorM[1].value + +valorM[2].value + +valorM[3].value;
      textMedia.innerHTML = `Média: ${total /4}`;
    }
  });
});

// 8) Crie um script que calcule as raízes de uma equação de 2º grau ax2 + bx + c.

const valorD = document.querySelectorAll('.valorDelta');
const textD = document.querySelector('.textD');



valorD.forEach((element) => {
  element.addEventListener('keyup', () => {
    if (
      +valorD[0].value != '' || +valorD[0].value == 0 &&
      +valorD[1].value != '' || +valorD[1].value == 0 &&
      +valorD[2].value != '' || +valorD[2].value == 0
    ) {
      calcDelta(+valorD[0].value, +valorD[1].value, +valorD[2].value);
    };
  });
});

function calcDelta(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  if (delta <= 0) {
    textD.innerHTML = `Não pode ser negativo <br> Valor de delta: ${delta}`;
  } else {
    let raizPositiva = (-b + Math.sqrt(delta)) / (2 * a);
    let raizNegativa = (-b - Math.sqrt(delta)) / (2 * a);
    textD.innerHTML = `Raiz positiva: ${raizPositiva} <br> Raiz negativa: ${raizNegativa}`;    
  };
};

// 9) Faça um script que leia o nome de uma pessoa, o ano de nascimento dessa pessoa e o ano atual, calcule e mostre a idade dessa pessoa e seu nome em linhas separadas.

const nome = document.querySelectorAll(".calc-idade");
const textCalc = document.querySelector(".textCalc");

nome.forEach((element) => {
    element.addEventListener('keyup', () => {
      textCalc.innerHTML = `Nome: ${element[0].value} <br> Idade: ${element[1].value}`
    })
})


