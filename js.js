var vegetables = ["watercress", "eggplant", "tomatoes"];
var tomatoes = 20;
var eggplant = 58;
var cress = 10;
var myidtoma = document.getElementById('tomat');
var myidcres = document.getElementById('cres');
var myidegg = document.getElementById('egg');
var txt = document.getElementById('txt');

function calocal() {
    "use strict";
    if (myidtoma.checked == true) {
        txt.innerHTML = 20 + " calories";
    } else if (myidcres.checked == true) {
        txt.innerHTML = 10 + " calories";
    } else if (myidegg.checked == true) {
        txt.innerHTML = 58 + " calories";
    } else {
        txt.innerHTML = "Please choose vegetables";
    }
}

function allsum() {
    "use strict";
    if (myidtoma.checked == true && myidcres.checked == true && myidegg.checked == true) {
        txt.innerHTML = 88 + " calories";
    } else if (myidcres.checked == true && myidegg.checked == true) {
        txt.innerHTML = 68 + " calories";
    } else if (myidtoma.checked == true && myidegg.checked == true) {
        txt.innerHTML = 78 + " calories";
    } else if (myidtoma.checked == true && myidcres.checked == true) {
        txt.innerHTML = 30 + " calories";
    }

}