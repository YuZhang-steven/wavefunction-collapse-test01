import colorBox from './colorBox'
import './style.css'

let width = 10
let height = 7
let colorbox = new colorBox(width, height)





let grid = document.createElement('div')
grid.id = 'grid'
grid.className = 'grid'

document.body.appendChild(grid)

let boxnumber = 0

for (let i = 0; i < height; i++) {

  let row = document.createElement('div')
  row.id = `row${i}`
  row.className = 'row'
  document.getElementById('grid').appendChild(row)
  for (let j = 0; j < width; j++) {

    let colorTag = colorbox.colorList[boxnumber]
    boxnumber++
    console.log(colorTag);
    console.log(`box${i}${j}`);

    document.getElementById(row.id).appendChild(colorbox.addBox(`box${i}${j}`, colorTag))
  }
}


