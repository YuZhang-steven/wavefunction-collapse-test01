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
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let colorTag = '#' + randomColor

    document.getElementById(row.id).appendChild(colorbox.addBox(`box${i}${j}`, colorTag))
  }
}


