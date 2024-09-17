
 
var highScoreList= document.querySelector("#highscores");
var clearHighScore= document.querySelector("#clear");
   
function  HighScore() {

        // we need to repeat var liNotes here to identify it again.
         var liNotes= JSON.parse(localStorage.getItem("Notes")) || [];
        

        // Array name.splice() method can limit the liNotes to the last 3 entries.
         var limitedNotes= liNotes.splice(-3);
        
        // create list item nested to ordered list for each textarea notes and score.
         limitedNotes.forEach(item => {
            var listItem= document.createElement("li");
            listItem.textContent= item.initials+ "- your score is: " +item.score;
            highScoreList.appendChild(listItem);   
         });
          
          console.log(highScoreList);
        // console.log("HighScore func is working");
    }

    HighScore();



// clear high score================
 
    clearHighScore.addEventListener("click",Clear);
   
    function Clear() {

         localStorage.removeItem("Notes");
         highScoreList.textContent= ""; 
    }









 






