function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    if(y === 0){
        return `Error!!! Can't divide by zero.`
    }
    return x / y;
}