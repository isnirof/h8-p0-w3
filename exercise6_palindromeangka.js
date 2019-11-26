function checkPalindrome(input) {
    hasil=0;
    tampung=input;

    while(input>0) {
        sisa=input%10;
        input=Math.floor(input/10);
        hasil=hasil*10 +sisa;
    }

    if(hasil==tampung) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(checkPalindrome(121));
// console.log(checkPalindrome(90));

function angkaPalindrome(num) {
    // you can only write your code here!
    num=num+1;
    while(!checkPalindrome(num)) {
        num++;
    }
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001