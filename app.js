const sbtn = document.querySelector('.circleBtn')

sbtn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

const tl = gsap.timeline({ defaults: { ease: 'circ' } })

tl.from('body', {
    opacity: 0,
    display: 'none',
    duration: 1
}).from('.navbar', {
    y: '-100%',
    duration: .5
}).from('.hero .overlay .text', {
    x: '-100%',
    opacity: 0,
    duration: .7
}).from('.hero .overlay .btn', {
    opacity: 0,
    scale: 0,
}).to('.hero .overlay .btn', {
    y: '10px',
    repeat: -1,
    yoyo: true
})

tl.from('.hero .btn', {
    opacity: 0,
    duration: 10
})