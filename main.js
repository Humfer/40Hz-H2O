
function reveal() {
    var reveals = document.querySelectorAll("intro-breath");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}


function reveal2() {
    var reveals = document.querySelectorAll("intro-listen");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active2");
        } else {
            reveals[i].classList.remove("active2");
        }
    }
}

function reveal3() {
    var reveals = document.querySelectorAll(".staircase");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 300;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}


function reveal4() {
    var reveals = document.querySelectorAll("intro-heal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active2");
        } else {
            reveals[i].classList.remove("active2");
        }
    }
}

function reveal5() {
    var reveals = document.querySelectorAll(".header-slides");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 400;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active2");
        } else {
            reveals[i].classList.remove("active2");
        }
    }
}


window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
window.addEventListener("scroll", reveal4);
window.addEventListener("scroll", reveal5);



//window.addEventListener("load", function(){
    
//document.getElementById("myAudio").volume = 0.2;
