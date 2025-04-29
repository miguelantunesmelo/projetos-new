//Criação de uma timeline do GSAP com animações sicronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO

    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% do topo
        left: '0%',
    },
    'laranja'
); // Nomeando este trecho de animação como 'laranja' para sicronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%', // Move o elemento com o id 'laranja-cortada' para 160% dop topo
        left: '23%', // Move o elemento para 23% da esquerda
    },
    'laranja'
); // Sicronizado com a animação nomeada 'laranja'