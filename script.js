var resultado = [];

function Remover() {
  debugger
  var text1 = document.getElementById("areaText1");
  var text2 = document.getElementById("areaText2");
  var palavras = [];


  palavras = text1.textContent.split(/\s+/g);

  text2.textContent = palavras.join(' ');
}

function Aplicar() {
  var editor = document.getElementById("areaText2");
  var colorPicker = document.getElementById("cor");
  
  if (document.queryCommandSupported('styleWithCSS')) {
    document.execCommand('styleWithCSS', false, true);
  }
  
  document.execCommand('foreColor', false, colorPicker.value);
}

function Formatar() {
  document.execCommand(command, false, null);
}
