'use strict';

// navbar variables
const navbarNav = document.querySelector(".navbar-nav");
const navbarToggleBtn = document.querySelector(".nav-toggle-btn");

//navbar toggle fucntion

navbarToggleBtn.addEventListener("click" , function() {
    
    navbarNav.classList.toggle('active');
    this.classList.toggle('active');
});








// Loading Screen Execution 

window.addEventListener('load',function() {
    setTimeout(hideOverlay,1500);
})



// Hide Loading Screen Function

function hideOverlay()
{
    document.querySelector(".loading-screen").style.display = "none";
    document.querySelector("body").classList.remove("loading");
}


