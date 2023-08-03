const buttons = document.querySelector('.grid');
const calc = document.querySelector('.calc')

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operation = ['C', '÷', '%', '←', '×', '−', '+', '=']
let first = '', second = '', sign= '', results;

function clickNumber(key){
    if(key !== '.'){
        if(second === '' && sign === ''){
            first+=key;
            calc.value +=key;
            console.log(first, second, sign)
        } else{
            second+=key;
            calc.value +=key;
            console.log(first, second, sign)
        }
    } else{
        if(first !== '' && !first.includes('.')){
            first+=key;
            calc.value +=key;
            console.log(first, second, sign)
        } else if(second !== '' && !second.includes('.')){
            second+=key;
            calc.value +=key;
            console.log(first, second, sign)
        }
    }
}

function clickOperation(key){
    if(key === 'C'){
        first = '', second = '', sign= '', results ='';
        calc.value = '';
        console.log(first, second, sign)
    }  else if(key === '←'){
        if(second!== ''){
            second = second.slice(0,-1);
        } else if(sign!==''){
            sign = '';
        } else{
            first = first.toString().slice(0,-1);
        }
        calc.value = calc.value.slice(0,-1);
        console.log(first, second, sign)
    } else if(first!=='' && second!==''){
        switch(sign){
            case '÷':{
                if(+second === 0){
                    calc.value = "Ошибка";
                    first = '';
                    second = '';
                    sign = '';
                    return;
                }
                first = first/second;
                break;
            }
            case '%':{
                first = first/100*second;
                break;
            }
            case '×':{
                first = first*second;
                break;
            }
            case '+':{
                first = +first+ +second;
                break;
            }
            case '−':{
                first = first-second;
                break;
            }
        }
        calc.value = first;
        sign = key;
        key === '=' ? sign = '' : calc.value +=key;
        second = '';
        console.log(first, second, sign);
    } else if(key !== '=' && first !=='' && sign === ''){
        sign = key;
        calc.value += key;
        console.log(first, second, sign)
    } else if(sign !== '' && key !== '='){
        sign = key;
        calc.value = calc.value.slice(0,-1);
        calc.value+=sign;
        console.log(first, second, sign)
    } else{
        console.log(first, second, sign)
    }
}

function buttonsClick(e){
    if(!e.target.classList.contains('btn')) return;
    let key = e.target.textContent;
    if(first === '' && second === '' && sign === ''){
        calc.value = '';
    }
    if(number.includes(key)){
        clickNumber(key);
    } else if(operation.includes(key)){
        clickOperation(key);
    }
}

buttons.addEventListener("click", buttonsClick);

