/*eslint-env browser*/

/*Task: Part One // Practice extracting the user's text from the textboxes called 'Last Name', 'First Name', and 'Age' and placing that content inside the "result" <input> textbox. Part Two // Practice extracting the <input> values of "one", "two", "three", "add", and "equal" and placing that content inside the "calculate" <input> textbox.

Goal: Take content from one textbox and place it into a new textbox while also placing the values of numbered buttons into a textbox and performing a mathematical operation.

What you'll need to do:

//Part One
1. Create an event listener for "submit_btn".

2. Add and assign/plusequal the value of "result" to each extracted value of "firstname_text", "lastname_text", and "age_text".

3. Create a new event listener for "clear_btn". Assign/equal values for "firstname_text", "lastname_text", "age_text", and "result" to "nothing".

//Part Two
1. Create event listeners for each <input> button (for a total of six event listeners). Inside each event listener's function, except for "equal" and "clear_calc", add and assign/plusequal the value of "calculate" to the value of each numbered <input> button. 

2. Inside the event listener for "clear_calc", assign/equal the value of "calculate" to "nothing."

3. Inside the event listener for "equal", tell JavaScript to evaluate the value of whatever is inside the "calculate" textbox. You can do this by assigning/equaling the value of "calculate" to the eval() of the value of "calculate". It should look something like this:

$("something_1").value = eval($("something_1").value);

Hint: The eval() method/function takes strings and evaluates them as numbers. If you wrap the values of each numbered <input> button inside the eval() function, then the result will be a number. Similar to what was done for "listen.js", in this instance, instead of writing the result to the inner HTML, the result will be written to the inside of a textbox.

Helpful:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
*/

