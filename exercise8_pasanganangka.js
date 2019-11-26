function pasanganTerbesar(num) {
  // you can only write your code here!
  max=0;
  while(num>10) {
      sisa=num%100;
      num=Math.floor(num/10);
      if(sisa>max) {
          max=sisa;
      }
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(100020));