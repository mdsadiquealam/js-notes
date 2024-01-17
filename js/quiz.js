// Define an array of quiz questions as objects
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
    // Add more questions as needed
];



// Function to display a question and its options
let index = 1 ;
const data = quizQuestions[index];
let questonHeading = document.getElementById("questionbox");

let loadQuestion = ()=>{
    questonHeading.innerHTML = data.options[0];
    console.log(data);
}
loadQuestion();