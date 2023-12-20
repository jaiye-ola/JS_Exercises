// Loops through all the words in a string and returns the length of the longest word

function findLongestWordLength(str) {
  let wordRegex = /\w+/ig;
  const strArr = str.match(wordRegex);
  console.log(strArr);
  let length = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > length) {
      length = strArr[i].length;
      console.log(length);
    };
  };
  return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// returns 6
