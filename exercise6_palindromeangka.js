function checkPalindrome(input) {
    let stringInput = String(input)
    for (let i = 0; i < stringInput.length; i++) {
        if (stringInput[i] !== stringInput[stringInput.length - 1 - i]) return false
    }
    return true
}

function angkaPalindrome(num) {
    // you can only write your code here!
    num = num + 1;
    while (!checkPalindrome(num)) {
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