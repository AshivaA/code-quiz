//  start timer section

var time = document.querySelector ("#time");
var START = document.querySelector("#start");
var SecondStartScreen = document.querySelector(".start");
 

START.addEventListener("click",firstQuestion);
SecondStartScreen.addEventListener("click",setTime);
// we should identify startTimer as a global scop. 
var startTimer;

function setTime( event) {
    event.preventDefault();

    // we should set secondLeft= 70; in questions.js as a global variable to show the score in HighScore page in FinalScore function and reduce time by 10 second as a penalize for each wrongAnswer in function Answer.

    // var secondsLeft = 70;
     startTimer = setInterval(function () {

        time.textContent = secondsLeft;
        secondsLeft--;
       
        if (secondsLeft<= 0) {

            clearInterval(startTimer);
          
            firstDiv.style.display= "none";
            secondDiv.style.display= "none";
            thirdDiv.style.display= "none";
            fourthDiv.style.display= "none";
            fifthDiv.style.display= "none";
            document.body.appendChild(submitDiv);
            submitDiv.style.display= "block"; 

            var FScore= document.querySelector("#final-score");
            FScore.textContent=secondsLeft;
            submit();
        }
          
        
//  console.log(startTimer);
    },1000);

    
}















  













