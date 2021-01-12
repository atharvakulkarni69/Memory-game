// alert("hello");

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = true;
var buttonColors = [ "red", "blue", "green", "yellow"];
function nextSequence(){
  userClickedPattern = [];
    level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("."+randomChosenColour).fadeOut(100).fadeIn(100);
  // playSound(randomChosenColour);
  animatePress(randomChosenColour);
}

// $("."+randomChosenColour).on('click', function () {

// });

$(".btn").on("click",function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  playSound(userChosenColour);
    animatePress(userChosenColour);
});
// nextSequence();
function playSound(name){
  var obj = new Audio("sounds/"+name+".mp3");
  obj.play();
}
function animatePress(color){
  $('#'+color).addClass("pressed");
  setTimeout(function(){
    $('#'+color).removeClass("pressed");
  },100);
}
$(document).on("keypress",function(){
  if(started === true){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = false;
  }
});



function checkAnswer(curLevel){
  if(userClickedPattern[curLevel] === gamePattern[curLevel]) {
    // console.log("Success");
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function(){
        nextSequence();
      },1000);
    }

  }
  else {
    var ad = new Audio("sounds/wrong.mp3");
    ad.play();
      $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();

  }
}
function startOver(){
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  started = true;
}
$(document).on("keypress",function(){
  var ad = new Audio("sounds/")
})
