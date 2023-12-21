// checks if the specified ending is found in the given string
function confirmEnding(str, target) {
  // slices the array from the index of the target element and compares
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
// returns true
