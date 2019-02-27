
// start screen shows up first in the dom, once user presses start button(on click) the gameScreen shows up
//game screen will have all the questions
// need to setup timeout for 30 sec
// users select true or false
//if statements to determine correct or incorrect answer
// three ways to end the game----
//end of the game function/out of time function/done button
//end of the game: scores are totalled, questions are totalled, 
// clear timeout????
// reset function will clear timeout and set it to 30 seconds again. a counter will keep track of right answers/wrong 
//answers, will need to display right answers as well.
// done button at the end of the screen will end the game. game end screen/function will run. display counter right/wring
//answers. unanswered questions
//after start button is hit run function to display the questions and the timer
$( document ).ready(function(){
    var timer=60;
    var correctAns=0;
    var incorrectAns=0;
    var unanswered=0;
    var question=[{
        question:$("#quest1"),
        answer: val="option2",
    }];
    var running = false;
    console.log(question[0].question);

    
 $("#startScreen").show();
 $("#gameScreen").hide();
 $("#finalScreen").hide();
 $("#doneBtn").hide();
 $("#resetBtn").hide();

$("#startBtn").on("click",function(){
 $("#gameScreen").show();
 $("#startScreen").hide();
 $("#resetBtn").hide();
 newGame();
});

$("#doneBtn").on("click",function(){
    $("#finalScreen").show();
    $("#gameScreen").hide();
    $("#doneBtn").hide();
    $("#resetBtn").show();
});
$("#resetBtn").on("click",function(){
    $("#startScreen").show();
    $("#gameScreen").hide();
    $("#finalScreen").hide();
    $("#doneBtn").hide();
    $("#resetBtn").hide();
   });
function reset(){
    correctAns=0;
    incorrectAns=0;
    unanswered=0;

   

}
function newGame(){
    correctAns = 0;
    incorrectAns = 0;
    unanswered = 0;
    $("#gameScreen").show();
    runTimer();
    $("#doneBtn").show();

}
function answers(){
    if (question.answer === $("input[name='customRadioInline1']:checked").val()){
        alert("yay");
        correctAns++;
    }
    else{
        incorrectAns++;
    } 
};
function runTimer(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}
//timer countdown
function decrement() {
	$("#timer").html("<h3>Time remaining: " + timer + "</h3>");
	timer --;

	//stop timer if reach 0
	if (timer === 0) {
		unanswered++;
		stop();
	}	
}

//timer stop
function stop() {
	running = false;
	clearInterval(intervalId);
}

});
