let mm = gsap.matchMedia();

mm.add("(max-width: 576px)", () => {
  let aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "500 100",
      end: "+=100",
      scrub: 1,
    },
  });

  aboutTl.to("#header", {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.1,
  });

  let fvTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#FV",
      start: "top top",
      end: "+=500",
      scrub: 1,
      pin: true,
    },
  });

  fvTl
    .to(
      "#FV .anim-area",
      {
        clipPath: "circle(55% at 50% 55%)",
        duration: 1,
      },
      0
    )
    .to(
      "#FV .anim-area .circle",
      {
        width: "169%",
        duration: 1,
      },
      0
    );

  gsap.to(CSSRulePlugin.getRule("#about::before"), {
    scrollTrigger: {
      trigger: "#about",
      start: "top 300px",
      end: "+=800px",
      scrub: 1,
    },
    borderTopRightRadius: "0%",
    borderTopLeftRadius: "0%",
    duration: 5,
  });
});

mm.add("(min-width: 576px)", () => {
  let aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "300 100",
      end: "+=100",
      // markers: true,
      scrub: 1,
    },
  });

  aboutTl.to("#header", {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.1,
  });

  let fvTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#FV",
      start: "top top",
      end: "+=300",
      scrub: 1,
      pin: true,
    },
  });
  fvTl
    .to(
      "#FV .anim-area",
      {
        left: "50%",
        duration: 1,
      },
      0
    )
    .to(
      "#FV .anim-area",
      {
        clipPath: "circle(40% at 50% 55%)",
      },
      0.5
    )
    .to(
      "#FV .anim-area .circle",
      {
        width: "123%",
      },
      0.5
    );

  gsap.to(CSSRulePlugin.getRule("#about::before"), {
    scrollTrigger: {
      trigger: "#about",
      start: "top 300px",
      end: "+=800px",
      scrub: 1,
    },
    borderTopRightRadius: "0%",
    borderTopLeftRadius: "0%",
    duration: 5,
  });
});

/*---------- menu ----------*/
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelectorAll('[data-type="menu-close"]');
const menuBackdrop = document.querySelector("#menu .backdrop");
let menuTl = gsap.timeline();

menuToggle.addEventListener("click", () => {
  gsap
    .timeline()
    .to(
      "#menu",
      {
        visibility: "visible",
      },
      0
    )
    .to(
      "#menu .backdrop",
      {
        opacity: 1,
        duration: 0.2,
      },
      0
    )
    .to(
      "#menu .inner",
      {
        transform: "translateX(-3rem)",
        duration: 0.2,
      },
      0
    )
    .to(
      "#menu .bg",
      {
        right: "3rem",
        duration: 0.2,
      },
      0
    )
    .to(
      "#menu .shadow",
      {
        right: "4rem",
        duration: 0.1,
      },
      0.1
    )
    .to(
      "#menu .menu-toggle",
      {
        opacity: 1,
        transform: "rotateY(0)",
        duration: 0.1,
      },
      0.1
    )
    .to(
      "#menu .inner",
      {
        transform: "translateX(0)",
        duration: 0.2,
      },
      0.2
    )
    .to(
      "#menu .bg",
      {
        right: "0",
        duration: 0.2,
      },
      0.2
    )
    .to(
      "#menu .shadow",
      {
        right: "2rem",
        duration: 0.2,
      },
      0.3
    );
});

menuClose.forEach((close) => {
  close.addEventListener("click", () => {
    gsap
      .timeline()
      .to(
        "#menu .backdrop",
        {
          opacity: 0,
          duration: 0.2,
        },
        0
      )
      .to(
        "#menu .inner",
        {
          transform: "translateX(15rem)",
          duration: 0.2,
        },
        0
      )
      .to(
        "#menu .bg",
        {
          right: "-15rem",
          duration: 0.2,
        },
        0
      )
      .to(
        "#menu .shadow",
        {
          right: "-15rem",
          duration: 0.2,
        },
        0
      )
      .to(
        "#menu .menu-toggle",
        {
          opacity: 0,
          transform: "rotateY(180deg)",
          duration: 0.1,
        },
        0
      )
      .to(
        "#menu",
        {
          visibility: "hidden",
          duration: 0.2,
        },
        0
      );
  });
});

/*---------- footer ----------*/
gsap.to("footer .bg", {
  scrollTrigger: {
    trigger: "footer",
    start: "50% bottom",
    end: "50% bottom",
    toggleActions: "restart none reverse none",
  },
  width: "100vw",
  borderRadius: "0",
  duration: 1,
});
