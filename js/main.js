$("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 50,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
});

$(document).ready(function(){
    setTimeout(function(){
        $(".portrait").removeClass("portrait--loading");
    },500)
});

// Changing the defaults
// window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
// sr.reveal('.project', { duration: 200 });