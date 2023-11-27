const colors = ["purple", "red", "yellow", "orange", "blue", "fuchsia"]
const sizes = ["sm", "med", "lg"]
const types = ["square", "circle"]

function randomShape(){
    const colorNum = Math.floor(Math.random() * colors.length)
    const sizeNum = Math.floor(Math.random() * sizes.length)
    const typeNum = Math.floor(Math.random() * types.length)

    const shape = {
        color: colors[colorNum],
        size: sizes[sizeNum],
        type: types[typeNum]
    }

    return shape
}

const randomShapeOne = randomShape()
const randomShapeTwo = randomShape()
const shapes = [randomShapeOne, randomShapeTwo]
const container = document.querySelector(".container")
function render() {
    const html = shapes.map((shape) => {
        return `<div class='${shape.color} ${shape.size} ${shape.type}'></div>`
    })
    container.innerHTML = html.join("")
    console.log(container)
}

const interval = setInterval(() => {
    const obj = randomShape()
    shapes.push(obj)
    render()
    if(shapes.length === 20){
        clearInterval(interval)
    }
},500)

render()