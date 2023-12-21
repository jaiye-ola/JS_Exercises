// returns a new array which removes all falsy values without modifying the original array
function bouncer(arr) {
  const updatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      updatedArr.push(arr[i]);
    }
    console.log(updatedArr);
  }
  return updatedArr;
}

bouncer([7, "ate", "", false, 9]);
