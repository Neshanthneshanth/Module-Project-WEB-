const questions = [
    {
        question: "In the linked list implementation of queue, where will the new element be inserted?",
        answer: [
            { text:"At the middle position of the linked list", correct: false},
            { text:"At the head position of the linked list", correct: false},
            { text:"At the tail position of the linked list", correct: false},
            { text:"None of the above", correct: true},
        ]
    },
    {
        question: "Which of the following statement is not true regarding the priority queue?",
       answer: [
           { text:"Processes with different priority can be easily handled", correct: false},
           { text:"Easy to implement", correct: false},
           { text:"Deletion is easier", correct: true},
           { text:"None of the above", correct: false},
       ] 
    },
    {
        question: "What is not the use of “this” keyword in c programming?",
       answer: [
           { text:"Referring to the instance variable when a local variable has the same name", correct: false},
           { text:"Passing itself to the method of the same class", correct: true},
           { text:"Passing itself to another method", correct: false},
           { text:"Calling another constructor in constructor chaining", correct: false},
       ] 
    },
    {
        question: "Which of the following options is not true about the Binary Search tree?",
       answer: [
           { text:"The value of the left child should be less than the root node", correct: false},
           { text:"The value of the right child should be greater than the root node.", correct: false},
           { text:"The left and right sub trees should also be a binary search tree", correct: false},
           { text:"None of the above", correct: true},
       ] 
    },
    {
        question: "Type for objects whose behaviour is defined by set of value and set of operation",
       answer: [
           { text:"Abstract Data Type", correct: true},
           { text:"Primitive Data Type", correct: false},
           { text:"Homogeneous Data Type", correct: false},
           { text:"Dynamic Data Type", correct: false},
       ] 
    },
    {
        question: "A list of data item is specified under one name using a single subscript",
       answer: [
           { text:" 2-D Array", correct: false},
           { text:"1-D Array", correct: true},
           { text:"Multidimensional Array", correct: false},
           { text:"Matrix", correct: false},
       ] 
    },
    {
        question: "Which arrays provide you with a more raw access to the objects",
       answer: [
           { text:"pointer based array", correct: false},
           { text:"vector based array", correct: false},
           { text:"Multidimensional Array", correct: false},
           { text:"2-D array", correct: true},
       ] 
    },
    {
        question: "To represent hierarchical relationship between elements, which data structure is suitable?",
       answer: [
           { text:" dequeue", correct: false},
           { text:"priority queue", correct: false},
           { text:"tree", correct: true},
           { text:" stack", correct: false},
       ] 
    },
    {
        question: "Which of the following is a superclass of every class in Java?",
       answer: [
           { text:"ArrayList", correct: false},
           { text:"Abstract class", correct: false},
           { text:"Object class", correct: true},
           { text:"String", correct: false},
       ] 
    },
    {
        question: "Which of the following is not a primitive data structure?",
       answer: [
           { text:" boolean", correct: false},
           { text:" integer", correct: false},
           { text:"array", correct: true},
           { text:"character", correct: false},
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
    fetch('submit-score1.php', {
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
