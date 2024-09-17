
var Title = document.querySelector("#question-title");
var secondsLeft = 70;

// start button and QuestionOne function=================
var start= document.querySelector("#start");
start.addEventListener("click",QuestionOne);

function QuestionOne(event) {
    event.preventDefault();

    document.body.appendChild(firstDiv);
 
   firstQButton1.addEventListener("click",QuestionTwo);
   firstQButton2.addEventListener("click",QuestionTwo);
   firstQButton3.addEventListener("click",QuestionTwo);
   firstQButton4.addEventListener("click",QuestionTwo);

//    console.log(" func QuestionOne is working");
}

//first question section=================================
var firstDiv = document.createElement("div");
firstDiv.setAttribute("id","fDiv");
Title.appendChild(firstDiv);
console.log(firstDiv);

// first question =====
var firstQuestion = document.createElement("h4");
firstQuestion.textContent=" 1-Which of the following methods is used to access HTML elements using Javascript?";
firstQuestion.setAttribute("id","fQuestion");
firstDiv.appendChild(firstQuestion);

// buttons section=====
var firstQButton1 = document.createElement("button");
firstQButton1.textContent= "a. get Element By Id()";
firstQButton1.setAttribute("class","wrongAnswer");
firstDiv.appendChild(firstQButton1);

var firstQButton2 = document.createElement("button");
firstQButton2.textContent= "b. get Element By ClassName()";
firstQButton2.setAttribute("class","wrongAnswer");
firstDiv.appendChild(firstQButton2);

var firstQButton3 = document.createElement("button");
firstQButton3.textContent= "c. Both A and B";
firstQButton3.setAttribute("class","Answer");
firstDiv.appendChild(firstQButton3);

var firstQButton4 = document.createElement("button");
firstQButton4.textContent= "d. None of the above";
firstQButton4.setAttribute("class","wrongAnswer");
firstDiv.appendChild(firstQButton4);


// second question section===========================
var secondDiv = document.createElement("div");
secondDiv.setAttribute("id","secDiv");
Title.appendChild(secondDiv);
console.log(secondDiv);

// second question =====
var secondQuestion = document.createElement("h4");
secondQuestion.textContent=" 2. Which of the following is correct about JavaScript?";
secondQuestion.setAttribute("id","secQuestion");
secondDiv.appendChild(secondQuestion);

// buttons section =====
var secondQButton1 = document.createElement("button");
secondQButton1.textContent= " a.JavaScript is an Object-Based language";
secondQButton1.setAttribute("class","Answer");
secondDiv.appendChild(secondQButton1);

var secondQButton2 = document.createElement("button");
secondQButton2.textContent= "b.JavaScript is an Object-Oriented language";
secondQButton2.setAttribute("class","wrongAnswer");
secondDiv.appendChild(secondQButton2);

var secondQButton3 = document.createElement("button");
secondQButton3.textContent= "c.JavaScript is Assembly-language";
secondQButton3.setAttribute("class","wrongAnswer");
secondDiv.appendChild(secondQButton3);

var secondQButton4 = document.createElement("button");
secondQButton4.textContent= "d.JavaScript is a High-level language";
secondQButton4.setAttribute("class","wrongAnswer");
secondDiv.appendChild(secondQButton4);

// QuestionTwo function =====
function QuestionTwo(event) {
    event.preventDefault();

    document.body.appendChild(secondDiv);

    firstDiv.style.display= "none";
    secondDiv.style.display= "block";
    
    secondQButton1.addEventListener("click",QuestionThree);
    secondQButton2.addEventListener("click",QuestionThree);
    secondQButton3.addEventListener("click",QuestionThree);
    secondQButton4.addEventListener("click",QuestionThree);

    // console.log(" func QuestionTwo is working");
}


// third question section===========================
var thirdDiv = document.createElement("div");
thirdDiv.setAttribute("id","thrDiv");
Title.appendChild(thirdDiv);
console.log(thirdDiv);

// third question =====
var thirdQuestion = document.createElement("h4");
thirdQuestion.textContent=" 3. In the line of code given below, the prototype represents the _____________. functionx(){}";

thirdQuestion.setAttribute("id","thrQuestion");
thirdDiv.appendChild(thirdQuestion);

// buttons section =====
var thirdQButton1 = document.createElement("button");
thirdQButton1.textContent= " a. A custom constructor";
thirdQButton1.setAttribute("class","wrongAnswer");
thirdDiv.appendChild(thirdQButton1);

