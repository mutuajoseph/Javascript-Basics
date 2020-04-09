// Introduction to events

/* 
An event is a action that occurs in the web browser, which the web browser feedbacks to you so 
that you can respond to it.

Each event executed may have an event handler(also known as an event listener) that is executed when the event oocurs.

*/

// Example 1

// Creating an event that handles on click. An alert message pops up once the button is clicked

// Access the element 
const click = document.querySelector('#click')

// Add an event to the element
click.addEventListener('click', afterClick)

// create a function than will be exexuted once the event occurs
function afterClick(e){
    alert("You have just clicked a button")
    // Event object type 
    console.log(`you have clicked ${e.type}`)
    // By using the preventDefault property the default behaviour of the event is change 
    // BUt the event is still executed
    e.preventDefault()
}


// Event Bubbling 

// This is whereby an event starts from the specific element and then flows upward toward the least specific element (i.e the document or the window)
//  When you click the button, the click event occurs in the following order:
/*  
1.button - which is the element that was clicked 
2.div with the container
3.body
4.html
5.document
*/

// Event Capturing

// This is whereby an event starts from the least specific element flowing downwards to the most specific element
// When you click the button the click event occurs in the following order 

/*
1.document
2.html
3.body
4.div with the id container
5.button
*/

// DOM Level 2 Event flow
/* 
It has three specific phases:
    1. Event capturing - an opportunity to intercept the event is provided 
    2. the target receives the element
    3. Event bubbling - The event responds 

*/

// stopPropagation() property

// It immediately stops the flow of an event through the DOM tree
// However, it does not stop the browsers default behaviour

const pizza = document.querySelector('#pizza')

pizza.addEventListener('click' , function(event){
    console.log('The button was clicked')
    event.stopPropagation();
})

document.body.addEventListener('click', function(event){
    console.log('The body was clicked')
})

// Summary

/*
An event is an action that occurs in the web browser e.g., a mouse click.
Event flow has two main models: event bubbling and event capturing.
DOM Level 2 Event specifies that the event flow has three phases: event bubbling, the event occurs at the exact element, and event capturing.
Use addEventListener() to register an event that connects an event to an event listener
The event object is accessible only within the event listener.
Use preventDefault() method to prevent the default behavior of an event, but does not stop the event flow.
Use stopPropagation() method to stop the flow of an event through the DOM tree, but does not cancel the browser default behavior.
*/