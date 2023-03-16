gsap.registerPlugin(ScrollTrigger);

gsap.from(".gsap6", {
   scrollTrigger:{
      trigger:".about-trigger",
      start: "top 30%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap7", {
   scrollTrigger:{
      trigger:".about-trigger",
      start: "top 30%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap8", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 60%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".mode-image", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 60%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".mode-text", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 60%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".marble-text", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 40%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".marble-image", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 40%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".foundry-image", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 60%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".foundry-text", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 20%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".mock-text", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 20%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".mock-image", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 20%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".portfolio-image", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 20%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".portfolio-text", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 20%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".preloader-title-text", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 40%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".magazine-text", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 60%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".magazine-image", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 60%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".cruise-text", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 40%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".cruise-image", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 40%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".snow-text", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 20%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".snow-image", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 20%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".end-text", {
   scrollTrigger:{
      trigger:".end-trigger",
      start: "top 60%"
   },
 y: 100,
 duration: 1,
 opacity:0,
});


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
