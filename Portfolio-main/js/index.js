function loco() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

loco()


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
        duration: 1,
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


let word = ""

document.querySelector(".about-text").textContent.split("").forEach(function (dets) {
    word += `<span>${dets}</span>`
    document.querySelector(".about-text").innerHTML = word


})
gsap.to(".about-text>span", {
    scrollTrigger: {
        trigger: ".about-text>span",
        start: "top bottom",
        markers: false,
        scroller: `#main`,
        ease: `power`,
        end: "bottom top",
        scrub: `.5`

    },
    stagger: 0.01,
    color: "#fff",


})


