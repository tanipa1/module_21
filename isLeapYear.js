function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('This is Leap Year', year);
    }
    else{
        console.log('This is not Leap Year', year);
    }
}

isLeapYear(2024);