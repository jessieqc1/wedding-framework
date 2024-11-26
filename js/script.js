
// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');
toggleMenuButton.onclick = function() {
    if (toggleMenu.getAttribute('data-menustate') === 'closed') {
      // if closed, open it    
      toggleMenu.setAttribute('data-menustate','open');
    } else {
      // else, close it
      toggleMenu.setAttribute('data-menustate','closed');
    }
};

const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate','closed');
  }
});

// ON SCROLL ANIMATION
// CHANGE ACTIVE STATE FOR ALL ELEMENTS WITH .observe.me CLASS
const myobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-viewstate", "active");
    } else {
      entry.target.setAttribute("data-viewstate", "inactive");
    };   
  });  
});

const mytargets = document.querySelectorAll('.observe-me');
mytargets.forEach((el) => {
    myobserver.observe(el);
});


// FLIP CARDS

const myflipcards = document.querySelectorAll('.flip-card');
myflipcards.forEach((el) => {
     // stuff happening
    el.onclick = () => {
        if (el.getAttribute('data-flipstate') === 'flipped') {
      // if closed, open it    
        el.setAttribute('data-flipstate','unflipped');
    } else {
      // else, close it
        el.setAttribute('data-flipstate','flipped');
    }
    }

  
});