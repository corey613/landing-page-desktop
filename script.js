gsap.from(".logo", {duration: 1, delay: 1.2, opacity: 0, x: -40})
gsap.from(".menu", {duration: 1, delay: 1.2, opacity: 0, x: -80, stagger: 3})
gsap.from(".search", {duration: 1, delay: 1.6, opacity: 0, x: 40})

gsap.to(".bottomBorder", {duration: 1, delay: 1.4, width: "100%" })

gsap.from(".subText", {duration: 1, delay: 2.4, opacity: 0, x: -40, width: "100%"})
gsap.from(".title", {duration: 1, delay: 2, opacity: 0, x: -40, width: "0%", stagger: 5})
gsap.from(".desc", {duration: 1, delay: 2.8, opacity: 0, x: -40})
gsap.from(".readMore", {duration: 1, delay: 2.8, opacity: 0, x: -40})
gsap.to(".slider", {duration: 1, delay: 3, opacity: 1})


gsap.to(".img1", {duration: 1, delay: 2.2, width:"450px"})
gsap.to(".img2", {duration: 1, delay: 2.4, width:"300px"})
gsap.to(".img3", {duration: 1, delay: 2.6, width:"300px"})

gsap.to(".first", {duration: 1.5, delay: 0.2, left: "100%", ease: "power2.inOut"})
gsap.to(".second", {duration: 1.5, delay: 0.4, left: "100%", ease: "power2.inOut"})
gsap.to(".third", {duration: 1.5, delay: 0.6, left: "100%", ease: "power2.inOut"})