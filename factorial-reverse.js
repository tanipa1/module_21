function factorialNumber(number){
    let result = 1;
    for( let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

factorialNumber(7);

for(let i = 5; i < 10; i = i + 2){
    
}