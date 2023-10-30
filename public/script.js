const inputWindow = document.querySelector('input');

const allCards = [
    {name: "A", keycode: "65", src: "sounds/A.wav"},
    {name: "B", keycode: "66", src: "sounds/B.wav"},
    {name: "C",  keycode: "67", src: "sounds/C.wav"},
    {name: "D",  keycode: "68", src: "sounds/D.wav"},
    {name: "E",  keycode: "69", src: "sounds/E.wav"},
    {name: "F",  keycode: "70", src: "sounds/F.wav"},
    {name: "G",  keycode: "71", src: "sounds/G.wav"},
    {name: "H",  keycode: "72", src: "sounds/H.wav"},
    {name: "I",  keycode: "73", src: "sounds/I.wav"},
    {name: "J",  keycode: "74", src: "sounds/J.wav"},
    {name: "K",  keycode: "75", src: "sounds/K.wav"},
    {name: "L",  keycode: "76", src: "sounds/L.wav"},
    {name: "M",  keycode: "77", src: "sounds/M.wav"},
    {name: "N",  keycode: "78", src: "sounds/N.wav"},
    {name: "O",  keycode: "79", src: "sounds/O.wav"},
    {name: "P",  keycode: "80", src: "sounds/P.wav"},
    {name: "Q",  keycode: "81", src: "sounds/Q.wav"},
    {name: "R",  keycode: "82", src: "sounds/R.wav"},
    {name: "S",  keycode: "83", src: "sounds/S.wav"},
    {name: "T",  keycode: "84", src: "sounds/T.wav"},
    {name: "U",  keycode: "85", src: "sounds/U.wav"},
    {name: "V",  keycode: "86", src: "sounds/V.wav"},
    {name: "W",  keycode: "87", src: "sounds/W.wav"},
    {name: "X",  keycode: "88", src: "sounds/X.wav"},
    {name: "Y",  keycode: "89", src: "sounds/Y.wav"},
    {name: "Z",  keycode: "90", src: "sounds/Z.wav"},
];

const createLetterCards = (letter) => {
 return `<div class="key" id=${letter.keycode}>
        <kbd>${letter.name}</kbd>
        
        <audio data-key="${letter.keycode}" src="${letter.src}"></audio>
        <img class="back" src="images/${letter.name}.jpg" alt="${letter.example}"/>
</div>`
}

const allCardsBuilt = allCards.map(createLetterCards);

inputWindow.addEventListener("keyup", function (e){
if (document.activeElement == !inputWindow) return;
const getInputText = inputWindow.value.toUpperCase().replace(/[^A-Za-z]/g,"").split("");
const findObjectsForInput = getInputText.map(letter=> {
return allCards.find(letterName => {
 return `${letter}` === letterName.name})
});
const renderPressedKeys = findObjectsForInput.map(createLetterCards);
document.getElementById("keyIDPressed").innerHTML = renderPressedKeys;
})

document.getElementById("keyID").innerHTML = allCardsBuilt.join("");

inputWindow.addEventListener("keyup", function(e){
const inputDiv = document.getElementById("keyIDPressed");
const alphaDiv = document.getElementById("keyID");
if (inputWindow.value.length > 0){
return alphaDiv.classList.add('showing')
} else {
return alphaDiv.classList.remove('showing')
}})

window.addEventListener("keydown", function(e){
    if (document.activeElement == inputWindow) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.getElementById(`${e.keyCode}`)
    if(!audio) return;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));