function textanime() {
    document.querySelectorAll('.reveal').forEach(function (elem) {
        let parent = document.createElement('span')
        let child = document.createElement('span')

        parent.classList.add('parent')
        child.classList.add('child')

        child.innerHTML = elem.innerHTML
        parent.appendChild(child)

        elem.innerHTML = ''
        elem.appendChild(parent)
    })
}

textanime()

var tl = gsap.timeline();

tl
    .from('.child span', {
        stagger: .2,
        x: 50,
        delay: 1,
        opacity: 0,
        ease: Circ.easeInout,
        duration: 1,

    })
    .to('.parent .child', {
        y: '-100%',
        delay: 1,
        ease: Circ.easeInout,
        duration: 1,
    })
    .to('#loader', {
        height: 0,
        duration: -1,
        ease: Circ.easeInout,
    })
    .to('#anime_div', {
        top: 0,
        height: '100%',
        duration: .5,
        delay: -1.,
        ease: Circ.easeInout,
    })
    .to('#anime_div', {
        height: '0%',
         delay: -.1,
        duration: .5,
        ease: Circ.easeInout,
    })

var tl = gsap.timeline();