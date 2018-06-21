/*Write a JS function to print the numbers from 1 to n. Return a string holding HTML list with the odd lines in blue and even lines in green. See the example for more information.
The input comes as array of one string element, holding the number n.
The output should be returned as a result of your function in the form of a string.

Example
Input: 10
Output:
<ul>
  <li><span style='color:green'>1</span></li>
  <li><span style='color:blue'>2</span></li>
  <li><span style='color:green'>3</span></li>
  <li><span style='color:blue'>4</span></li>
  <li><span style='color:green'>5</span></li>
  <li><span style='color:blue'>6</span></li>
  <li><span style='color:green'>7</span></li>
  <li><span style='color:blue'>8</span></li>
  <li><span style='color:green'>9</span></li>
  <li><span style='color:blue'>10</span></li>
</ul>
*/

let number = 20 ;
let tags = [];

function printHTMLlist(input) {
    tags[0] = '<ul';
    for (let a = 1; a < input + 1; a++) {
        if (a % 2 === 0) {
            tags[a] = '<li> <span style=\'color: blue\'>' + a + '</span></li>';
        }
        else {
            tags[a] = '<li> <span style=\'color: green\'>' + a + '</span></li>';
        }
    }
    tags[input + 1] = '<\/ul>';
    return tags;
}

let result = printHTMLlist(number);
console.log(result);

