/* Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top of the pyramid is the number 1.
 To generate further levels of the pyramid, every element is the sum of the element above and to the left with the
  element above and to the right. Non-existing elements are treated as 0 when calculating the sum.

Write a function pascalsTriangle that accepts a positive number, n, as an argument and returns a 2-dimensional
array representing the first n levels of Pascal's triangle. See the file for examples. */

//
function nextPascalRow(rowArray) {
  rowArray.push(0);
  rowArray.unshift(0);
  let newRow = [];
  for (let i = 0; i < rowArray.length - 1; i++) {
    newRow.push(rowArray[i] + rowArray[i + 1]);
  }
  //console.log("newRow:", newRow);
  return newRow;
}

function pascalsTriangle(noOfLayers) {
  let triangle = [[1]];
  console.log("org:", triangle);
  if (noOfLayers < 1) {
    return [];
  } else if (noOfLayers === 1) {
    return triangle;
  } else {
    console.log("B4 loop:", triangle);
    for (let i = 0; i < noOfLayers; i++) {
      let nextLine = nextPascalRow(triangle[i]);
      let rowNext = nextLine.slice();
      console.log("NL::", rowNext);
      triangle.push(rowNext);
    }
  }
  return triangle;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]
