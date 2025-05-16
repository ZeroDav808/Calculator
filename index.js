const add = (x,y) => {
    return x + y;
}

const sub = (x,y) => {
    return x - y;
}

const multiply = (x,y) => {
    return x * y;
}

const divide = (x,y) => {
    if(y === 0){
        return 'Error';
    } else{
        return x  / y;
    }
}
