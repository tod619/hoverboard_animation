const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad','#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for(i=0; i< SQUARES; i++) {
    const squareEl = document.createElement('div')
    squareEl.classList.add('square')

    squareEl.addEventListener('mouseover', () => setColor(squareEl))

    squareEl.addEventListener('mouseout', ()=> removeColor(squareEl))


    container.appendChild(squareEl)
}

function setColor(square) {
    const color = getRandomColor()
    square.style.background = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.background = '#1d1d1d'
    square.style.boxShadow = '0 0 2px #000'
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}