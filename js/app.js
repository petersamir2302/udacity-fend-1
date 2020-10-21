/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.getElementsByTagName('section');
const navbarList = document.getElementById('navbar__list');
let navItems = null;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    let ulFragment = document.createDocumentFragment();
    for(const section of allSections){
        let navItem = document.createElement('li');
        let navLink = document.createElement('a');
        navLink.addEventListener('click', function (e){
            e.preventDefault();
            scrollToSection(section);
        });
        navLink.innerText = section.getAttribute('data-nav');
        navItem.appendChild(navLink);
        navLink.classList.add('menu__link');
        ulFragment.appendChild(navItem);
    }
    navbarList.appendChild(ulFragment);
    navItems = navbarList.getElementsByTagName('li');
}


// Add class 'active' to section when near top of viewport

function makeSectionActive(){
    if (window.scrollY > navbarList.offsetTop){
        navbarList.classList.add('sticky');
    }else {

        navbarList.classList.remove('sticky');
    }
    for (let i =0; i < allSections.length; i++){
        if ( (window.scrollY+70 > allSections[i].offsetTop && i !== allSections.length-1 && window.scrollY+70 < allSections[i+1].offsetTop) || (window.scrollY+70 > allSections[i].offsetTop && i === allSections.length-1)){
            for (let navItem of navItems){
                if (navItem.innerText === allSections[i].getAttribute('data-nav')){
                    navItem.classList.add('active');
                }else {
                    navItem.classList.remove('active');
                }
            }
        }
    }
}


// Scroll to anchor ID using scrollTO event
function scrollToSection(element){
    element.scrollIntoView({
        behavior: 'smooth'
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

window.onload = function (event) {
// Build menu
    buildNav();
// Set sections as active
    document.addEventListener('scroll', makeSectionActive);
// Scroll to section on link click
    //added event Listeners when creating the items above
}



