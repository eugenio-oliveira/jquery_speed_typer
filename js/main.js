var intialTime = $("#type-timer").text();

//Ao carregar a página, carrega-se todas as funções necessárias para o aplicativo
$(document).ready(function(){
  updatePhraseSize();
  startCounters();
  startTimer();
});

//Função para atualizar o tamanho da frase
function updatePhraseSize(){
  var phrase = $('.phrase').text(); //Pega o texto que deve ser digitado pelo usuário
  var wordSize = phrase.split(' ').length; //Separa o texto por palavras através dos espaços
  var phraseSize =  $('#phraseSize'); //Guarda o tamanho da frase
  phraseSize.text(wordSize); //Exibe o tamanho da frase
}

var field = $('.type-field');

//Função para iniciar os contadores
function startCounters(){
    field.on('input', function(){
    var content = field.val(); //Pega o conteúdo escrito no campo
    var wordQty = content.split(/\S+/).length - 1; //Verifica se as palavras estão separadas por espaço
    $('#word-counter').text(wordQty); //Insere a quantidade de palavras escritas
    var characterQty = content.length; //Pega o tamanho de letras escrito pelo usuário
    $('#character-counter').text(characterQty); //Exibe a quantidade de letras escritas pelo usuário
  });

}

//Função para inciar o timer
function startTimer(){
    var remainingTime = $("#type-timer").text(); //Pega o tempo descrito no span
    field.one("focus", function(){
   var chronometerID = setInterval(function(){
      remainingTime--;
      $("#type-timer").text(remainingTime);
      if(remainingTime < 1){
        field.attr("disabled", true);
        clearInterval(chronometerID);
        //field.css("background-color", "lightgray");
        field.toggleClass("field-disabled");

      }
    }, 1000);
  });
}

//Função para reiniciar o jogo
function restartGame(){
  field.attr("disabled", false); //seta  atributo "disabled" para false
  field.val(""); //zera o conteúdo do campo de texto
  $('#word-counter').text("0"); //Reinicia o contador de palavras
  $('#character-counter').text("0"); // Reinicia o contador de letras
  $("#type-timer").text(intialTime); //Zera o tempo do contador
  startTimer(); //(Re)Inicia o Contador
  field.toggleClass("field-disabled");
}

//Ao clicar no botão, o jogo é reiniciado
$("#button-reset").click(function(){
  restartGame();
});