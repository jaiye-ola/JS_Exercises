// returns a final string with the first letter of each word capitalized and the subsequent letters all in lowercase
function titleCase(str) {
  const strArr = str.split(" ");
  let newWord = "";
  const finalArr = [];
  for (let i = 0; i < strArr.length; i++) {
    newWord = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
    finalArr.push(newWord);
  }
  let finalStr = finalArr.join(" ");
  return finalStr;
}

titleCase("I'm a little tea pot");
