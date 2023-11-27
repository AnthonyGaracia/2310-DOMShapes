//const h1 = document.querySelector("h1")

// setTimeout(() => {
//     h1.innerHTML = h1.innerHTML*1 + 1
// }, 1000)

// setInterval(() => {
//     h1.innerHTML = h1.innerHTML*1 + 1
// }, 1000)

const ul = document.querySelector(".list")
const data = []

const interval = setInterval(() => {
    const rnd = Math.round(Math.random() * 10)
    data.push(rnd)
    //console.log(data)
    render()
    if(data.length === 10){
        clearInterval(interval)
    }
}, 1000)

function render() {
    const html = data.map((num) => {
        return `<li>${num}</li>`
    })
    //console.log(html.join(""))
    ul.innerHTML = html.join("")

}

