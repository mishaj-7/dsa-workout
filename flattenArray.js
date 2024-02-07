const arr = [
  1,
  [2, 3, [4, 5]],
  [6, [7, [8, [9, 10], 11], 12], 13],
  14,
  [15, [16, 17], 18],
  19,
];
arr1 = 10;

// console.log(Array.isArray(arr1))

function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
}

console.log(flattenArray(arr));
