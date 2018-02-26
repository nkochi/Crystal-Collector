$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  
  $('#random').text(Random);
  
  var num1= Math.floor(Math.random()*11+1);
  var num2= Math.floor(Math.random()*11+1);
  var num3= Math.floor(Math.random()*11+1);
  var num4= Math.floor(Math.random()*11+1);
 
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
 
$('#Wins').text(wins);
$('#Losses').text(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
    
      $('#random').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#Total').text(playerTotal);
      } 

function winner(){
alert("You won!");
  wins++; 
  $('#Wins').text(wins);
  reset();
}

function loser(){
alert ("You lose!");
  losses++;
  $('#Losses').text(losses);
  reset()
}

  $('#White').on ('click', function(){
    playerTotal = playerTotal + num1;
    
    $('#Total').text(playerTotal); 
         
        if (playerTotal == Random){
            winner();
        }
        else if ( playerTotal > Random){
          loser();
        }   
  }); 

  $('#Blue').on ('click', function(){
    playerTotall = playerTotal + num2;

    $('#Total').text(playerTotal); 
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
          loser();
        } 
  });  

  $('#Red').on ('click', function(){
    playerTotal = playerTotal + num3;
   
    $('#Total').text(playerTotal);
          if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
          loser();
        } 
  });

  $('#Green').on ('click', function(){
    playerTotal = playerTotal + num4;
    
    $('#Total').text(playerTotal); 
      
          if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
          loser();
        }
  });   
}); 