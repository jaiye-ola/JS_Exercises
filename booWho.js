// returns true only if bool is the value true or false
function booWho(bool) {
  if ((bool === true) | (bool === false)) {
    return true;
  }
  return false;
}

booWho(null);
// returns false;
