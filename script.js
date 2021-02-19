var inputTag = document.getElementById("INPUT");
var phrase = "";
var charactersNumber = 0;
var wordsNumbe = 0;
inputTag.addEventListener("change", function (event) {
  if (event.target.value[event.target.value.length - 1] == ".") {
    phrase = event.target.value;
    charactersNumber = event.target.value.length;
    wordsNumbe = wordsNumber(phrase);
    alert(
      "this phrase has " +
        charactersNumber +
        " characters and " +
        wordsNumbe +
        " words."
    );
  }
});

function wordsNumber(phrase) {
  if (phrase.length == 0) return 0;
  else return phrase.split(" ").length;
}
