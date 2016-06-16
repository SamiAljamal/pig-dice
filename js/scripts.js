//business


function Player(score,rollValue,scoreTotal) {
  this.score = score;
  this.rollValue = rollValue;
  this.scoreTotal = scoreTotal;
};

// function Player2(score,rollValue){
//   this.score = score;
//   this.rollValue = rollValue;
// };

function getRandomRoll(){
  return Math.ceil(Math.random()* 6);
};

Player.prototype.roll= function(roll) {
  //  this.rollValue += roll;
   return this.rollValue += roll;
};

Player.prototype.finalScore = function(rollValue) {
  // this.finalScore += rollValue;
  return this.rollValue = rollValue;
};



var player1= new Player(0,0,0);
var player2 = new Player(0,0,0);

$(document).ready(function(){
  var playerTurn = 1;
  $("#hold").click(function(){
    console.log("hold");
    if(playerTurn === 1){
      player1.scoreTotal += player1.rollValue;
      playerTurn = 0;
      $("body").css("background-color", "blue")
    }
    else {
      player2.scoreTotal += player2.rollValue;
      playerTurn = 1;
      $("body").css("background-color", "red")
    }
  });
  $("form#roll").submit(function(event){
    var turnRoll=getRandomRoll();
    var turnScore;
    var theScore;

    //playerTurn = 1;
    if(playerTurn === 1){
      var turnScore = player1.roll(turnRoll);
      player1.rollValue = turnScore;
      var theScore = player1.finalScore(turnScore);
      console.log(theScore);
      console.log("theScore is a " + typeof theScore);
      event.preventDefault();
      if(turnRoll === 1){
        playerTurn = 0;
        turnScore = 0;
        theScore = 0;
        player1.rollValue = turnScore;
        player1.scoreTotal += player1.rollValue;
        theScore = player1.scoreTotal;
        $("h2#show1").text(turnRoll);
        $("h2#p1total").text(theScore);
        $("p#p1finalscore").text(theScore);
      } else {
        $("h2#show1").text(turnRoll);
        $("h2#p1total").text(turnScore);
        $("p#p1finalscore").text(theScore)
      }
    } else {
      console.log(turnRoll);
      turnScore = player2.roll(turnRoll);
      player2.rollValue = turnScore;
      theScore = player2.finalScore(turnScore);
      event.preventDefault();
      if (turnRoll === 1){
        playerTurn = 1;
        turnScore = 0;
        player2.rollValue = turnScore;
        player2.scoreTotal += player2.rollValue;
        theScore = player2.scoreTotal;
        $("h2#show1").text(turnRoll);
        $("h2#p2total").text(turnScore);
        $("p#p2finalscore").text(theScore);
      } else {
        $("h2#show1").text(turnRoll);
        $("h2#p2total").text(turnScore);
        $("p#p2finalscore").text(theScore);
      }
    }
  });
});





  // debugger;

  //


  // });
  //
  // $("#hold").click(function(){
  // // alert("i'm working!");
  // return playerTurn = 0;
  // });
  //
  // }else if(playerTurn = 0){
  //   debugger;
  //   $("form#roll").submit(function(event){
  //     var turn= getRandomRoll();
  //     var turnRoll= turn;
  //     var turnScore = player2.roll(turn);
  //     $("h2#show1").text(turnRoll);
  //     $("h2#p2total").text(turnScore);
  //     event.preventDefault();
  //
  //     $("#hold").click(function(){
  //       playerTurn= 1;
  //     });
