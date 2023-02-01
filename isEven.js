function isEven(number){
    const remainder = number % 2;
    if( remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myEvenIs = isEven(303)
console.log(myEvenIs);