/* #1. Write a JavaScript function findMaxSequence(value) that finds the maximal sequence of equal elements in an array and returns the result as an array.
  Write JS program that invokes your function with the sample input data below and prints the output at the console. */
var numbs = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

function findMaxSequence(numbs){
  var maxSequence = [];
  var counter = 1;
  var maxLen = 0;
  var maxNumber = 0;
  
  for(var i = 1;i < numbs.length; i+= 1){
   
    if(numbs[i-1] == numbs[i]){
      counter++;
    }
    else {   
      if(counter > maxLen){
        maxLen = counter;
        maxNumber = numbs[i - 1];
        }
      counter = 1;
    }   
   
  }
  
  for(var j = 0; j < maxLen; j+=1){
    
   maxSequence.push(maxNumber); 
  }
  return maxSequence;
}
  
findMaxSequence(numbs);

/* #2. Write a JavaScript function findMaxSequence(value) that finds the maximal increasing sequence in an array of numbers and returns the result as an array.
 If there is no increasing sequence the function returns 'no'.
 Write JS program  that invokes your function with the sample input data below and prints the output at the console. */
 var n = [312, 55, 112, 100, 0, 2, 5, 13, 20, -3, 0, 1];

 function findMaxSequence(n){
  var counter = 1;
  var maxLen = 0;
  var numbs = [];
  
  for(var i = 1; i < n.length; i+= 1){
    if(n[i - 1] < n[i]){
      counter++;
    }         
    else {
      if(counter > maxLen){
       numbs = [];
       maxLen = counter;
       
       for(var j = 1; j < maxLen; j+=1){
         numbs.push(n[i - j]); 
       }
       
     }
     counter = 1;  
   }  
   
 }
 
 return numbs.sort( function (a,b){ return  a-b}); 
}

findMaxSequence(n);
  
/* #3. Sorting an array means to arrange its elements in increasing order. Write a JavaScript function sortArray(value) to sort an array. 
Use the "selection sort" algorithm: find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
 Write JS program  that invokes your function with the sample input data below and prints the output at the console */
 var numbs = [33, 18, 4, 6, 22, 50, 312, 444];
 function sortArray(numbs){
  var min = 0;
  var tempNum = 0;
  
  for(var i = 0; i < numbs.length; i+=1){
    for(var j = 1; j < numbs.length; j+=1){
      if(numbs[i] < numbs[j]){
        temp = numbs[i];
        numbs[i] = numbs[j];
        numbs[j] = temp;    
      }
    }
  }
  console.log(numbs);
}

sortArray(numbs);

 /* #4. Write a JavaScript function findMostFreqNum(value) that finds the most frequent number in an array.
 Write JS program that invokes your function with the sample input data below and prints the output at the console. */
var numbs = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

function findMostFreqNum(numbs){
  var sortedNumbs = numbs.sort(function (a, b){ return a-b });
  var counter = 1;
  var maxLen = 0;
  var mostFreqNumber = 0;
  for(var i = 1; i < sortedNumbs.length; i++){
 
   if(sortedNumbs[i-1] == sortedNumbs[i]){
         counter++;
      }
    else {
        if(counter > maxLen){
            maxLen = counter;
            mostFreqNumber = sortedNumbs[i - 1];
        }
        counter = 1;
    } 
  }
    console.log('Most frequent number is ' + mostFreqNumber);
  console.log('Matched ' + maxLen + ' times');
}

findMostFreqNum(numbs);