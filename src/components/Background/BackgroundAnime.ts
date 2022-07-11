import anime from "animejs"

window.addEventListener('load', () => {

    function timeline(d: number) {
        const timeline = anime.timeline({
            duration: 6000,
            easing: "linear",
            loop: true,
            delay: d * 400
        })
        return timeline
    }
    for (let i = 1; i < 19; i++) {
        const sector = Number(document.getElementById(`sector${i}`)?.getAttribute('r'))
        timeline(i).add({
            targets: `#sector${i}`,
            r: [
                { value: sector },
                { value: sector + 40 },
                { value: sector },
            ]
        })
    }
})