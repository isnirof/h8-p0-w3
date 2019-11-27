function targetTerdekat(arr) {
  // you can only write your code here!
  foundX=false;
  foundO=false;

  for(i=0;i<arr.length;i++) {
    if(arr[i]=='x') {
      indexX=i;
      foundX=true;
    }
      
    else if(arr[i]=='o') {
      indexO=i;
      foundO=true;
    }

    if(foundO && foundX){
        gap=indexX-indexO;
        break;
    }
  }

  if (foundX && foundO) {
      return Math.abs(gap);
  }
  else {
      return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2