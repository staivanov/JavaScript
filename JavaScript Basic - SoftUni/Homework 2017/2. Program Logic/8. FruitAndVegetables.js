/*8.	Fruit or Vegetable
Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string.
•	Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
•	Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
•	All others are unknown
The input comes as array of one string element, the name of the fruit.
The output should be printed to the console.
*/

function eatingChecker(input) {

    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    for(let a = 0; a < fruits.length; a++){
        if(fruits[a] == input){
            return 'fruit';
        }
        else if(vegetables[a] == input){
            return 'vegetable';
        }
    }
    return 'unknown';
}

var result = eatingChecker('banana');
console.log(result);