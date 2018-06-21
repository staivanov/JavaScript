/* #1. Write a function that reverses the digits of given decimal number. Example: 256  652 */
      var num = 623;

      function reversDigit(num){
        var numberToString = num.toString();
        var reversedNumber = '';

        for (var i = numberToString.length - 1; i >= 0; i--) {
           reversedNumber += numberToString[i]
        };
      return reversedNumber;
      }

      reversDigit(num)
/* #2. Write a JavaScript function countSubstringOccur(value). 
The function finds how many times a substring is contained in a given text (perform case insensitive search). 
Write JS program  that invokes your function with the sample input data below and prints the output at the console. */
var text = 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
var keyword = 'in';

function countSubstringOccur(keyword, text){
  var matchedCounter = 1;
  var splitedText = text.split(' ');
  var pattern = new RegExp(keyword, 'i');

  for( c in splitedText){
   {
    if(splitedText[c].match(pattern) != null) {
      matchedCounter++;
    }
   }
  }
  console.log(matchedCounter);
}

countSubstringOccur(keyword, text); 

/* #3. Write a function that counts how many times given number appears in given array. Write a test function to check if the function is working correctly. */
// 55 -> 3; 1 -> 2; 33 -> 4; 17 -> 3; 0 -> 1; 312 -> 1
var numbers = [55, 1, 33, 17, 55, 0, 1, 55, 33, 33, 33, 17, 312, 17];

function countNumbers(numbers){
  var numCounter = {};
  
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if(!numCounter[num]){
      numCounter[num] = 0;
    }
    numCounter[num] += 1;
  };

  for(n in numCounter){
    console.log('Number ' + n + ' have  ' + numCounter[n] + ' matched');
  }
}

countNumbers(numbers);

/* #4. Write a function that checks if the element at given position in given array of integers is bigger than its two neighbors (when such exist). */
var numbs = [5, 3, 5, 3, 12, 3, 9, 9, 5, 9,9, 12];
var index = -1;

function biggerNeighbors(numbs, index){
 var negativeArrayIndex = -1;

 if(index <= negativeArrayIndex) {
  console.log('Index can\'t be negative');
}
else if(numbs.length <= index){
 console.log('Index is out of range');
  }
  else if(index == 0) {
 console.log('Element don\'t have two neighbors');
  }
  else if(index == (numbs.length - 1)) {
 console.log('Element don\'t have two neighbors');
  }
  else {
 for(var i = 0, len = numbs.length; i < len; i+= 1){
   if((numbs[index - 1] < numbs[index]) && (numbs[index] > numbs[index + 1])) {
     return numbs[i];
   }
 }
  }
}
biggerNeighbors(numbs, index);

/* #5. Write a function that returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element. 
Use the function from the previous exercise. Use the function from the previous exercise.
 */
 var numbs = [5, 3, 5, 3, 12, 3, 9, 9, 5, 9,9, 12];
 var index = 3;

 function biggerNeighbors(numbs, index){
  var negativeArrayIndex = -1;

  if(index <= negativeArrayIndex) {
   console.log('Index can\'t be negative');
 }
 else if(numbs.length <= index){
  console.log('Index is out of range');
}
else if(index === 0) {
  console.log('Element don\'t have two neighbors');
}
else if(index === (numbs.length - 1)) {
  console.log('Element don\'t have two neighbors');
}
else {
  for(var i = 1, len = numbs.length; i < len; i+= 1){

    if((numbs[index - 1] < numbs[index]) && (numbs[index] > numbs[index + 1])) {
      return index;
    }
    else {
      return -1
    }  
  }
}
}

var s = biggerNeighbors(numbs, index);
console.log(s);

/* #6. Write a JavaScript function replaceSpaces(value) that replaces the white-space characters in a text with &nbsp;. 
Write JS program  that invokes your function with the sample input data below and prints the output at the console. */
var text = 'But you were living in another world trying to get your message through';
var splitedText = text.split(' ');
console.log(splitedText);
var textWithoudWhitespace = splitedText.join('');
console.log(textWithoudWhitespace);