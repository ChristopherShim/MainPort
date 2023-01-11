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

gsap.from(".gsap9", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 60%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap10", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 60%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap11", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 40%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap12", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 40%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap13", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 20%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap14", {
   scrollTrigger:{
      trigger:".project-trigger",
      start: "top 20%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap15", {
   scrollTrigger:{
      trigger:".gsap14",
      start: "top 50%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap16", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 60%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap17", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 60%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap18", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 40%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap19", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 40%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap20", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 20%"
   },
 x: -100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap21", {
   scrollTrigger:{
      trigger:".preloader-trigger",
      start: "top 20%"
   },
 x: 100,
 duration: 1,
 opacity:0,
});

gsap.from(".gsap22", {
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
