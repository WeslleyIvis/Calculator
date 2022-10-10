const menu = document.querySelectorAll('.nav-menu li');
const sections = document.querySelectorAll('.atv');

function slider(list, index, style) {
  for (let i = 0; i < list.length; i++) {
    if (i == index) {
      list[i].classList.remove(style);
    } else {
      list[i].classList.add(style);
    }
  }
}

const eventMenu = (menu, sections, indexStarter = 0) => {
  for (let x = 0; x < menu.length; x++) {
    if (!sections[x].classList.contains('d-block')) {
      for (let j = 0; j < sections.length; j++) {
        sections[j].classList.add('d-block');
      }
      sections[indexStarter].classList.remove('d-block');
    }

    menu[x].addEventListener('click', () => {
      slider(sections, x, 'd-block');
    });
  }
};

eventMenu(menu, sections, 2);
// 1)

const table = document.querySelector('.ex-1 table');
const nome = document.querySelector('#inptNome');
const buttons = document.querySelectorAll('.btn');

let appendTable = `<thead><tr><td> Index</td><td> Nome</td></tr></thead>`;
let count = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (buttons[i].innerText == 'Adicionar' && nome.value != '') {
      appendTable += `<tr><td>${(count += 1)}</td> <td>${nome.value}</td></tr>`;
    } else {
      count = 0;
      appendTable = `<thead><tr><td> Index</td><td> Nome</td></tr></thead>`;
    }
    table.innerHTML = appendTable;
  });
}

// 2)

const matriz = document.querySelector('.ex-2 table tbody');
const inptAtv2 = document.querySelectorAll('.btnAtv2');

for (let i = 0; i < inptAtv2.length; i++) {
  let appendMatriz = '';
  inptAtv2[i].addEventListener('keyup', () => {
    appendMatriz = '';
    if (inptAtv2[0].value != '' && inptAtv2[1].value != '') {
      for (let l = 1; l <= +inptAtv2[0].value; l++) {
        appendMatriz += `<tr>`;
        for (let c = 1; c <= +inptAtv2[1].value; c++) {
          appendMatriz += `<td class="td-matriz">${l} ${c}</td>`;
        }
        appendMatriz += `</tr>`;
      }
    }
    matriz.innerHTML = appendMatriz;
  });
}

// 3)

const menuPage = document.querySelectorAll('.menu-ex3 ul li');
const pages = document.querySelectorAll('.atv3');

eventMenu(menuPage, pages, 0);

// cronometro

const crono = document.querySelector('.crono');
const btnCrono = document.querySelectorAll('.btn-crono');
const valorCrono = document.createElement('p');
let countCrono = 0;

crono.appendChild(valorCrono);

let cronoInterval;

btnCrono.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.innerText == 'Start') {
      cronoInterval = setInterval(() => {
        `${(valorCrono.innerText = countCrono += 1)}`;
      }, 1000);
      btnCrono[0].disabled = true;
    } else if (element.innerText == 'Parar') {
      clearInterval(cronoInterval);
      btnCrono[0].disabled = false;
    } else {
      countCrono = 0;
      btnCrono[0].disabled = true;
    }
  });
});

// SlideShow

const buttonsSlide = document.querySelectorAll('.buttons-slide button');
const slide = document.querySelector('.slides');
let margin = 0;
console.log(slide.attributes);

buttonsSlide.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.title == 'frente') {
      if (margin > -slide.clientWidth) {
        margin += -800;
        slide.style.marginLeft = margin + 'px';
      }
    } else if (margin == 0) {
    } else {
      margin += 800;
      slide.style.marginLeft = margin + 'px';
    }
  });
});

// tabuada

const tab = document.querySelector('.tab');
const inptTab = document.querySelectorAll('.inpt-tab');
const resultTab = document.querySelector('.result-tab');

inptTab.forEach((element) => {
  element.addEventListener('keyup', () => {
    resultTab.innerHTML = '';
    if (inptTab[0].value != '' && inptTab[1].value != '') {
      for (let x = 1; x <= +inptTab[1].value; x++) {
        resultTab.innerHTML += `
            ${+inptTab[0].value} X ${x} = ${+inptTab[0].value * x} <br>`;
      }
    }
  });
});
