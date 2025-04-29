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

tl.to(
    '#laranja',
    {
        width: '15%', // Reduz a largura do elemeto com o id 'laranja' para 15%
        top: '160%', // Move o elemento para 160% do topo
        right: '10%', // Move o elemento para 10% da direita
    },
    'laranja'
); // Sicronizado com a animação nomeada 'laranja'

tl.to(
    '#folha',
    {
        top: '110%', //Move o elemento com o id 'folha' para 110% do topo
        rotate: '130deg', // Rotaciona e elemento em 130 graus
        left: '70%', // Move o elemento para 70% da esquerda
    },
    'laranja'
)