const container =document.querySelector('.container');
const questionBox =document.querySelector('.question');
const choiceBox =document.querySelector('.choice');
const nextpage =document.querySelector('.nextpage');

// Question choice //
const quiz =[
    {
        question:"Q. What is HTML?",
        choice:["HTML describes the structure of a webpage","HTML is the standard markup language mainly used to create web pages","HTML consists of a set of elements that helps the browser how to view the conten","All of the mentioned"],
        answer:"All of the mentioned"
    },
    {
        question:"Q.Who is the father of HTML?",
        choice:["Rasmus Lerdorf","Tim Berners-Lee","Brendan Eich","Sergey Brin"],
        answer:"Tim Berners-Lee"
    },
    {
        question:"Q. HTML stands for __________?",
        choice:["HyperText Markup Language","HyperText Machine Language","HyperText Marking Language","HighText Marking Language"],
        answer:"HyperText Markup Language"
    },
    {
        question:"Q.What is the correct syntax of doctype in HTML5?",
        choice:["</doctype html>","<doctype html>","<doctype html!>","<!doctype html>"],
        answer:"<!doctype html>"
    },
    {
        question:"Q.Which of the following is used to read an HTML page and render it?",
        choice:["Web server","Web network","Web browser","Web matrix"],
        answer:"Web browser"
    },
    {
        question:"Q.Which of the following tag is used for inserting the largest heading in HTML?",
        choice:["head","<h1>","<h6>","heading"],
        answer:"<h1>"
    },
    {
        question:"Q.In which part of the HTML metadata is contained?",
        choice:["head tag","title tag","html tag","body tag"],
        answer:"head tag"
    },
    {
        question:"Q.Which element is used to get highlighted text in HTML5?",
        choice:["<u>","<mark>","<highlight>","<b>"],
        answer:"<mark>"
    },
    {
        question:"Q.Among the following, which is the HTML paragraph tag?",
        choice:["<p>","<pre>","<hr>"," <a>"],
        answer:"<p>"
    },
    {
        question:"Q.In HTML, which attribute is used to create a link that opens in a new window tab?",
        choice:[" src=_blank","alt=_blank","alt=_blank","target=_blank"],
        answer:"target=_blank"
    },
    {
        question:"Q.Which HTML element is used for short quote?",
        choice:["<em>","<abbr>","<q>","<blockquote>"],
        answer:"<q>"
    }



];

let currentquestionindex = 0;

// show Question //
const showQuestions= ()=>{
    const questionDetails = quiz[currentquestionindex];
    questionBox.textContent = questionDetails.question;



    choiceBox.textContent = "";
    for(let i=0; i<questionDetails.choice.length; i++){
        const currentChoice = questionDetails.choice[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice')
        choiceBox.appendChild(choiceDiv);
    }

}
showquestions();
nextpage.addEventListener('click',()=>{
    if(currentQuestionIndex < quiz.length){
        currentQuestionIndex++;
        showquestions();
    }
});



