gsap.registerPlugin(ScrollTrigger);

gsap.from(".svg-draw", {
  scrollTrigger: ".svg-draw",
  strokeDashoffset: 1000,
  strokeDasharray: 1000,
  duration: 2,
  ease: "power2.out"
});
