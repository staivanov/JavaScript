/*Write a JS function that checks if an input string is a palindrome.
The input comes as an array with a single string element.
The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.
*/

let word = ['racecar'];

function palindromeChecker(input) {
    let isPalindrome = true;
    let wordLen = input[0].length;
    let inputedWord = input[0];

    for (let leftToRight = 0, rightToLeft = wordLen - 1; leftToRight < wordLen / 2, rightToLeft > wordLen / 2; leftToRight++ , rightToLeft--) {
        if (inputedWord[leftToRight] == inputedWord[rightToLeft]) {
            isPalindrome = true;
        }
        else {
            return isPalindrome = false;
        }
    }
    return isPalindrome;
}

console.log(palindromeChecker(word));