/* #1. Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags.
<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>
Result:
Sample site text more text and more...in body
*/
var htmlText = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';

function extractTextFromHTML(htmlText){
	var tags = /\w?[a-z]{1,}+?/;

}

var tags = /(<\w{1,}>)|(<\/\w{1,}>)/g;
var s = htmlText.replace(tags,' ');
console.log(s);

/* #2. Write a script that parses an URL address given in the format:
[protocol]://[server]/[resource]
and extracts from it the [protocol], [server] and [resource] elements. Return the elements in a JSON object.
For example from the URL
 http://www.devbg.org/forum/index.php the following information should be extracted:
{protocol: 'http',
 server: 'www.devbg.org', 
 resource: '/forum/index.php'}
*/
var text = "http://www.devbg.org/forum/index.php";

function extractURL(text){
	var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
	var result = text.match(url);
	var fullurl = result[0];
	var protocol = result[1];
	var server = result[2]; 
	var resource = result[3]; 

  	var resultObj = {
  		protocol: protocol,
  		server: server,
  		resource: resource
  	}

  	return resultObj
}

var extracted = extractURL(text);
console.log(extracted);

/* #3. Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a>
 with corresponding tags [URL=…]…/URL]. Sample HTML fragment:
<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course.
 Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>
 Result
<p>Please visit [URL=http://academy.telerik. com]our site[/URL] to choose a training course.
 Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>*/
 var text = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course.Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

 function replaceAHrefWithURL(text){
 	var openTag = '[URL=';
 	var closeTag = '[/URL]';
 	var replacedOpenTag = text.replace(/<a href=/g, openTag);
 	var fullReplacedText = replacedOpenTag.replace(/<\/a>/g, closeTag);
 	return fullReplacedText;
 }

var rTest = replaceAHrefWithURL(text);
console.log(rTest);

/* #4. Write a function for extracting all email addresses from given text. All substrings that match the format <identifier>@<host>…<domain> should be recognized as emails.
 Return the emails as array of strings.*/
 
var text = 'Ok, let\'s make some test with fake email like knija@abv.bg or other fake email maybe shish_tuz@gmail.com . We can try with sharo15@yahoo.com';

function extractAllEmailAdressess(text){
	var splitedText = text.split(' ');
	var emails = [];

	for(var i = 0, len = splitedText.length; i < len; i+=1){

		var isValid = validateEmail(splitedText[i]);
		if(isValid){
			emails.push(splitedText[i]);
		}
	}

	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}

	return emails;
}

var extractedEmails = extractAllEmailAdressess(text);
console.log(extractedEmails);

/* #5. Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".*/
var text = 'Mama mia ABBA HERE I GO AGAIN Lamal james maika Ehe shte gi smajesh ehe bash bai ganio ROTOR ';

function extractPalindromes(text) {

	var splitedText = text.split(" ");
	var p = [];

	for(var wordIndex = 0, lenSplittedText = splitedText.length; wordIndex < lenSplittedText; wordIndex+= 1) {

		var word = splitedText[wordIndex];

		for (var i = 0, wordLen = Math.floor(word.length / 2); i < wordLen; i+=1){
			if(word[i] == word[word.length - 1 - i]){
				p.push(word);
			}
		}
	}

	return p;
};

var palindromes = extractPalindromes(text);
console.log(palindromes);

