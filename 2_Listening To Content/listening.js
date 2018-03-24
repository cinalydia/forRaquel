/*eslint-env browser*/

/*Task: Practice extracting the user's text from the textboxes called 'Name', 'Age', and 'Number' and placing that content inside the <p>'s <span> tags. Then take the numbered values and perform mathmatical operations: add, subtract, multiply, and divide. Place the result of each operation inside a <span> tag.

Goal: Take content from one place and put it into a new place while also adding, subtracting, multiplying, and dividing the content's numbers. 

What you'll need to do:
1. Create a click event listener for the submit button by attaching it to the button's id.

2. Inside this event listener function, tell JavaScript to take the value of the textbox 'Name' and write it inside the inner HTML using the span's id "name". Do the same for the 'Age' and 'Number' textboxes.

3. Create a new click event listener for the clear button. Inside this event listener function, set the value of the textbox and the value of each <span> tag to nothing.

Reminder: You can tell JavaScript to set something to "nothing" by assigning/equaling a value to what JavaScript interprets as "nothing".

4. Within the "submit_btn" click event listener, after the first statement, take
the user's numbered values of 'Age' and 'Number' and tell JavaScript that you want them to be operated on mathematically.

You can do this by assigning/equaling the inner HTML of the "add" <span> to the value of "age_text" and "number_text", each separately wrapped inside the Number() method/function. Do this for the remaining "sub", "mul", and "div" mathematical operations. 

Hint: The Number() method/function can be used, in this instance, to evaluate the inputed values (i.e. the number that the user inputs in the 'Age' and 'Number' textboxes). It should look something like this:

something_1.innerHTML = Number($(something_2).value) + Number($(something_3).value);

By assigning/equaling the inner HTML of each <span> to the value of "age_text" and "number_text" wrrapped inside of the Number() function, you are telling JavaScript to evaluate the user's inputed values of "age_text" and "number_text". You are also telling JavaScript that when its done evaluating, write the result into the inner HTML of each corresponding <span> (i.e. if adding, the result will be written in the <span>'s "add" tag).

Helpful: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
*/

