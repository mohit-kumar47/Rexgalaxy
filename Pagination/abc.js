const slides = document.querySelectorAll(".container")
var counter = 0;
slides.forEach(
    (container,index) => {
        container.style.left = `${index*50}%`
    }
)

const goPrev = () => {
    counter--
    slideText()
}

const goNext = () => {
    counter++
    slideText()
}



const slideText = () => {
    slides.forEach(
        (container) => {
            container.style.transform = `translateX(-${counter*50}%)`
        }
    )
}