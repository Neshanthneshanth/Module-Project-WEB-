const questions = [
    {
        question: "Which one of the following is not an access modifier?",
        answer: [
            { text:"Protected", correct: false},
            { text:"Void", correct: true},
            { text:"Public", correct: false},
            { text:"Private", correct: false},
        ]
    },
    {
        question: "Which of the following is the advantage of the array data structure?",
       answer: [
           { text:"Elements of mixed data types can be stored.", correct: false},
           { text:"Easier to access the elements in an array", correct: false},
           { text:"Index of the first element starts from 1.", correct: true},
           { text:"Elements of an array cannot be sorted", correct: false},
       ] 
    },
    {
        question: "Which of the following is the disadvantage of the array?",
       answer: [
           { text:"Stack and Queue data structures can be implemented through an array.", correct: false},
           { text:"Index of the first element in an array can be negative", correct: true},
           { text:"Index of the first element starts from 1.", correct: false},
           { text:"Elements of an array cannot be sorted", correct: false},
       ] 
    },
    {
        question: " Which of the following is the disadvantage of the array?",
       answer: [
           { text:"Stack and Queue data structures can be implemented through an array.", correct: false},
           { text:"Index of the first element in an array can be negative", correct: false},
           { text:"Wastage of memory if the elements inserted in an array are lesser than the allocated size", correct: true},
           { text:"Elements can be accessed sequentially.", correct: false},
       ] 
    },
    {
        question: " If the elements '1', '2', '3' and '4' are added in a stack, so what would be the order for the removal?",
       answer: [
           { text:"1234", correct: false},
           { text:"2134", correct: false},
           { text:"4321", correct: true},
           { text:"None of the above", correct: false},
       ] 
    },
    {
        question: "Which one of the following node is considered the top of the stack if the stack is implemented using the linked list? ",
       answer: [
           { text:"First node", correct: true},
           { text:"Second node", correct: false},
           { text:"Last node", correct: false},
           { text:"None of the above", correct: false},
       ] 
    },
    {
        question: " A list of elements in which enqueue operation takes place from one end, and dequeue operation takes place from one end is__",
       answer: [
           { text:"Binary tree", correct: true},
           { text:"Stack", correct: false},
           { text:"Queue", correct: false},
           { text:"Linked list", correct: false},
       ] 
    },
    {
        question: "Which one of the following is not the type of the Queue?",
       answer: [
           { text:"Linear Queue", correct: false},
           { text:"Circular Queue", correct: false},
           { text:"Double ended Queue", correct: false},
           { text:"Single ended Queue", correct: true},
       ] 
    },
    {
        question: "Which one of the following is the overflow condition if linear queue is implemented using an array with a size MAX_SIZE?",
       answer: [
           { text:"rear = front", correct: false},
           { text:"rear = front+1", correct: false},
           { text:"rear=MAX_SIZE -1", correct: true},
           { text:"rear = MAX_SIZE", correct: false},
       ] 
    },
    {
        question: "What is the return type of the hashCode() method in the Object class?",
       answer: [
           { text:"Object", correct: false},
           { text:"int", correct: true},
           { text:"long", correct: false},
           { text:"void", correct: false},
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
    fetch('submit-score.php', {
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
