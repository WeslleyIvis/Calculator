export default class Calculator {
  constructor(buttons, display, displayCalc) {
    this.button = document.querySelectorAll(buttons);
    this.display = document.querySelector(display);
    this.displayCalc = document.querySelector(displayCalc);
    this.valueDisplay = 0;
    this.calcValueDisplay = [];
    this.valueCalculator = [];
  }

  handleEvent(button) {
    button.forEach((element) => {
      element.addEventListener('click', ({ innerText }) => {
        if (isNaN(innerText)) {
          this.typeOperation(element);
        }
        this.innerValue(element);
      });
    });
  }

  innerValue({ innerText }) {
    if (!isNaN(innerText)) {
      if (this.display.innerText == 0) {
        this.valueDisplay = innerText;
      } else {
        this.valueDisplay += innerText;
        this.calcValueDisplay.push(Number.parseInt(innerText));
      }
    }
    this.display.innerText = this.valueDisplay;
    this.displayCalc.innerText = this.calcValueDisplay;
    console.log(this.calcValueDisplay);
  }

  typeOperation({ innerText }) {
    switch (innerText) {
      case 'CE':
        console.log('CE');
        break;
      case 'C':
        this.cleanC();
        break;
      case 'DEL':
        console.log('DEL');
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        this.operation(innerText);
        break;
      case ',':
        console.log(',');
        break;
      case '+/-':
        console.log('mais ou menos');
        break;
    }
  }

  operation(type) {
    this.valueCalculator.push(+this.calcValueDisplay.join('').replace(',', ''));
    console.log(this.valueCalculator);

    this.calcValueDisplay.push(type);
  }

  cleanC() {
    this.valueDisplay = 0;
    this.calcValueDisplay = [];
  }

  init() {
    this.handleEvent(this.button);
    console.log(this.display);
  }
}
