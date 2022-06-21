var dice;
// dice image from value 1 to 6 are given in an array, codes are from 
// face value of die-face-1 [&#9856] die-face-2 [&#9857],   die-face-3 [&#9858],  die-face-4 [&#9859],
// die-face-5 [&#9860], die-face-6 [&#9861]
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;
var t;

// for keep on changing the dice emojis
function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}

function stopstart() {
    if (stopped) {
        stopped = false;
        //change function is called here to change the image for every (0.5) seconds to milliseconds(500)
        t = setInterval(change, 500);
    } else {
        clearInterval(t);
        stopped = true;
    }
}
// invoking function
window.onload = function(){
    dice = document.getElementById("dice");
    stopstart();
}