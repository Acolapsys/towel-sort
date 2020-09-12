
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return []
  if (matrix.length === 0) return []
  let r = []
  for (let i = 0; i < matrix.length; i++) {
     (i % 2 === 0) ? r = r.concat(matrix[i]) : r = r.concat(matrix[i].reverse())
  }



  return r;
}
