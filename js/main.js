var phrase = $('.phrase').text();
var wordSize = phrase.split(' ').length;
var phraseSize =  $('#phraseSize');
phraseSize.text(wordSize);

var field = $('.type-field');
field.on('input', function(){
  var content = field.val();
  var wordQty = content.split(/\S+/).length - 1;
  $('#word-counter').text(wordQty);
  var characterQty = content.length;
  $('#character-counter').text(characterQty);
});
