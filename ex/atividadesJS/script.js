// 7)

const inputAtv7 = document.querySelectorAll('.input-atv7');
const radioAtv7 = document.getElementsByName('radio-atv7');
const textAtv7 = document.querySelector('.text-atv7');
let imc = 0;

inputAtv7.forEach((element) => {
    element.addEventListener('keyup', () => {
        imc = Number(inputAtv7[0].value / (inputAtv7[1].value * inputAtv7[1].value));
        console.log(imc)
        if (inputAtv7[0] != '' && inputAtv7[1] != '') {
            if(radioAtv7[1].checked) {
                if(imc < 19.1) {
                    textAtv7.innerText = `${radioAtv7[1].value}: Abaixo do peso`
                } else if (imc < 25.8) {
                    textAtv7.innerText = `${radioAtv7[1].value}: Peso normal`
                } else if (imc < 27.3) {
                    textAtv7.innerText = `${radioAtv7[1].value}: Acima do peso`
                } else if (imc < 32.3) {
                    textAtv7.innerText = `${radioAtv7[1].value}: Acima do peso idela`
                } else {
                    textAtv7.innerText = `${radioAtv7[1].value}: Obeso`
                }
            } else if(radioAtv7[0].checked) {
                if(imc < 20.7) {
                    textAtv7.innerText = `${radioAtv7[0].value}: Abaixo do peso`
                } else if (imc < 26.4) {
                    textAtv7.innerText = `${radioAtv7[0].value}: Peso normal`
                } else if (imc < 27.8) {
                    textAtv7.innerText = `${radioAtv7[0].value}: Acima do peso`
                } else if (imc < 31.1) {
                    textAtv7.innerText = `${radioAtv7[0].value}: Acima do peso idela`
                } else {
                    textAtv7.innerText = `${radioAtv7[0].value}: Obeso`
                }
            }
        }
    })
})


// 8) 

const valorSalario = document.querySelector('#salario-atv8');
const textAtv8 = document.getElementById('text-atv8');

valorSalario.addEventListener('keyup', () => {
    let valorImposto = Number(valorSalario.value);

    if (valorImposto <= 1434) {
        textAtv8.value = valorImposto;      
    } else if ( valorImposto <= 2150 ) {
        textAtv8.value = `Imposto: ${(valorImposto * .075).toFixed(2)} || Salario: ${valorImposto - valorImposto * .075}`;
    } else if (valorImposto <= 2866) {
        textAtv8.value = `Imposto: ${(valorImposto * .15).toFixed(2)} || Salario: ${valorImposto - valorImposto * .15}`
    } else if (valorImposto <= 3582) {
        textAtv8.value = `Imposto: ${(valorImposto * .225).toFixed(2)} || Salario: ${valorImposto - valorImposto * .225}`
    } else {
        textAtv8.value = `Imposto: ${(valorImposto * .275).toFixed(2)} || Salario: ${valorImposto - valorImposto * .275}`
    } 
})


// 9)

const inputsAtv9 = document.querySelectorAll('#valorAtv9');
const operacoes = document.querySelectorAll('.button-atv9');
const textAtv9 = document.querySelector('.text-atv9')

operacoes.forEach((element) => {
    element.addEventListener('click', () => {
        
        if (inputsAtv9[0].value != "" && inputsAtv9[1].value != "") {
            switch(element.innerText) {
                case '+':
                    textAtv9.innerText = `Soma: ${+inputsAtv9[0].value + +inputsAtv9[1].value}`
                    break;
                case '-':
                    textAtv9.innerText = `Subtração: ${+inputsAtv9[0].value - +inputsAtv9[1].value}`
                    break;
                case '*':
                    textAtv9.innerText = `Multiplicação: ${+inputsAtv9[0].value * +inputsAtv9[1].value}`
                    break;
                case '/':
                    textAtv9.innerText = `Divisão: ${+inputsAtv9[0].value / +inputsAtv9[1].value}`
                    break;
            }    
        }
    })
})


// 10)

const inptAtv10 = document.querySelector('#input-atv10');
const textAtv10 = document.querySelector('.text-atv10');

inptAtv10.addEventListener('keyup', () => {
    let fatorial = +inptAtv10.value;
    let j = 1;

    textAtv10.innerText = ''
    for(let x = 1; x < fatorial ; x++) {
        textAtv10.innerHTML += `<tr>
                                    <td>${x}</td>
                                    <td>${j}</td>
                                </tr>`
        j += j * x
    }
    textAtv10.innerHTML += `<tr>
                                <td>${fatorial}</td>
                                <td>${j}</td>
                            </tr>`
})