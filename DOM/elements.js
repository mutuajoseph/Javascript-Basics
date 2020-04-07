// ACCESSING AN ELEMENT BY THE ID

// we use the getElementById() function

/* Its a method of the document object and allows one to select
an element by its id */

// id represents the element that you want to get
/* It returns an element object that describes the DOM element
with the specified od or null incase no matching elemnent found
*/

// The id is also unique in the document
/* In that if a document has more that one element with the same 
id the getElementById() returns only the first one it encounters */

// Examples 

const p = document.getElementById('message')

console.log(p)

// ACCESSING AN ELEMENT(s) BY THE NAME 

// We use the getElementByName()

// In most cases elements in an HTML document can have name attributes
// The get element by name accepts a name which is the value of the name attributes of elements and returns a live Nodelist of elements
//  A node list is an array like object

// Example

let btn = document.getElementsByName('rate')

console.log(btn)

// Accesing an element by the tag name 

// We use the getElementByTagName() function

// Its a method that accepts a tag name and returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document
// The return collection of the getElementsByTagName() is live, meaning that it is automatically updated when elements with the matching tag name are added and/or removed from the document.
// the HTMLCollection is an array-like object, like arguments object of a function.

let tag = document.getElementsByTagName('h2')

console.log(tag)

// QUERY SELECTOR

// Its divide into two i.e querySelector() and querySelectorAll()
/* It does allow you to find the first element that is 
descendant of the parent element on which it is invoked that matches a CSS seletor or a group of CSS selectors */

// structure
// let element = parentNode.querySelector(selector)

// is the selector invoked is not valid a syntax error will be raised and if no element matches, the querySelector() returns a null value

// Examples

// universal selector
let element = document.querySelector('*')
// type selector
    element = document.querySelector('h1')
// class selector
    element = document.querySelector('.inputs')
// id selector
    element = document.querySelector('#polls')

console.log(element)

