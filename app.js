const display = document.getElementById('display')
///
let oper = ''
let numbertyped = ''
let number
let res = 0
//


function typeing(num){
    if(res != 0 ){res = 0}
        numbertyped = numbertyped + num
        display.value = numbertyped
   
    
}
function clearr(){
    
    numbertyped = '';
    number = '';
    res = 0
    display.value = '';
}
function multi(){
    if(oper == '' && display.value != ''){
    oper = "multi";
    if(display.value = res){
        numbertyped = res
    }
    number = numbertyped
    numbertyped = '';
    display.value = number + '*'
    }

}
function add(){
    if(oper == ''&& display.value != '' ){
        oper = "add";
        if(display.value = res){
            numbertyped = res
        }
     number = numbertyped
    numbertyped = '';
    
    display.value = number + '+'
    }

}
function minus(){
    if(oper == '' && display.value != ''){
        oper = "min";
        if(display.value = res){
            numbertyped = res
        }
     number = numbertyped
    numbertyped = '';
    display.value = number + '-'}

}
function divide(){
    if(oper == '' && display.value != ''){
        oper = "div";
        if(display.value = res){
            numbertyped = res
        }
     number = numbertyped
    numbertyped = '';
    display.value = number + '/'
    }

}
function sum(){
    const secnum =  JSON.parse(numbertyped)
    const firstnum =  JSON.parse(number)

    switch(oper){
        case "multi": 
        res = firstnum * secnum
        display.value = res
        numbertyped = '';
        number = '';
        oper = ''
        break
        case "add": 
        res = firstnum + secnum
        display.value = res
        numbertyped = '';
        number = '';
        oper = ''

        break
        case "min": 
        res = firstnum - secnum
        display.value = res
        numbertyped = '';
        number = '';
        oper = ''

        break
        case "div": 
        res = firstnum / secnum
        display.value = res
        numbertyped = '';
        number = '';
        oper = ''

        break
        case '':
        break
    }
}

// const sj = [1,2,3,4,5]
// big(sj)
// function big(arr){
    
//     let big = 0 
//    arr.forEach((element) => {
//        if (big < element){big = element}
//     else{return}}

           
       
//    )
// }
