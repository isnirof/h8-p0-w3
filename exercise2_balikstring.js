
function BalikString(word){
  balik='';
  for(i=word.length-1;i>=0;i--) {
    balik+=word[i];
  }
  return balik;
}

console.log(BalikString("Hello World!"));
console.log(BalikString("isnirof"));
