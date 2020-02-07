function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = -1
  let indexX = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'x') {
      indexX = i;
    }
    else if (arr[i] == 'o') {
      indexO = i;
    }
    if (indexO !== -1 && indexX !== -1) {
      return Math.abs(indexX - indexO);
    }
  }
  return 0
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2