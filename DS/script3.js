const questions = [
    {
        question: "What is/are the disadvantages of implementing tree using normal arrays?",
       answer: [
           { text:"difficulty in knowing children nodes of a node", correct: false},
           { text:"have to know the maximum number of nodes possible before creation of trees", correct: false},
           { text:"difficult in finding the parent of a node", correct: true},
           { text:"difficult to implement", correct: false},
           { text:"no need of any changes continue with 2w and 2w+1, if node is at i", correct: false},
       ] 
    },
    {
        question: "Which of the following is the name of the node having child nodes?",
       answer: [
           { text:"Brother", correct: false},
           { text:"Sister", correct: true},
           { text:"Mother", correct: false},
           { text:"parent", correct: false},
       ] 
    },
    {
        question: " What traversal over trie gives the lexicographical sorting of the set of the strings?",
       answer: [
           { text:"postorder", correct: false},
           { text:"preorders", correct: false},
           { text:"inorder", correct: false},
           { text:"level order", correct: true},
       ] 
    },
    {
        question: " Which of the following is true about the trie?",
       answer: [
           { text:"root is letter a", correct: false},
           { text:"path from root to the leat yields the string", correct: true},
           { text:"children of nodes are randomly ordered", correct: false},
           { text:"each node stores the associated keys", correct: false},
       ] 
    },
    {
        question: " What is the advantage of the hash table over a linked list?",
       answer: [
           { text:"faster access of data", correct: false},
           { text:"easy to implement", correct: false},
           { text:"very efficient for less number of entries", correct: true},
           { text:"exhibit good locality of reference", correct: false},
       ] 
    },
    {
        question: " Which of the following trait of a hash function is most desirable?",
       answer: [
           { text:"it should cause less collisions", correct: false},
           { text:" it should cause more collisions", correct: false},
           { text:"it should occupy less space", correct: false},
           { text:"it should be easy to implement", correct: true},
       ] 
    },
    {
        question: "What is the advantage of using linked list over the doubly linked list for chaining?",
       answer: [
           { text:" it takes less memory", correct: false},
           { text:"it causes more collisions", correct: false},
           { text:"it makes the process of insertion and deletion faster", correct: false},
           { text:"it causes less collisions", correct: true},
       ] 
    },
    {
        question: "Which of the following technique is used for handling collisions in a hash table?",
       answer: [
           { text:"Open addressing", correct: false},
           { text:"Hashing", correct: false},
           { text:"Searching", correct: true},
           { text:"Hash function", correct: false},
       ] 
    },
    {
        question: "Which of the following is an advantage of open addressing over separate chaining?",
       answer: [
           { text:"it is simpler to implement", correct: false},
           { text:"table never gets full", correct: false},
           { text:"it is less sensitive to hash function", correct: true},
           { text:"it has better cache performance", correct: false},
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
    fetch('submit-score3.php', {
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
