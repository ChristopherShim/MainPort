gsap.registerPlugin(ScrollTrigger);

function intro() {
    var tl = gsap.timeline();
    tl.from(".gsap1", {
        y:-100,
        stagger:0.15,
        opacity:0,
        duration: 0.5,
    })

    tl.from(".gsap2", {
        y:-50,
        stagger:0.15,
        opacity:0,
        duration: 0.5,
    })
    
    tl.from(".gsap3", {
        opacity:0,
        duration: 1,
    })

    gsap.from(".gsap4", {
        scrollTrigger:{
            trigger:".gsap4",
            start:"top 50%"
        },
        opacity:0,
        duration: 1,
    })

    gsap.from(".gsap5", {
        scrollTrigger:{
            trigger:".gsap5",
            start:"top 60%"
        },
        opacity:0,
        duration: 1,
    })

    gsap.from(".gsap6", {
        scrollTrigger:{
            trigger:".gsap6",
            start:"top 60%"
        },
        opacity:0,
        duration: 1,
    })

    gsap.from(".gsap7", {
        scrollTrigger:{
            trigger:".gsap7",
            start:"top 60%"
        },
        opacity:0,
        duration: 1,
    })

    gsap.from(".gsap8", {
        scrollTrigger:{
            trigger:".gsap8",
            start:"top 60%"
        },
        opacity:0,
        duration: 1,
    })

    gsap.from(".gsap9", {
        scrollTrigger:{
            trigger:".gsap9",
            start:"top 60%"
        },
        opacity:0,
        duration: 1,
    })

    gsap.from(".gsap10", {
        scrollTrigger:{
            trigger:".gsap10",
            start:"top 60%"
        },
        opacity:0,
        duration: 1,
    })

}


intro();