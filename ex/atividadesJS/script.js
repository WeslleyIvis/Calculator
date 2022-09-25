// 1) Criar um script que solicite ao usuário o valor total da compra e a quantidade de parcelas a financiar e o sistema deve visualizar o valor de cada parcela de acordo com os juros da tabela abaixo. Utilize campos de texto para ler os valores e dar a resposta ao usuário:

const valueParcelas = document.querySelectorAll('.input-p');
const tableParcelas = document.querySelector('.table-parcelas');

valueParcelas.forEach((element) => {
	element.addEventListener('keyup', () => {
		let html = `        
			<tr class="thead-color">
				<td>N° Parcelas</td>
				<td>Valor da Parcela</td>
				<td>% de Juros</td>
				<td>Juros Parcela</td>
				<td>Juros Total</td>
			</tr>`;
		let parcelas = 0;
		let valorP = parseFloat(valueParcelas[0].value);
		let juros = 0;
		let valorJurosM = 0;
		let valorJurosT= 0;
		
		if (valueParcelas[1].value < 2) {
			juros = 0;
		} else if (valueParcelas[1].value >= 2 && valueParcelas[1].value < 5) {
			juros = 2;
		} else {
			juros = (70 / 100).toFixed(3);
		}

		for (let i = 0; i < +valueParcelas[1].value; i++) {
			html += `
			<tr>
			<td>${parcelas += 1}</td>
			<td>${valorP.toFixed(2)} </td>
			<td>% ${juros} </td>
			<td>${valorJurosM.toFixed(2)} </td>
			<td>${valorJurosT.toFixed(2)} </td>
			</tr>`	

			valorJurosM = valorP * juros * 1 / 100;
			valorJurosT += valorJurosM
			valorP = valorP + valorJurosM;
		}
		tableParcelas.innerHTML = html;
	})
});

// 3) Faça um script que receba dois números inteiros e mostre qual é o maior ou se são iguais. Leia os valores por meio de um formulário e mostre a mensagem final em um campo de texto.

const valores = document.querySelectorAll(".valor-ex2");
const textEx2 = document.querySelector(".text-ex2");

valores.forEach((element) => {
	element.addEventListener('keyup', () => {
		if (parseInt(valores[0].value) > parseInt(valores[1].value)) {
			textEx2.innerHTML = `Maior número: ${parseInt(valores[0].value)}`
		} 
		else if (parseInt(valores[0].value) == parseInt(valores[1].value)) {
			textEx2.innerHTML = `Os valores são iguais: ${parseInt(valores[0].value)}`
		}
		else {
			textEx2.innerHTML = `Maior número: ${parseInt(valores[1].value)}`
		}
	})
})

// 4) Crie um arquivo HTML que utilizando JavaScript leia a base e a altura de um retângulo (por meio de um formulário), calcule sua área e apresente os resultados em um campo de texto ou textarea.

const retangulo = document.querySelectorAll('.valor-ex3');
const textEx3 = document.querySelector('.text-ex3');

retangulo.forEach((element) => {
	element.addEventListener('keyup', () => {
		if (retangulo[0].value != '' && retangulo[1].value != '') {
			textEx3.innerText = `Valor: ${+retangulo[0].value * +retangulo[1].value}`
		} 
	})
})


// 5) Faça um script que receba três notas reais (três campos de texto), calcule e mostre a média do aluno e o conceito conforme regras abaixo

const notas = document.querySelectorAll(".valor-ex4");
const textEx4 = document.querySelector(".text-ex4");

notas.forEach((element) => {
	element.addEventListener('keyup', () => {		
		let media = +` ${(parseFloat(notas[0].value) + parseFloat(notas[1].value) + parseFloat(notas[2].value)) / 3}`

		if (media >= 6) {
			textEx4.innerHTML = "Aprovado"	
		} else if (media >= 3 && media < 6) {
			textEx4.innerText = "Exame"
		} else {
			textEx4.innerText = "Reprovado"
		}
	})
})
