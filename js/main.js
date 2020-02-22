// Navigation Animation
if ($(".nav-anim").length) {
  var animation = new TimelineMax({ paused: true });

  animation.to(".line-1", 0.8, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
  });

  animation.to(".line-2", 0.8, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
  });

  animation.to(".menu", 1.5, {
    top: "0%",
    ease: Expo.easeInOut,
    delay: -1.5
  });

  animation.staggerFrom(
    ".menu ul > li",
    3,
    {
      x: -200,
      opacity: 0,
      ease: Expo.easeInOut,
      delay: -1.5
    },
    0.3
  );

  animation.reverse();

  $(document).on("click", ".toggle-btn", function() {
    animation.reversed(!animation.reversed());
  });

  $(document).on("click", "a", function() {
    animation.reversed(!animation.reversed());
  });
}

// Landing page animation
if ($(".landing-anim").length) {
  function fadeOut() {
    TweenMax.to(".js-overlay__intro-button", 1, {
      y: -100,
      opacity: 0
    });

    TweenMax.to(".overlay__title", 2, {
      y: -400,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 2
    });

    TweenMax.from(".overlay", 2, {
      ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
      delay: 2.6,
      top: "-110%",
      ease: Expo.easeInOut
    });

    TweenMax.to(".overlay-2", 2, {
      delay: 3,
      top: "-110%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".content", 2, {
      delay: 3.2,
      opacity: 0,
      ease: Power2.easeInOut
    });

    TweenMax.to(".content", 2, {
      opacity: 1,
      y: -300,
      delay: 3.2,
      ease: Power2.easeInOut
    });
  }

  $(".js-overlay__intro-button").click(function() {
    fadeOut();
  });
}
