const buttons = document.querySelectorAll('button')
const arrayButtons = Array.from(buttons)
const display = document.querySelector('.display')
let lista = ['0']

arrayButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        let startFuncao = Object.create(calculator)
        value = element.innerText

        switch (value) {
            case 'CE':
                console.log('s')
                break;
            case 'C':
                startFuncao.listaClean()
                break;
            case 'DEL':
                startFuncao.listaPop()
                break;                
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                startFuncao.listaAdd(+value)
                console.log(lista)
                break;
            case '/':                
            case '*':                
            case '-':                
            case '+':                  
            case ',':   
                startFuncao.somar(value)         
                break;    
            case '=': 
                startFuncao.igual();
                break;
        }     
        
        displayValue = lista.length 
        console.log(displayValue)

        if(displayValue === 2 ) {
            display.innerHTML = lista[1]
        } else if (displayValue === 1 || 3) {
            display.innerHTML = lista[displayValue - 1]
        }
        
        console.log(display.innerText)
    })
})

const calculator = {
    somar(operador){
        if(lista.includes('0')) {
            lista.push()
        } else if(lista.includes('+')) {
            console.log()
            lista = [[(+lista[0].join('')) + (+lista[2].join(''))]]
        } else {
            lista.push(operador)
        }
         return lista
    },
    listaAdd(n){
        if(lista[0] === '0') {
            lista.shift(n)
            lista.push([n])
        } else if(lista.length === 2) {
            lista.push([n])
        } else if(lista.length === 3) {
            lista[2].push(n)
        } 
        else {
            lista[0].push(n)
        }
        
        return lista
    },
    listaPop(){
        if(lista.length === 1) {
            lista = ['0']
        } else {
            lista.pop()
        } 
        
        return lista
    },
    listaClean(){
        lista = ['0']
        return lista
    },
    igual(){
        if(lista.includes('+')) {
            lista = [[(+lista[0].join('')) + (+lista[2].join(''))]]
        } else if(lista.includes('-')) {
            lista = [[(+lista[0].join('')) - (+lista[2].join(''))]]
        } else if(lista.includes('*')) {
            lista = [[(+lista[0].join('')) * (+lista[2].join(''))]]
        } else if(lista.includes('/')) {
            lista = [[(+lista[0].join('')) / (+lista[2].join(''))]]
        } else {
            console.log('erro')
        }
        return lista
    }
}

// let liss = [1, '+' , 2]
// console.log(liss[1])
// let totaLis = liss.reduce((acc, atual, index) => {
//     console.log(acc, atual)
//     return acc + atual
    
// })

// console.log(+totaLis.replace('+', ''))



// const buttons = document.querySelectorAll('button')
// let display = document.querySelector('.display')
// let valueList = []
// const arrayButtons = Array.from(buttons)

// arrayButtons.forEach((value, index) => {
//     value.addEventListener('click', () => {
        
//         value = +value.innerHTML
//         calculate(value)
       
//         display = valueList.join('').innerHTML
//         console.log(valueList.join(''))
//     } )
// })


// function calculate(value){   
//     valueList.push(value)

//     return valueList
// }


// const CalcController = function(){
//     this.buttons = document.querySelectorAll('button')
//     this.display = document.querySelector('.display')
// }