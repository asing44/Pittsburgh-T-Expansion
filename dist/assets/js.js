// ?? ----------------------------------------
// ?? INIT AND SETUP
// ?? ----------------------------------------

// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf)

var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
console.log("Viewport height: " + viewportHeight, "Viewport width: " + viewportWidth);

window.addEventListener("resize", () => {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
});

// Scroll to top on load
gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: "power3.out"
});

// Get total scroll

function updateScrollProgress(percent) {
    $(".progress-percent").text(percent + "%")
}

ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    // Scroll progress function
    onUpdate: (self) => {
        let scrollProgress = Math.round(self.progress  * 100);
        updateScrollProgress(scrollProgress);
    }
});

// * ---- Progress bar ----

gsap.to(".progress-bar", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
    },
    width: "100%"
});

// * ---- / ----