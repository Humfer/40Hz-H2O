
function reveal() {
    var reveals = document.querySelectorAll("intro-slides");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 350;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}


function reveal2() {
    var reveals = document.querySelectorAll(".header-slides");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active2");
        } else {
            reveals[i].classList.remove("active2");
        }
    }
}


window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
//document.getElementById("myAudio").volume = 0.2;
