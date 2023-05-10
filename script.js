
function Formatar() {
    debugger
    var text1 = document.getElementById("areaText1");
    var text2 = document.getElementById("areaText2");
    var palavras = [];


    palavras = text1.value.split(' ').filter(x => x != "");

    text2.innerText = palavras.join(" ").trim();
}