function getSumOfArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
} 

function getOddNumbersOfanArray(numbers){
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
        
    }
}

const myNumbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = getOddNumbersOfanArray(myNumbers);
console.log(oddNumbers);
getSumOfArray(myNumbers);