gsap.registerPlugin(ScrollTrigger);


const h4Elements = document.querySelectorAll(".sidebar h4");

gsap.fromTo(".line", 
    { transform: "scaleX(0)" },  
    { 
        transform: "scaleX(1)",  
        scrollTrigger: {
            trigger: ".section-2",
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: true,        
            markers: false,
            toggleActions: 'play play play reverse',
        },
        duration: 2,
    }
);


t1.fromTo(".sidebar h4", 
    { y: -16, opacity: 0, }, 
    { 
  
    y: 0,
    opacity: 1,
    duration: 0.3, 
    stagger: 0.03,
    ease: "power1.inOut",

    }
  );

  gsap.from(".about p", {
    scrollTrigger: {
        trigger: ".about p",
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false,
        toggleActions: 'play play play reverse',
        
    },
    filter: "blur(2px)",
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power1.inOut",
});

gsap.from(".main-section2 img", {
  scrollTrigger: {
      trigger: ".main-section2 img",
      start: 'top 100%',
      end: 'top 0%',
      scrub: false,
      markers: false,
      toggleActions: 'play play play reverse',
      
  },
  filter: "blur(5px)",
  opacity: 0,
  y: 40,
  duration: 0.9, 
  ease: "power1.inOut",
});


gsap.from(".main-section3 img", {
  scrollTrigger: {
      trigger: ".main-section3 img",
      start: 'top 100%',
      end: 'top 0%',
      scrub: false,
      markers: false,
      toggleActions: 'play play play reverse',
      
  },
  filter: "blur(5px)",
  opacity: 0,
  y: 40,
  duration: 0.9, 
  ease: "power1.inOut",
});

gsap.to(".hero video", {
  scale: 1.5, 
  scrollTrigger: {
      trigger: ".hero video", 
      start: "top top",
      end: "bottom top",
      scrub: true,
  },
});


// const splitTypes = document.querySelectorAll('.about p');
// if (splitTypes.length > 0) {
//     splitTypes.forEach((words, index) => {
//         // Split words using SplitType for each paragraph
//         const text = new SplitType(words, { types: 'words' });

//         // Animate each paragraph independently with a ScrollTrigger for each
//         gsap.from(text.words, {
//             scrollTrigger: {
//                 trigger: words, // Trigger for each paragraph
//                 start: 'top 80%', // Trigger animation when the paragraph hits 80% of the viewport
//                 end: 'top 0%',   // End when the paragraph hits 20% of the viewport
//                 scrub: false,
//                 markers: false,
//                 toggleActions: 'play play play reverse', // Play only once on scroll
//             },
//             x: 80,          // Slide in from left
//             stagger: 0.003,   // Stagger word animation for each paragraph
//             duration: 0.8,   // Duration of the word animation
//             ease: 'power3.out', // Smooth easing effect
//             delay: index * 0.07 // Delay each paragraph animation based on its index
//         });
//     });
// }


const splitTypes2 = document.querySelectorAll('.header h2');
if (splitTypes2.length > 0) {
    splitTypes2.forEach((chars) => {
        // Split words using SplitType for each paragraph
        const text2 = new SplitType(chars, { types: 'chars' });

        // Animate each paragraph independently with a ScrollTrigger for each
        gsap.from(text2.chars, {
            scrollTrigger: {
                trigger: chars, // Trigger for each paragraph
                start: 'top 80%', // Trigger animation when the paragraph hits 80% of the viewport
                end: 'top 0%',   // End when the paragraph hits 20% of the viewport
                scrub: false,
                markers: false,
                toggleActions: 'play play play reverse', // Play only once on scroll
            },
            y: "40vh",          // Slide in from left
            stagger: 0.02,   // Stagger word animation for each paragraph
            duration: 1,   // Duration of the word animation
            ease: 'power3.out', // Smooth easing effect
        });
    });
}




// Hover
h4 = document.querySelectorAll(".sidebar h4");

h4.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { 
        x: 30,
        opacity: 0.5, 
        duration: 0.3, 
        ease: "power1.inOut"
      });
    });
  
    element.addEventListener("mouseleave", () => {
      gsap.to(element, { 
        x: 0,
        opacity: 1, 
        duration: 0.3, 
        ease: "power1.inOut"
      });
    });
  });