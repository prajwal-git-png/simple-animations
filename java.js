

var t1 = gsap.timeline({
    repeat : -1
});


    t1.to(".imagecontainer", {
        ease: Expo.easeInOut,
        width: "100%",
   
        stagger : 2
    }, "a")
    .to(".text h1", {
        ease: Expo.easeInOut,
     
       stagger : 2,
        top :0
    }, "a")
    .to(".text h1", {
        ease: Expo.easeInOut,
     delay : 2,
       stagger : 2,
        top :"-100"
    }, "a")