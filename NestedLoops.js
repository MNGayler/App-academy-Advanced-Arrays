/* Write a function pairsMaker(arr) that takes in a an array as an argument. The function should return
 a 2D array where the subarrays represent unique pairs of element from the input arra */

function pairsMaker(arr) {
  let pairsArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      pairsArray.push([arr[i], arr[j]]);
    }
  }
  return pairsArray;
}

console.log(pairsMaker(["a", "b", "c", "d"])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(["Rosemary", "Alex", "Connor"])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]

/* Write a function twoSum(arr, target) that accepts an array and a target number as args. The function
should a return a boolean indicating if two distinct numbers of the array add up to the target value. You can
 assume that input array contains only unique numbers. */

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

/* Write a function pairProduct that accepts an array of numbers and a product as arguments. The function should
 return a boolean indicating whether or not a pair of distinct elements in the array result in the product when
 multiplied together. You may assume that the input array contains unique elements. */

function pairProduct(arr, product) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === product) {
        return true;
      }
    }
  }
  return false;
}

console.log(pairProduct([4, 2, 5, 8], 16)); // true
console.log(pairProduct([8, 1, 9, 3], 8)); // true
console.log(pairProduct([3, 4], 12)); // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)); // true
console.log(pairProduct([4, 2, 5, 7], 16)); // false
console.log(pairProduct([8, 4, 9, 3], 8)); // false
console.log(pairProduct([3], 12)); // false

/* Write a function strangeSums that accepts an array of numbers as an argument. The method should return a
count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array
contains unique elements. */

function strangeSums(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        count++;
      }
    }
  }
  return count;
}
console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0
