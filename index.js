/* SETUP DOM */
const container = document.querySelector('#container');
const sizeBtn = document.querySelector('#size-btn')
const clearBtn = document.querySelector('#clear-btn')

let boardSize = 16;

const clearBoard = () => {
    container.innerHTML=''
    getGrid(boardSize)
}
const resizeGrid = () => {
    if (container.hasChildNodes())
        container.innerHTML=''
    const sizeStr = prompt('How many pixels per edge would you like?')
    const value = parseInt(sizeStr)
    if (value === NaN || value > 100 || value < 0)
    alert(`invalid entry: ${value}, please enter a value between 1 and 100`)
    getGrid(value)
    boardSize = value
}

sizeBtn.addEventListener('click', resizeGrid)
clearBtn.addEventListener('click', clearBoard)

const getGrid = (size) => {
    if (container.hasChildNodes())
        clearBoard();
    for (let i=0; i<size; i++) {
        const newRow = document.createElement('div')
        newRow.className='grid-row'
        newRow.style.height=`${960/size}px`
        container.appendChild(newRow);
        for (let j=0; j<size; j++) {
            const newItem = document.createElement('div')
            newItem.className = 'grid-item'
            newItem.addEventListener('mouseover', () => 
                newItem.style.backgroundColor = '#05b')
            // newItem.addEventListener('mouseout', () => 
            //     newItem.style.backgroundColor = '#ddd')
            newItem.style.width=`${960/size}px`
            newRow.appendChild(newItem)
        }
    }
}
const changeBkgnd = (color) => {
    e.target.backgroundColor = color
}
getGrid(boardSize);