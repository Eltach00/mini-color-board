const board = document.getElementById('board')
const SQUARES_NUMBER = 500
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', (e) => setColor(e.target))
  square.addEventListener('mouseleave', (e) => removeColor(e.target))
  board.append(square)
}

function getRandomColor(colors) {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function setColor(target) {
  const color = getRandomColor(colors)
  target.style.backgroundColor = color
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(target) {
  target.style.backgroundColor = '#1d1d1d'
  target.style.boxShadow = `0 0 2px #1d1d1d`
}
