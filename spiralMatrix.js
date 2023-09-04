/* Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array
 containing the elements in spiral order.
 */

function spiralOrder(matrix) {
  let removed = [];

  while (matrix.length > 0) {
    //remove first sub-array(matrix[0]) and push items into removed
    if (matrix.length === 0) {
      return removed;
    }
    let firstArray = matrix.shift();

    for (let i = 0; i < firstArray.length; i++) {
      removed.push(firstArray[i]);
    }

    if (matrix.length === 0) {
      return removed;
    }
    //last values in all sub-arrays bar last;
    for (let i = 0; i < matrix.length - 1; i++) {
      removed.push(matrix[i].pop());
    }

    if (matrix.length === 0) {
      return removed;
    }

    // remove the last array from matrix and add contents in reverse to removed
    let lastArray = matrix.pop();
    for (let i = lastArray.length - 1; i >= 0; i--) {
      removed.push(lastArray[i]);
    }

    if (matrix.length === 0) {
      return removed;
    }

    //remove first items from all remaining submatrices from the bottom putting them into removed.

    for (let i = matrix.length - 1; i >= 0; i--) {
      let subArray = matrix[i];
      removed.push(subArray.shift());
    }
  }
  console.log(matrix);
  return removed;
}

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
