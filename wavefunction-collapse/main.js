import colorBox from './colorBox'
import './style.css'

let colorbox = new colorBox()



let grid = document.createElement('div')
grid.id = 'grid'
grid.className = 'grid'

document.body.appendChild(grid)

for (let i = 0; i < 7; i++) {

  let row = document.createElement('div')
  row.id = `row${i}`
  row.className = 'row'
  document.getElementById('grid').appendChild(row)
  for (let j = 0; j < 10; j++) {
    var randomRed = Math.floor(Math.random() * 255)
    var randomGreen = Math.floor(Math.random() * 255)
    var randomBlue = Math.floor(Math.random() * 255)
    let colorTag = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    console.log(colorTag);
    console.log(`box${i}${j}`);

    document.getElementById(row.id).appendChild(colorbox.addBox(`box${i}${j}`, colorTag))
  }
}


