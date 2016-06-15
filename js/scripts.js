var dice = [1,2,3,4,5,6];

function getRandomRoll(dice){
  return Math.floor((Math.random() * dice.length)+1);
}

$(document).ready(function(){
  $("h2").text(getRandomRoll(dice));
});
