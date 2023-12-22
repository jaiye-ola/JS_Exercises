// Aim is to check if all the letters of the second string is present in the first string
function mutation(arr) {
  const firstArr = [...arr[0].toLowerCase()];
  const secArr = [...arr[1].toLowerCase()];
  for (let i = 0; i < secArr.length; i++) {
    if (firstArr.indexOf(secArr[i]) === -1) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

mutation(["hello", "hey"]);
mutation(["Mary", "Aarmy"]);
