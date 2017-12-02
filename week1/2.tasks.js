
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

// convert duration to hours
let durationInHours = tasks.map(
    task => task.duration / 60
);

// remove tasks 2hrs or longer
durationInHours = durationInHours.filter(
    duration => duration < 2
);

// calculate pay by duration
const ratePerHour = 35;

let payPerTask = durationInHours.map(
    duration => duration * ratePerHour
);

// calculate total pay
let totalPay = 0;

payPerTask.forEach(
    pay => totalPay += pay
);

totalPay = totalPay.toFixed(2);

console.log(`Maartje's total pay is: €${totalPay}`);    // €40.83


