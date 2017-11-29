
let numbers = [1, 2, 3, 4];


let newNumbers = numbers.filter(
    number => number % 2            
);
                
newNumbers = newNumbers.map(
   number => number * 2
);
                
console.log(`The doubled numbers are: ${newNumbers}`);    // [2, 6]
