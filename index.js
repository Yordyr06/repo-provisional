// Funcion para dibujar y capturar la diagonal 
const drawDiagonal = (arr) => {
  const diagonal = []
  
  arr.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
      if (rowIndex === colIndex) {
          diagonal.push(col)
          }
      })
  })

  return diagonal
}

// agrupando las diagales en un objeto
const diagonals = {
  firstDiagonal:  drawDiagonal(arr),
  secondDiagonal: drawDiagonal(arr.reverse()).reverse()
}

// Resta absoluta
const result = (
  Math.abs(
      diagonals.firstDiagonal.reduce((sum, element) => sum + element) -
      diagonals.secondDiagonal.reduce((sum,element) => sum + element)
  ) 
)

return result