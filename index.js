function add(a, b){   
    return a+b;
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a*b

}

function divide(a, b){
    return a/b

}


function increment(n){
    n++
    return n
   
}
function decrement(h){
    h--
    return h
}

function makeInt(n){
    //parseInt(n, 10)
    return parseInt(n, 10)
    
}

function preserveDecimal(n){
    return parseFloat(n)
}

//console.log(parseInt("0.0", 10))
/*
let n = "123abc456"
console.log(typeof n)
console.log(typeof parseInt(n, 10))
console.log(typeof n)
*/
/*
let n = "1234"
console.log(typeof parseFloat(1234))
*/