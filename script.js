var menuBars = document.getElementById("menu-bars");
const hamBurger = document.getElementById("ham-burger");

let isOpen = false;

menuBars.addEventListener("click", () => {
    if (!isOpen) {
        hamBurger.style.display = "block";
        hamBurger.style.animation = "slideLeft 0.5s linear forwards";
    } else {
        hamBurger.style.animation = "slideRight 0.5s linear forwards";
        setTimeout(() => {
        }, 50); 
    }
    
    isOpen = !isOpen;
});
const button = document.getElementById("closebtn");
button.addEventListener("click", () => {
    if (hamBurger.style.display === "block") {

        hamBurger.style.animation = "slideRight 0.5s linear forwards";
    }
});
function openSlide() {
    var options = document.querySelector('.options');
    options.classList.toggle('active');
}


function showProgram(section) {
    var program = document.querySelector(".program");
    var section2 = document.querySelector(".section2"); 
    var sectionAdvance = document.querySelector(".section-advance");  // Variable name for .section-advance
    var sectionProject = document.querySelector(".section-project");  // Variable name for .section-project
    var black = document.querySelector(".intro-coder");

    if (section === "program") {
        program.style.display = "block";
        section2.style.display = "none";
        black.style.display = "block";
    } else if (section === "section2") {
        program.style.display = "none";
        section2.style.display = "block";
        black.style.display = "none";  
    } else {
        alert("Unfortunately,this level has not been updated yet");
    }
}

function showSection2() {
    var program = document.querySelector(".program");
    var section2 = document.querySelector(".section2");
    
    program.style.display = "none";
    section2.style.display = "block";
}
function headerblock(){
    var black = document.getElementsByClassName(".intro");

}

// Get all elements with the class "stopper"
var stoppers = document.querySelectorAll(".stopper");

// Add a click event listener to each "stopper" element
stoppers.forEach(function (element) {
    element.addEventListener("click", function () {
        alert("Unfortunately, this language has not been updated yet");
    });
});
