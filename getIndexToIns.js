// Aim is to simply sort the arr in increasing order find the first index at which num is less than and return that index
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  if (arr.length == 0) {
    console.log(0);
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      console.log(i);
      return i;
    } else if (num > arr[arr.length - 1]) {
      return arr.length;
    }
  }
}

// getIndexToIns([40, 60], 50);
getIndexToIns([], 1);