var thirdQButton2 = document.createElement("button");
thirdQButton2.textContent= "b. Function x";
thirdQButton2.setAttribute("class","wrongAnswer");
thirdDiv.appendChild(thirdQButton2);

var thirdQButton3 = document.createElement("button");
thirdQButton3.textContent= "c. Not valid";
thirdQButton3.setAttribute("class","wrongAnswer");
thirdDiv.appendChild(thirdQButton3);

var thirdQButton4 = document.createElement("button");
thirdQButton4.textContent= "d. Prototype of a function";
thirdQButton4.setAttribute("class","Answer");
thirdDiv.appendChild(thirdQButton4);

// QuestionThree function =====
function QuestionThree(event) {
    event.preventDefault();

    document.body.appendChild(thirdDiv);

    secondDiv.style.display= "none";
    thirdDiv.style.display= "block";
    
    thirdQButton1.addEventListener("click",QuestionFour);
    thirdQButton2.addEventListener("click",QuestionFour);
    thirdQButton3.addEventListener("click",QuestionFour);
    thirdQButton4.addEventListener("click",QuestionFour);

    // console.log(" func QuestionThree is working");
}


// fourth question section===========================
var fourthDiv = document.createElement("div");
fourthDiv.setAttribute("id","forDiv");
Title.appendChild(fourthDiv);
console.log(fourthDiv);

// forth question =====
var fourthQuestion = document.createElement("h4");
fourthQuestion.textContent=" 4. How do we put Javascript inside HTML?";

fourthQuestion.setAttribute("id","forQuestion");
fourthDiv.appendChild(fourthQuestion);

// buttons section =====
var fourthQButton1 = document.createElement("button");
fourthQButton1.textContent= " a. <js>";
fourthQButton1.setAttribute("class","wrongAnswer");
fourthDiv.appendChild(fourthQButton1);

var fourthQButton2 = document.createElement("button");
fourthQButton2.textContent= " b. <javascript>";
fourthQButton2.setAttribute("class","wrongAnswer");
fourthDiv.appendChild(fourthQButton2);

var fourthQButton3 = document.createElement("button");
fourthQButton3.textContent= " c. <script>";
fourthQButton3.setAttribute("class","Answer");
fourthDiv.appendChild(fourthQButton3);

var fourthQButton4 = document.createElement("button");
fourthQButton4.textContent= "d. <scripting>";
fourthQButton4.setAttribute("class","wrongAnswer");
fourthDiv.appendChild(fourthQButton4);

// QuestionFour function =====
function QuestionFour(event) {
    event.preventDefault();

    document.body.appendChild(fourthDiv);

    thirdDiv.style.display= "none";
    fourthDiv.style.display= "block";
    
    fourthQButton1.addEventListener("click",QuestionFive);
    fourthQButton2.addEventListener("click",QuestionFive);
    fourthQButton3.addEventListener("click",QuestionFive);
    fourthQButton4.addEventListener("click",QuestionFive);

    // console.log(" func QuestionFour is working");
}

// fifth question section===========================
var fifthDiv = document.createElement("div");
fifthDiv.setAttribute("id","fifDiv");
Title.appendChild(fifthDiv);
console.log(fifthDiv);

// fifth question =====
var fifthQuestion = document.createElement("h4");
fifthQuestion.textContent="  5.  Arrays in JavaScript are defined by which of the following statements?";

fifthQuestion.setAttribute("id","fifQuestion");
fifthDiv.appendChild(fifthQuestion);

// buttons section =====
var fifthQButton1 = document.createElement("button");
fifthQButton1.textContent= " a. It is an ordered list of values";
fifthQButton1.setAttribute("class","Answer");
fifthDiv.appendChild(fifthQButton1);

var fifthQButton2 = document.createElement("button");
fifthQButton2.textContent= " b. It is an ordered list of objects";
fifthQButton2.setAttribute("class","wrongAnswer");
fifthDiv.appendChild(fifthQButton2);

var fifthQButton3 = document.createElement("button");
fifthQButton3.textContent= " c. It is an ordered list of string";
fifthQButton3.setAttribute("class","wrongAnswer");
fifthDiv.appendChild(fifthQButton3);

var fifthQButton4 = document.createElement("button");
fifthQButton4.textContent= "d. It is an ordered list of functions";
fifthQButton4.setAttribute("class","wrongAnswer");
fifthDiv.appendChild(fifthQButton4);

