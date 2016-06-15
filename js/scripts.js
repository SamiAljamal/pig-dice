//business
var playerTurn;

function Player(score,rollValue) {
  this.score = score;
  this.rollValue = rollValue;
};

// function Player2(score,rollValue){
//   this.score = score;
//   this.rollValue = rollValue;
// };

function getRandomRoll(){
  return Math.floor((Math.random() * 6)+ 1);
};
Player.prototype.roll= function(roll){
   this.rollValue += roll;
   return this.rollValue;
};


var player1= new Player(0,0);
var player2 = new Player(0,0);

$(document).ready(function(){
  playerTurn = 1;
  $("form#roll").submit(function(event){
    $("#hold").click(function(){
      console.log("hold");
      if(playerTurn === 1){
      return playerTurn = 0;
    }
      else {
        return playerTurn = 1;
      }
    });
    //playerTurn = 1;
    if(playerTurn === 1){
      var turn = getRandomRoll();
      var turnRoll = turn;
      var turnScore = player1.roll(turn);
      $("h2#show1").text(turnRoll);
      $("h2#p1total").text(turnScore);
      event.preventDefault();

    } else {
      playerTurn = 0;
      var turn = getRandomRoll();
      var turnRoll = turn;
      var turnScore = player1.roll(turn);
      $("h2#show1").text(turnRoll);
      $("h2#p2total").text(turnScore);
      event.preventDefault();

    console.log("player2");
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
