// returns the first element from the arr that passes the function's test else returns undefined
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      console.log(num);
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
findElement([1, 3, 5, 9], function (num) {
  return num % 2 === 0;
});
