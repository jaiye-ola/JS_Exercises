// splices arr2 from index n  and replaces it with arr1
function frankenSplice(arr1, arr2, n) {
  const firstArr = [...arr1];
  const secArr = [...arr2];
  const insertArr = arr2.slice(n);
  // console.log(insertArr);
  insertArr.unshift(...firstArr);
  // console.log(insertArr);
  // console.log(secArr);
  secArr.splice(n, secArr.length - n, ...insertArr);
  console.log(secArr);
  return secArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
