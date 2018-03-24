/*eslint-env browser*/

/*Task: Practice extracting the user's text from the textbox called 'Name' and placing it inside the <p>'s <span> tag. Then practice clearing the text from the box and the page.

Goal: Take content from one place and put it into a new place.

What you'll need to do:
1. Create a click event listener for the submit button by attaching it to the button's id.

2. Inside this event listener function, tell JavaScript to take the value of the textbox 'Name' and write it inside the document's inner HTML by using the <span>'s id "submitted_text". You can do this by getting the value of the <span> "submited_text" and assigning/equaling it to the value of 'Name' by its id "text".

3. Create a new click event listener for the clear button. Inside this event listener function, set the value of the textbox and the value of the <span> tag to nothing.

Hint: You can tell JavaScript to set something to "nothing" by assigning it a value to what JavaScript interprets as "nothing" (i.e. null or a blank, like "").

Helpful: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

Use this "helper" function (the dollar sign, $) instead of: window.document.getElementById("");

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

Reminder: Event listeners use a function to perform the needed task. The function inside each event listener will be doing the actual work. Think of the event listener's function in the same way as regular functions, in that they also hold a set of statements (things to perform/do) that are only performed when they are "called". However, unlike the "calling" of a regular function where you (the programer) manually write the function name (e.g. "functionWrite();"), JavaScript will call the function for you by "listening" to a user's action. The "calling" of the event listener's function is automatically initiated once the user does an action, like a "click".
*/

