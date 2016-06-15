


function Player(score, rollValue) {
  this.score = score;
  this.rollValue = rollValue;
}

function getRandomRoll(){
  return Math.floor((Math.random() * 6)+ 1);
};
Player.prototype.roll = function(turn){
  this.rollValue += turn;
  return this.rollValue;
};

var player1= new Player(0,0);
var player2 = new Player(0,0);
$(document).ready(function(){
  $("form#roll").submit(function(event){
    var turnRoll= getRandomRoll();
    var turnScore = player1.roll(turnRoll);
    // alert(turnRoll);
    $("h2#show1").text(turnRoll);
    $("h2#show2").text(turnScore);
    event.preventDefault();

  });

});
