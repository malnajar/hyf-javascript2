
let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];



let tasks = monday.concat(tuesday);

// you did not answer the first question which is :
// 1- Collect two days' worth of tasks.


// Request #1

let worthOfTasks = 0

tasks.forEach(collect => worthOfTasks += collect.duration)




let durationInHours = tasks.map(
    task => task.duration / 60
);

// when you use filter or map the result should be a new array
// in your below answer u have modify durationInHours by using filter which is wrong

//your answer : durationInHours = durationInHours.filter(
//    duration => duration < 2
//);

lessThenTwoHoursDuration = durationInHours.filter(duration =>
    duration < 2
);



const ratePerHour = 35;

// in this question u should count all the hours not only 
// your answer now is right because i have changed your answer 
let payPerTask = durationInHours.map(
    duration => duration * ratePerHour
);

let totalPay = 0;

payPerTask.forEach(
    pay => totalPay += pay
);

totalPay = totalPay.toFixed(2);

console.log(`Maartje's total pay is: €${totalPay}`);    // is not = €40.83


