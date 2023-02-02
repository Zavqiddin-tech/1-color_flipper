let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

let container = document.querySelector('.container')
let spanBtn = document.querySelector('.span-color')
let btn = document.querySelector('button')


btn.addEventListener('click', function() {
    let hex = '#'

    for(let i = 0; i < 6; i++) {
        // let colorRandom = generator()
        hex += colors[generator()]
    }
    
    spanBtn.textContent = hex
    container.style.backgroundColor = hex

})


function generator() {
    return Math.floor(Math.random() * colors.length)
}