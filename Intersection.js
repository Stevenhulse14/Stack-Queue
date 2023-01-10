//PROMPT

// Given two sorted arrays of numbers, return an array containing all values that appear in both arrays.
// The numbers in the resulting array (the "intersection") may be returned in any order, they needn't be sorted.
// You can assume that each array has only unique values (no duplicates within the array).
// Follow-up: now consider what you might do if the given arrays are not sorted.
//intersection([1,4,9,10,11], [2,3,4,5,8,10]);  should return [4, 10]

//(numbers can be in any order)

let first = [1, 4, 9, 10, 11];
let second = [2, 3, 4, 5, 8, 10];

/*
    (1) => 2, 3 => reaches the end of the array
    (4)
    Big O  n^2



*/
const intersection = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) return [];

  let set = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k]) {
        set.push(arr1[i]);
      }
    }
  }

  return set;
};

function interSet(arr1, arr2) {
  let smaller = arr1.length < arr2.length ? arr1 : arr2;
  let bigger = arr1.length > arr2.length ? arr1 : arr2;

  const mySet = new Set(smaller);

  return bigger.filter((item) => mySet.has(item));
}

console.log(interSet(first, second));
