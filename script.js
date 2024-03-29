class Calculator {
  constructor() {
    this.calculator = null;
    this.display = null;
    this.buttons = null;
    this.regex = /^[0-9]$/;
    this.configButtons = [
      'C',
      'CA',
      '%',
      '/',
      '7',
      '8',
      '9',
      '*',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      ',',
      '=',
    ];
    this.listCalc = [];
    this.calculatedList = [];
    this.operatorCalc = [];
  }

  createCalculator() {
    const container = document.createElement('section');
    container.classList.add('calculator');
    this.calculator = container;
    this.createDisplay();
    this.createButtons();
    document.body.appendChild(this.calculator);
  }

  createDisplay() {
    const display = document.createElement('div');
    display.classList.add('display');
    const valueDisplay = document.createElement('span');
    const valueCalculated = document.createElement('span');
    valueDisplay.innerText = 0;
    display.appendChild(valueDisplay);
    display.appendChild(valueCalculated);
    this.display = display;
    this.calculator.appendChild(this.display);
  }

  createButtons() {
    const content = document.createElement('div');
    content.classList.add('calculator-buttons');
    for (let i = 0; i < this.configButtons.length; i++) {
      let element = document.createElement('button');
      element.innerText = this.configButtons[i];
      element.value = this.configButtons[i];
      element.classList.add(this.configButtons[i]);
      content.appendChild(element);
    }
    this.buttons = content;
    this.calculator.appendChild(this.buttons);
  }

  handleEvents() {
    this.buttons.childNodes.forEach((element) => {
      element.addEventListener('click', () => this.addValue(element));
    });
  }

  addValue({ value }) {
    console.log(this.listCalc);
    if (this.regex.test(+value)) {
      this.calculatedList.push(+value);
    } else {
      if (/[\+\-\/\*]/.test(value)) {
        this.calculatedList = [];
        this.listCalc.push(value);
      } else {
        this.calculatedList.push(value);
      }
      this.listCalc.push(this.calculatedList);
      console.log(this.listCalc.join('').replace(/,/g, ''));
    }
  }

  addOperator(operator) {
    this.operatorCalc.push(operator);
    console.log(operator);
  }

  create() {
    this.createCalculator();

    if (this.calculator) {
      this.handleEvents();
    }
  }
}

const calculator = new Calculator();
calculator.create();
