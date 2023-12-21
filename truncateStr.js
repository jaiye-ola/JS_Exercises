// returns the truncated part of str if the string's length is greater than num
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// returns "A-tisket..."
