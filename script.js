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
// Get all the <a> elements in the main-list
var links = document.querySelectorAll(".main-list a");

// Get the "C" link and the rest of the links
var cLink = document.querySelector(".main-list a[href='./c-program.html']");
var otherLinks = document.querySelectorAll(".main-list a:not([href='./c-program.html'])");

// Add click event listeners for "C" and other links
cLink.addEventListener("click", function (event) {
    // No need to prevent default behavior for navigation
    // because it's a real link
    // Allow the link to navigate to the provided URL
});

otherLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior of other links

        // Get the text content of the clicked link
        var text = link.textContent.trim();

        // Show an alert for other options except "C"
        alert("Unfortunately,this language has not been updated yet");
    });
});