// QuestionFive function =====
function QuestionFive(event) {
    event.preventDefault();
   
    document.body.appendChild(fifthDiv);

    fourthDiv.style.display= "none";
    fifthDiv.style.display= "block";

    function checkANforQ5(event) {

        // we need to call Answer function here again. because the penalize subtraction in time it doesn't show the time penalizing  after finishing QuestionFive function.and the reason is using clearInterval(startTimer) in submit function. 
        Answer(event);

        // here the Answer function is working twice, once after pressing the QuestionFive buttons for wrongAnswer and then when we press submit button. to prevent this repetition we need to remove one of the Answer addEventListener by removeEventListener.
         document.removeEventListener("click",Answer);
       
        submit();

    }

    fifthQButton1.addEventListener("click",checkANforQ5);
    fifthQButton2.addEventListener("click",checkANforQ5);
    fifthQButton3.addEventListener("click",checkANforQ5);
    fifthQButton4.addEventListener("click",checkANforQ5);

    console.log(" func QuestionFive is working");
}
//  setTime();

// submit button section===========================

var submitDiv= document.querySelector("#end-screen");

var submitBtn= document.querySelector("#submit");
console.log(submitDiv);

function submit() {

    clearInterval(startTimer);
      time.textContent=secondsLeft; 

    document.body.appendChild(submitDiv);

    var FScore= document.querySelector("#final-score");
    FScore.textContent=secondsLeft
    

    fifthDiv.style.display= "none";
    submitDiv.style.display= "block";
    
    submitBtn.addEventListener("click",FinalScore);
  
    // console.log("submit function is working");
}

// FinalScore function===========================

function  FinalScore(event) {

    event.preventDefault();
   
    var Score= secondsLeft;
     var initialText= document.querySelector("#initials").value;
   
     localStorage.setItem("initials",initialText);
     localStorage.setItem("finalScore",Score);


      // JSON.parse(LocalStorage.getItem("Notes")) first, get the string from local storage and then convert string into an object or an array.
    // || [] can initialize in an empty array if it is not exist.
    var liNotes= JSON.parse(localStorage.getItem("Notes")) || [];

    // push() method is an array method that adding a new object to the end of liNotes array.
    liNotes.push({initials:initialText, score:Score});

    // save the update array to localStorage.
    localStorage.setItem("Notes", JSON.stringify(liNotes));

    // window.location can replace the new html page with the last one.
    window.location= "./highscores.html"

    // console.log("FinalScore function is working");
}


// voices==============================
var voice= document.createElement("div");
voice.setAttribute("id","voiceDiv");
Title.appendChild(voice);
console.log(voice);

var correctVoice= document.createElement("audio");
correctVoice.setAttribute("id","correct");
correctVoice.setAttribute("src","./assets/sfx/correct.wav");
voice.appendChild(correctVoice);

var incorrectVoice= document.createElement("audio");
incorrectVoice.setAttribute("id","incorrect");
incorrectVoice.setAttribute("src","./assets/sfx/incorrect.wav");
voice.appendChild(incorrectVoice);

// ==========================================


//Answer function====================================

var click= document.addEventListener("click",Answer);

function Answer(event) {
    // sometimes event preventDefault can prevent to execute some other codes. here it prevent to execute View HighScores in main html page.
    // event.preventDefault();
   
    var correctAN= document.querySelectorAll(".Answer");
    var incorrectAN= document.querySelectorAll(".wrongAnswer");

    // All answers methods explanation===============
       
    // Array.from() method can make an array for all wrongAnswer/Answer buttons to check them.
    
    // includes(event.target) can check if the clicked button (or event.target) is one of the elements in ArrayIncorrectAN/ArrayCorrectAN or not and return true/false.

    // (event.target)property, return an HTML element(here are buttons) that makes an event.

    // incorrect answer methods =====
    var ArrayIncorrectAN= Array.from(incorrectAN);
    // console.log(ArrayIncorrectAN); 
    var checkIncorrectAN= ArrayIncorrectAN.includes(event.target);
    // console.log(checkIncorrectAN);


    // correct answer methods =====
    var ArrayCorrectAN= Array.from(correctAN);
    // console.log(ArrayCorrectAN);
    var checkCorrectAN= ArrayCorrectAN.includes(event.target);
    // console.log(checkCorrectAN);

    // Sounds============================================
    var correctSound= document.querySelector("#correct");
    var incorrectSound= document.querySelector("#incorrect");
   
    if ( checkCorrectAN) {
      console.log("correct");
    //   console.log(event.target);
      correctSound.play();
    
        
    }else if (checkIncorrectAN){
    console.log("incorrect");
        incorrectSound.play(); 
        secondsLeft-= 10;
        
       
    }else{
        console.log("noooo!");
    }

    // console.log("function Answer is working");
}






 