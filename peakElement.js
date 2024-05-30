// A javaScript program find peak Element  in array



function findPeak(arr) {
    const n = arr.length;
    // console.log(n-1)
  
  let end = 0;
  while (end < n - 1 && arr[end] < arr[end + 1]) {
    end++;
  }

  
  if (end === n - 1) {
    return arr[n - 1];
  }

  // Otherwise, find the maximum element in the decreasing subarray
  let maxVal = arr[end];
  for (let i = end + 1; i < n; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }

  return maxVal;
}


var arr = [1, 3, 20, 4, 1, 1152424, 1152424, 1152424,0,110, 34];
console.log('the peak element is ' + findPeak(arr));

// function findMaxInBitonicArray(arr) {
//   const n = arr.length;
//   let maxVal = arr[0]; // Initialize maxVal to the first element

//   // Traverse the array and update maxVal
//   for (let i = 1; i < n; i++) {
//     // If the current element is greater than the previous element
//     if (arr[i] >= arr[i - 1]) {
//       // Update maxVal if the current element is greater
//       maxVal = Math.max(maxVal, arr[i]);
//     } else {
//       // If the current element is smaller than the previous element,
//       // it means we have reached the end of the increasing subarray
//       // and the maximum element must be in the increasing subarray
//       break;
//     }
//   }

//   return maxVal;
// }