
function BalikString(word) {
  result = '';
  for (i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  return result;
}
console.log(BalikString("Hello World!"));
console.log(BalikString("isnirof"));
