// Q 1

let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         newNumbers.push(numbers[i] * 2);
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

let newNumber = numbers.filter(n => n % 2 !== 0)
let newNumbers = newNumber.map(m => m * 2)
console.log(newNumbers)


// Q 2

let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);


// Request #1

let worthOfTasks = 0

tasks.forEach(collect => worthOfTasks += collect.duration)

console.log("Request #1", worthOfTasks)


//Request #2

let taskDurationsToHours = tasks.map(convert => {
    
    return {
        name: convert.name,
        duration: convert.duration / 60
    };
})

console.log("Request #2", taskDurationsToHours)

//Request #3

let lessThenTwoHours = taskDurationsToHours.filter(compare => {
    return (compare.duration < 2) ? true : false
})

console.log("Request #3", lessThenTwoHours)


//Request #4

let MaartjeBill = 0
let MaartjeTakePerHour = 18

taskDurationsToHours.forEach(bill => MaartjeBill += MaartjeTakePerHour * bill.duration)

console.log("Request #4", MaartjeBill, "€")