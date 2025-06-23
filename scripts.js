const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

/* Created by Vincent Oldenburg, originally based on an FCC challenge.
The assignment focuses on HTML and CSS - jQuery is added solely for animation waypoints. 
Requirements impacted design choices a bit (e.g. featuring a fixed top navbar). 

User stories:
  #1: My portfolio should have a welcome section with an id of welcome-section.
  #2: The welcome section should have an h1 element that contains text.
  #3: My portfolio should have a projects section with an id of projects.
  #4: The projects section should contain at least one element with a class of project-tile to hold a project.
  #5: The projects section should contain at least one link to a project.
  #6: My portfolio should have a navbar with an id of navbar.
  #7: The navbar should contain at least one link that I can click on to navigate to different sections of the page.
  #8: My portfolio should have a link with an id of profile-link, which opens my GitHub or FCC profile in a new tab.
  #9: My portfolio should have at least one media query.
  #10: The height of the welcome section should be equal to the height of the viewport.
  #11: The navbar should always be at the top of the viewport. */

$(document).ready(function() {
  /* Make the items later animated transparant on page load */
  $(
    "#projects-header, #projects-bar, #proj1, #proj2, #proj3, #proj4, #about, #about-text, #about-skills, #support-skills, #certifications, #contact-header, #contact-bar, #contact-text, #contact-form, #social-media"
  ).css("opacity", 0);

  $("#projects").waypoint(
    function() {
      $("#projects-header").addClass("anim-slide-left");
      $("#projects-bar")
        .addClass("anim-slide-left")
        .css("animation-delay", ".25s");
    },
    { offset: "90%" }
  );

  $("#proj1").waypoint(
    function() {
      $("#proj1")
        .addClass("anim-reveal")
        .css("animation-delay", ".5s");
      $("#proj2")
        .addClass("anim-reveal")
        .css("animation-delay", ".7s");
      $("#proj3")
        .addClass("anim-reveal")
        .css("animation-delay", ".9s");
      $("#proj4")
        .addClass("anim-reveal")
        .css("animation-delay", "1.1s");
    },
    { offset: "80%" }
  );

  $(".about").waypoint(
    function() {
      $("#about").addClass("anim-reveal");
      $("#about-text")
        .addClass("anim-reveal")
        .css("animation-delay", ".4s");
      $("#about-skills")
        .addClass("anim-reveal")
        .css("animation-delay", ".8s");
      $("#support-skills")
        .addClass("anim-reveal")
        .css("animation-delay", "1.2s");
    },
    { offset: "80%" }
  );

  $("#certifications").waypoint(
    function() {
      $("#certifications").addClass("anim-reveal");
    },
    { offset: "110%" }
  );

  $("#contact").waypoint(
    function() {
      $("#contact-header").addClass("anim-slide-left");
      $("#contact-bar")
        .addClass("anim-slide-left")
        .css("animation-delay", ".25s");
      $("#contact-text")
        .addClass("anim-reveal")
        .css("animation-delay", ".65s");
      $("#contact-form")
        .addClass("anim-pop-in")
        .css("animation-delay", "1.05s");
      $("#social-media")
        .addClass("anim-slide-right")
        .css("animation-delay", "1.15s");
    },
    { offset: "80%" }
  );
});

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const moreText = button.previousElementSibling;
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      button.textContent = "[Read less]";
    } else {
      moreText.style.display = "none";
      button.textContent = "[Read more]";
    }
  });
});

function scrollToCenter(event, id) {
  event.preventDefault();
  const element = document.getElementById(id);

  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = window.pageYOffset + elementRect.top;
    const middleScreenPosition = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
    
    window.scrollTo({
      top: middleScreenPosition,
      behavior: 'smooth'
    });

    element.classList.add('flash-effect');

    element.addEventListener('animationend', () => {
      element.classList.remove('flash-effect');
      element.classList.add('flash-effect-reverse');
    
      // remove reverse class after transition
      element.addEventListener('transitionend', () => {
        element.classList.remove('flash-effect-reverse');
        element.style.backgroundColor = '';
      }, { once: true });
    }, { once: true });
  }
}

function scrollToTop(event, id) {
  event.preventDefault();
  const element = document.getElementById(id);

  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = window.pageYOffset + elementRect.top;
    const middleScreenPosition = absoluteElementTop - 50;
    
    window.scrollTo({
      top: middleScreenPosition,
      behavior: 'smooth'
    });
  }
}

