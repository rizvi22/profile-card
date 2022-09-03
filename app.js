$(function () {
    "use strict";
    $(".card-add").click(function () {
    $(".card-container").toggleClass("pCcard-on");
    $(".card-add i").toggleClass("fa-minus")
    })
})

//Preloader
var loader = document.getElementById("preloader")

window.addEventListener("load", function() {
    loader.style.display = "none";
})