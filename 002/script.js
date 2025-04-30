// Animação do texto da hero section com GSAP
gsap.from(".hero h1", {
    y: -200,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});

// Animações dos elementos flutuantes (folhas, frutas e garrafa)
gsap.from("#fanta", {
    y: 200,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
});

gsap.from("#laranja-cortada", {
    x: -100,
    rotate: 90,
    opacity: 0,
    duration: 2,
    ease: "back.out(1.7)"
});

gsap.from("#laranja", {
    x: 100,
    rotate: -90,
    opacity: 0,
    duration: 2,
    ease: "back.out(1.7)"
});

gsap.from("#folha", {
    x: -200,
    rotate: -180,
    opacity: 0,
    duration: 2,
    ease: "power2.out"
});

gsap.from("#folha2", {
    x: 200,
    rotate: 180,
    opacity: 0,
    duration: 2,
    ease: "power2.out"
});

gsap.from("#folha3", {
    y: -200,
    rotate: 90,
    opacity: 0,
    duration: 2,
    ease: "power2.out"
});

// Animações das seções seguintes ao rolar a página
gsap.registerPlugin(ScrollTrigger);

gsap.from(".left-side img", {
    scrollTrigger: {
        trigger: ".two",
        start: "top 80%",
    },
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".right-side h2, .right-side p", {
    scrollTrigger: {
        trigger: ".two",
        start: "top 80%",
    },
    x: 200,
    opacity: 0,
    stagger: 0.3,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".three",
        start: "top 85%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});
