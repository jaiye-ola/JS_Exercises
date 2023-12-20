// Reverses a string 
function reverseString(str) {
  const arrString = [];
  for (let i = 0; i < str.length; i++) {
    arrString.unshift(str[i]);
  }
  str = arrString.join("");
  console.log(str);
  return str;
}

reverseString("hello");
