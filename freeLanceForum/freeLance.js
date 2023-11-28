const names = ["Dr. Slice","Dr. Pressure","Prof. Possibility","Prof. Prism","Dr. Impulse","Prof. Spark","Dr. Wire","Prof. Goose"];
const occupations = ["gardener","programmer","teacher","gardner","driver"];
const prices = [ "30k","40k","50k","60k","80k","100k"];
 

function randomOccupation() {
    const nameNum = Math.floor(Math.random() * names.length)
    const occuNum = Math.floor(Math.random() * occupations.length)
    const pricesNum = Math.floor(Math.random() * prices.length)

    const occupation = {
        name: names [nameNum],
        job: occupations[occuNum],
        price: prices[pricesNum],
    }
        return occupation;
    }

const randomOccupationOne = randomOccupation()
const randomOccupationTwo = randomOccupation()
const randomOccupationThree = randomOccupation()
const occupation = [randomOccupationOne, randomOccupationTwo, randomOccupationThree]
const content = document.querySelector(".content")
function render() {
    const html = occupation.map((occupation)=> {
        return `<div class>${occupation.name} ${occupation.job} ${occupation.price}<div>`
    })
    content.innerHTML = html.join("")
    console.log(content)
}

const interval = setInterval(() => {
    const obj = randomOccupation()
    occupation.push(obj)
    render()
    if(occupation.length === 20){
        clearInterval(interval)
    }

},500)

render()
