const quizForm = document.querySelector(".quize-from");
const submitAnswerBtn = document.querySelector("#submit-answer-btn")
const outputE1 = document.querySelector("#output");

const correctAnswers = ["90°","PR² + QR² = PQ²","right angle","4.33 cm","4.5cm","no","100°","10√2 cm"];

function calculatescore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score=score + 1;

        }
        index=index+1;
      
    }

    outputE1.innerText = "your score is"+ score;

}

submitAnswerBtn.addEventListener('click',calculatescore);