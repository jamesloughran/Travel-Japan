// var navLinks = document.getElementById('navLinks');

// function showMenu(){
//     navLinks.style.left = '0';
// }

// function hideMenu(){
//     navLinks.style.left = '-200px';
// }


// hamburger 1st way

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}))



// hamburger 2nd way

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", ()=>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))



// back to top btn


const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset > 500) { //show backToTopButton
        if(!backToTopButton.classList.contains("btnEntrance")){
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
        

    }
    else{ // hide button
        if(backToTopButton.classList.contains("btnEntrance")){
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
            
        }
        
    }
}

backToTopButton.addEventListener('click', smoothScrollBackToTop);





function smoothScrollBackToTop(){
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp){
        if(!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOuyCubic(progress, startPosition, distance, duration));
        if(progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOuyCubic(t, b, c, d){
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
}