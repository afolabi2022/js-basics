// Day 1 JavaScript Exercises for web3 learning 

const studentName = 'Afolabi Ojo Emmanuel';
const studyHoursToday = 5;
const learningWeb3 = true;

console.log("Exercise 1");
console.log(`My name is ${studentName}.`);
console.log(`I plan to study for ${studyHoursToday} hours today.`);
console.log(`Am I Learning Web3?: ${learningWeb3}`);

// Exercise 2:  Functions
function greetDeveloper(name) {
    return 'welcome, {Afolabi Ojo Emmanuel}. You are becoming a Web3 developer!';

}

console.log("\nExercise 2");
console.log(greetDeveloper(studentName));

// Exercise 3:  Arrays
const web3Topics = [
    "JavaScript", 
    "Blockchain",
    "Solidity",
    "Smart Contracts",
    "react dApps"
];

console.log("\nExercise 3");
console.log("The Web3 learning topics:"); 

for (let i =0; i < web3Topics.length; i++) {
    console.log(`${i + 1}. ${web3Topics[i]}`);

}

//Exercise 4:  Objects
const developerProfile = {
    name: studentName,
    level: "Beginner",
    goal: "Build smart contracts and earn from web3 development",
};

console.log("\nExercise 4");
console.log(developerProfile);
console.log(`${developerProfile.name}'s goal: ${developerProfile.goal}`);


function calculateStudyHours(days, hoursPerDay) {
  return days * hoursPerDay;
}

const totalHours = calculateStudyHours(56, 5);

console.log(`\nTotal study plan: ${totalHours} hours`);