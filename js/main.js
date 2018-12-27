var intialTime = $("#type-timer").text();

$(document).ready(function(){
  updatePhraseSize();
  startCounters();
  startTimer();
});

function updatePhraseSize(){
  var phrase = $('.phrase').text();
  var wordSize = phrase.split(' ').length;
  var phraseSize =  $('#phraseSize');
  phraseSize.text(wordSize);
}

var field = $('.type-field');

function startCounters(){
    field.on('input', function(){
    var content = field.val();
    var wordQty = content.split(/\S+/).length - 1;
    $('#word-counter').text(wordQty);
    var characterQty = content.length;
    $('#character-counter').text(characterQty);
  });

}



function startTimer(){
    var remainingTime = $("#type-timer").text();
    field.one("focus", function(){
   var chronometerID = setInterval(function(){
      remainingTime--;
      $("#type-timer").text(remainingTime);
      if(remainingTime < 1){
        field.attr("disabled", true);
        clearInterval(chronometerID);
      }
    }, 1000);
  });
}

function restartGame(){
  field.attr("disabled", false);
  field.val("");
  $('#word-counter').text("0");
  $('#character-counter').text("0");
  $("#type-timer").text(intialTime);
  startTimer();
}


$("#button-reset").click(function(){
  restartGame();
});