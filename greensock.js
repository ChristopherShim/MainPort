gsap.registerPlugin(ScrollTrigger);

function intro() {
   var navbar = gsap.timeline();
   navbar.from(".gsap1", {
    opacity:0,
    duration:0.5,
    ease:"none",
    y: -20,
    stagger: 0.25
   })
   navbar.from(".gsap2", {
    scale:0,
    duration:0.5,
    ease:"none",
   })

   var title = gsap.timeline();
   title.from(".gsap3", {
    duration:0.5,
    opacity:0,
    y:-25,
    stagger:0.15,
   })
   title.from(".gsap4", {
      duration: 0.5,
      opacity:0,
      y:25,
   })
   title.from(".gsap5", {
      duration: 0.5,
      opacity:0,
      y:25,
   })

}

intro()