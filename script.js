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
                startFuncao.listaCleanCE();
                break;
            case 'C':
                startFuncao.listaClean();
                break;
            case 'DEL':
                startFuncao.listaPop();
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
            case ',':  
                startFuncao.listaAdd(value);
                console.log(lista);
                break;
            case '/':   
                startFuncao.division(value);
                break;             
            case '*': 
                startFuncao.multiplication(value)  ;             
                break;
            case '-':  
                startFuncao.subtraction(value) ;             
                break;
            case '+':                         
                startFuncao.add(value) ;        
                break;    
            case '=': 
                startFuncao.igual();
                break;
            
        }        
        displayValue = lista.length 
 
        if(lista[0] === '0' ){
            display.innerHTML = lista['0']
        } else if(displayValue === 2 ) {
            display.innerHTML = lista[1]
        } else if (displayValue === 1 || 3) {
            display.innerHTML = lista[displayValue - 1].join('').replace('.', ',')
        } else {
            display.innerHTML = 'Error'
        }       
    })
})

const calculator = {
    add(operador){
        if(lista.includes('0')) {
            
        } else if (lista.length === 2) {
            
        } else if(lista.includes('+')) {
            console.log()
            lista = [[(+lista[0].join(''.replace(',', '.'))) + (+lista[2].join(''.replace(',', '.')))]]
        } else {
            lista.push(operador)
        }
         return lista
    },
    subtraction(operador){
        if(lista.includes('0')) {

        } else if (lista.length === 2) {

        } else if(lista.includes('-')) {
            console.log('-')
            lista = [[(+lista[0].join(''.replace(',', '.'))) - (+lista[2].join(''.replace(',', '.')))]]
        } else {
            lista.push(operador)
        }
        return lista
    },
    multiplication(operador) {
        if(lista.includes('0')) {

        } else if(lista.length === 2){

        } else if(lista.includes('*')) {
            lista = [[(+lista[0].join('').replace(',', '.')) * (+lista[2].join('').replace(',', '.'))]]
        } else {
            lista.push(operador)
        }
        return lista
    },
    division(operador) {
        if(lista.includes('0')) {

        } else if(lista.length === 2){

        } else if(lista.includes('/')) {
            lista = [[(+lista[0].join('').replace(',', '.')) / (+lista[2].join('').replace(',', '.'))]]
        } else {
            lista.push(operador)
        }
        return lista
    },
    listaAdd(n){
        if(lista[0].includes('0')) {
            lista.shift(n)
            lista.push([n])
        } else if(lista.length === 2) {
            lista.push([n])
        } else if(lista.length === 3) {
            if(lista[2].includes('0')) {
                lista[2].shift()
                lista[2].push(n)
            } else {
                lista[2].push(n)
            }
        } else {
            lista[0].push(n)
        }    
        return lista
    },
    listaPop(){
        if(lista[0].length > 1) {
            lista[0].pop()       
        } else if(lista[0].length === 1) {
            lista = ['0']
        }else if (lista.length === 2){
            lista.pop()
        } else if(lista[2].length === 1){
            lista[2] = ['0']
        } else if(lista[2].length > 1) {
            lista[2].pop()
        } else {
           
        }   
        return lista
    },
    listaClean(){
        lista = ['0']
        return lista
    },
    listaCleanCE() {
        if(lista.length === 1) {
            lista[0] = ['0']
        } else if(lista.length === 2) {
            lista.pop()
        } else if(lista.length === 3) {
            lista[2] = ['0']
        }
    },
    igual(){
        
        if(lista.includes('+')) {
            lista = [[(+lista[0].join('').replace(',', '.')) + (+lista[2].join('').replace(',', '.'))]]
        } else if(lista.includes('-')) {
            lista = [[(+lista[0].join('').replace(',', '.')) - (+lista[2].join('').replace(',', '.'))]]
        } else if(lista.includes('*')) {
            lista = [[(+lista[0].join('').replace(',', '.')) * (+lista[2].join('').replace(',', '.'))]]
        } else if(lista.includes('/')) {
            lista = [[(+lista[0].join('').replace(',', '.')) / (+lista[2].join('').replace(',', '.'))]]
        } else {
            console.log('erro')
        }
        return lista
    }
}


