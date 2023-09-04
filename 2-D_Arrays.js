// /* Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of
// all numbers. */

// function twoDimensionalSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         let subArray = arr[i]
//         for (let j = 0; j < subArray.length; j++) {
//             sum += subArray[j];
//         }
//     }
//     return sum;
// }

// let arr1 = [
//     [1, 3],
//     [-4, 7, 10],
//     [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [
//     [],
//     [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6

// /* Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function
//  should return the total product of all numbers multiplied together. */

//  function twoDimensionalProduct(array) {
//     let product = 1;
//     for (let i = 0; i < array.length; i++){
//         let subArray = array[i]
//         for (let j = 0; j < subArray.length; j++) {
//             product *= subArray[j];
//         }
//     }
//     return product;
//  }

//  let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88

/* Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value
 in the matrix. The matrix contains at least one value. */

// function maxInMatrix(matrix) {
//   let largestNumber = matrix[0][0];
//   for (let i = 0; i < matrix.length; i++) {
//     let subArray = matrix[i];
//     for (let j = 0; j < subArray.length; j++) {
//         if (subArray[j] > largestNumber) {
//         largestNumber = subArray[j];
//       }
//     }
//   }
//   return largestNumber;
// }
// matrix = [[11,  2,-99],
//           [20, 19, 10],
//           [47, 72, 56]]

// console.log(maxInMatrix(matrix)); // 72

/* Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing
 the maximum value in each column. The array length should be equal to the number of columns, such that
  returnArray[i] is equal to the max value in the ith column. */

// function maxColumn(matrix) {
//   let maxArray = matrix[0];
//   for (let i = 1; i < matrix.length; i++) {
//     let subArray = matrix[i];
//     for (let j = 0; j < subArray.length; j++) {
//       if (maxArray[j] < subArray[j]) {
//         maxArray[j] = subArray[j];
//       }
//     }
//   }
//   return maxArray;
// }
// matrix = [[ 5,  9, 21],
//           [ 9, 19,  6],
//           [12, 14, 15]]

// console.log(maxColumn(matrix)); // [12, 19, 21]

/* Write a function zip that accepts two arrays as arguments. The function should return a two dimensional
array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You
 may assume that the input arrays have the same length. */

// function zip(arr1, arr2) {
//     let newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArray.push([arr1[i], arr2[i]])
//     }
//     return newArray;
// }

// console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

// console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// // [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

// console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/* Write a function zanyZip that accepts two arrays as arguments. The function should return a two dimensional
array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of
 the arrays is shorter than the other, then substitute null for the missing elements.
 */

// function zanyZip(arr1, arr2) {
//   let longArr;
//   let shortArr;
//   if (arr1.length >= arr2.length) {
//     longArr = arr1.slice();
//     shortArr = arr2.slice();
//   } else {
//     longArr = arr2.slice();
//     shortArr = arr1.slice();
//   }

//   let newArray = [];

//   //loop the longest
//   for (let i = 0; i < longArr.length; i++) {
//     if (i >= shortArr.length) {
//       newArray.push([longArr[i], null]);
//     } else {
//       newArray.push([longArr[i], shortArr[i]]);
//     }
//   }
//   return newArray;
// }

// console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

// console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

// console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/* A 2-dimensional array is also known as a "matrix". Write a function matrixAddition that accepts two matrices
 as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return
 a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same
  positions. */

// function matrixAddition(arr1, arr2) {
//   let newArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let subArray = arr1[i];
//     let addedSubArray = [];
//     for (let j = 0; j < subArray.length; j++) {
//       //   console.log("i:", i, "j", j);
//       //   console.log(arr1[i][j]);
//       //   console.log(arr2[i][j]);
//       addedSubArray.push(arr1[i][j] + arr2[i][j]);
//     }
//     newArray.push(addedSubArray);
//   }
//   return newArray;
// }

// let matrixA = [
//   [2, 5],
//   [4, 7],
// ];
// let matrixB = [
//   [9, 1],
//   [3, 0],
// ];
// let matrixC = [
//   [-1, 0],
//   [0, -1],
// ];
// let matrixD = [
//   [2, -5],
//   [7, 10],
//   [0, 1],
// ];
// let matrixE = [
//   [0, 0],
//   [12, 4],
//   [6, 3],
// ];

// console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
// console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
// console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
// console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]

/* Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky
numbers in any order. A lucky number is the minimum element in its row and the maximum in its column. */

// returns the index of the smallest 1D_array value(assuming unique numbers)
function indexOfSmallest(array) {
  smallest = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[smallest]) {
      smallest = i;
    }
  }
  return smallest;
}

// console.log(indexOfSmallest([1, 2, 3])); // 0
// console.log(indexOfSmallest([3, 2, 1])); // 2
// console.log(indexOfSmallest([1, 2, 3, 4, 0])); // 4

//takes a 2d array(matrix) and returns the largest value in the column of the given index
function largestInColumn(array, index) {
  let largest = array[0][index];

  for (let i = 1; i < array.length; i++) {
    if (array[i][index] > largest) {
      largest = array[i][index];
    }
  }
  return largest;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

// console.log(largestInColumn(matrix, 0)); // [12]
// console.log(largestInColumn(matrix, 1)); // [19]
// console.log(largestInColumn(matrix, 2)); // [21]

function luckyNumbers(matrix) {
  let magicNumbers = [];
  //loop all submatrices
  for (let i = 0; i < matrix.length; i++) {
    // find min value index in the submatrix
    let subArray = matrix[i];
    let minIndex = indexOfSmallest(subArray);
    // find the largest value in the rows with that index
    let largestColumnValue = largestInColumn(matrix, minIndex);
    // compare largestColumnValue to subArray[minIndex] to see if they are magic numbers
    if (largestColumnValue === subArray[minIndex]) {
      magicNumbers.push(subArray[minIndex]);
    }
  }
  return magicNumbers;
}

matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
