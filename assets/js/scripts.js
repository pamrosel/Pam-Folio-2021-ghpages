// UNIVERSAL scripts

console.log("Hello everything!");

if ('IntersectionObserver' in window) {
    console.log("Your browser supports IntersectionObserver");
} else {
    console.log("Your browser does not support IntersectionObserver");
}

// INTERSECTION OBSERVER 4 SECTIONS ('fading up sections using Intersection Obvserver' dev.to tutorial)

const observerOptions = {
     root: null,
     threshold: 0,
     rootMargin: '0% 0% -20% 0%'
 };

 const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('in-view');
               observer.unobserve(entry.target);
           }
       });
   }, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {
    const sections =Array.from(document.getElementsByClassName('section'));
    for (let section of sections) {
      observer.observe(section);
    }
});


// STICKY HEADER - Hide Header on on scroll down

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

function scrolltoFooter() {
    const footer = document.querySelector("footer");
    footer.scrollIntoView({block: "start", behavior: "smooth"});
}

function scrolltoFolio() {
    const footer = document.querySelector("body");
    footer.scrollIntoView({behavior: "smooth"});
}

$(document).ready(function() {

    //GET CURRENT YEAR 

    document.getElementById("year").innerHTML = new Date().getFullYear();

    //FOOTER BG COLOUR CHANGE

    const body = document.querySelector("body");
    const foliobg = document.querySelector("#foliobg");
    const foliofg = document.querySelector("#foliofg");
    const footer = document.querySelector("footer");
    const navfolio = document.querySelector("#navfolio");
    const navabout = document.querySelector("#navabout");

    const sectionOptions = {
        root: null,
        threshold: 0,
        rootMargin: '0% 0% -100% 0%'
    };

    const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
      const footerEntry = entries.find(entry => entry.target.tagName === 'FOOTER');
      if (footerEntry && footerEntry.isIntersecting) {
        console.log('footer intersecting');
        navfolio.classList.remove("navhighlight");
        navabout.classList.add("navhighlight");
        body.classList.add("bodyfooter");

        foliobg.classList.remove("bgshow");
        foliobg.classList.add("bghide");
        foliofg.classList.remove("fgshow");
        foliofg.classList.add("fghide");
      } else {
        console.log('folio intersecting')
        navfolio.classList.add("navhighlight")
        navabout.classList.remove("navhighlight")
        body.classList.remove("bodyfooter");
        foliobg.classList.remove("bghide");
        foliobg.classList.add("bgshow");
        foliofg.classList.remove("fghide");
        foliofg.classList.add("fgshow");
      }
    }, sectionOptions);

    sectionObserver.observe(footer);

});

