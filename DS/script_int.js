const questions = [
    {
        question: "On which of the following statements does the time complexity of checking if an edge exists between two particular vertices is not, depends?",
        answer: [
            { text:" Depends on the number of edges", correct: false},
            { text:"Depends on the number of vertices", correct: false},
            { text:" Is independent of both the number of edges and vertices", correct: true},
            { text:"It depends on both the number of edges and vertices", correct: false},
        ]
    },
    {
        question: "When implementing a priority queue, which data structure is most commonly used to achieve efficient extraction of the minimum (or maximum) element?",
       answer: [
           { text:" Linked list", correct: false},
           { text:"Binary heap", correct: false},
           { text:" AVL tree", correct: true},
           { text:"Hash table", correct: false},
       ] 
    },
    {
        question: "In the context of dynamic programming, what is the principle behind memoization? ",
       answer: [
           { text:"Storing solutions to subproblems to avoid redundant computations", correct: true},
           { text:" Breaking down a problem into smaller overlapping subproblems", correct: false},
           { text:" Iteratively solving a problem by considering all possible solutions", correct: false},
           { text:"Using a greedy strategy to optimize the solution", correct:false},
       ] 
    },
    {
        question: "Which of the following is a valid application of the Floyd-Warshall algorithm?",
       answer: [
           { text:"Shortest path in a weighted directed acyclic graph (DAG)", correct: false},
           { text:" Maximum flow in a network flow graph", correct: false},
           { text:"All-pairs shortest paths in a weighted graph", correct: true},
           { text:" Topological sorting of a directed graph", correct: false},
       ] 
    },
    {
        question: "What is the purpose of Dijkstra's algorithm, and what is its time complexity?",
       answer: [
           { text:"Finding the shortest path in a weighted graph; O(E log V)", correct: true},
           { text:"Detecting cycles in a directed graph; O(V + E)", correct: false},
           { text:"Finding the strongly connected components in a directed graph; O(V + E)", correct: false},
           { text:"Constructing a minimum spanning tree; O(E log V)", correct: false},
       ] 
    },
    {
        question: "When implementing a hash table, which collision resolution technique ensures that every bucket in the table is equally likely to be chosen, regardless of the number of collisions?",
       answer: [
           { text:" Separate chaining", correct: false},
           { text:"Linear probing", correct: false},
           { text:"Quadratic probing", correct: false},
           { text:"Double hashing", correct: true},
       ] 
    },
    {
        question: "In which process, a local variable has the same name as one of the instance variables?",
       answer: [
           { text:"Serialization", correct: false},
           { text:"Variable Shadowing", correct: true},
           { text:"Abstraction", correct: false},
           { text:"Multi-threading", correct: false},
       ] 
    },
    {
        question: "What advantage does a linked list have over an array?",
       answer: [
           { text:"A linked list is not of a fixed size", correct: true},
           { text:"It's better", correct: false},
           { text:"It is easier to use", correct: false},
           { text:"	A linked list can give you the data faster", correct: false},
       ] 
    },
    {
        question: "Which package contains the Random class?",
       answer: [
           { text:"java.util package", correct: true},
           { text:"java.lang package", correct: false},
           { text:"java.awt package", correct: false},
           { text:"java.io package", correct: false},
       ] 
    },
    {
        question: "What do you mean by nameless objects?",
       answer: [
           { text:"An object created by using the new keyword.", correct: false},
           { text:"An object of a superclass created in the subclass.", correct: false},
           { text:"An object without having any name but having a reference.", correct: false},
           { text:"An object that has no reference.", correct: true},
       ] 
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const playAgainButton = document.getElementById("playagain-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    submitButton.style.display = "none"; // Hide the Submit button
    playAgainButton.style.display = "none"; // Hide the Play Again button
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Remove the extra period after currentQuestion.question

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Corrected template literal
    nextButton.style.display = "none"; // Hide the Next button
    submitButton.style.display = "block"; // Show the Submit button
    playAgainButton.style.display = "block"; // Show the Play Again button
}


function   handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz()
    }
});
submitButton.addEventListener("click", () => {
    // Handle the submission of the score here
    // You can use AJAX or fetch to send the score to your server
    // For now, let's just display a message
    alert(`Score submitted: ${score}`);
});

submitButton.addEventListener("click", () => {
    // Send the score to the PHP script
    fetch('submit_scoreint.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `score=${score}`,
    })
    .then(response => {
        if (response.ok) {
            // Score submitted successfully
            alert(`Score submitted: ${score}`);
        } else {
            // Handle error
            console.error('Error submitting score');
        }
    })
    .catch(error => {
        console.error('Network error:', error);
    });
});

playAgainButton.addEventListener("click", () => {
    // Restart the quiz
    startQuiz();
});

startQuiz();
