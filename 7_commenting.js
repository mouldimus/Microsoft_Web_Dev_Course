// Single line comments can be used to explain a single line of code
/*
Multiple line comments can be used to explain multiple lines of code
Like this
*/

// To start with you'll comment everything in your code.

// But if your code cant be understood by someone that knows javaScript
// it might be worth refactoring the code to make it easier to understand
// rather than putting comments everywhere.

// for example

// this code selects the text from an element
var id = "myElement";
var element = document.getElementById(id);
var elementText = element.innerText;

// This does the same thing
// But the function name makes it self documenting
function getElementInnerTextById(id) {
  return document.getElementById(id).innerText;
}
