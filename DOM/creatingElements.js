//  create a new element

// create a new anchor 
const newlink = document.createElement('a')

// Add a class 
newlink.className = 'link'

// add the href
newlink.href = '#'

// add text 

newlink.appendChild(document.createTextNode('Contact'))

// add the element 
document.querySelector('#menu').appendChild(newlink)

console.log(newlink)


// New link element exercise

const news = document.createElement('li')

news.className = 'list'

news.appendChild(document.createTextNode('News Update'))

document.querySelector('#menu').appendChild(news)
console.log(news)



// Replace an element 

// create a new element
const newHeading = document.createElement('h2')

// Add an id to the element
newHeading.id = 'heads'

// Add text to tehe element
newHeading.appendChild(document.createTextNode('Welcome to the world of javascript'))

// Access te old heading t be replaced
const oldHeading = document.querySelector('#heading')

// Access the parent node which has the heading as the child 
const parent = document.querySelector('#main')

// Replace the heading using the .replaceChild which takes in two parameters i.e the old element and the one to be replaced
parent.replaceChild(newHeading, oldHeading)
console.log(parent)
console.log(newHeading)


// Removing elements

// access the elements by selecting them all using the querySelectorAll
const links = document.querySelectorAll('.first')

// select the element to e deleted then use the .remove() property to delete the element 

links[0].remove()

console.log(links)

// Another way of deleting elements using the removeChild property

const nav = document.querySelector('#nav_links')

const link = document.querySelectorAll('#nav_links .link')

nav.removeChild(link[1])

console.log(nav)
console.log(link)



// Classes, Ids and Attributes 

// How to read a class
const classes = document.querySelector('.first')

let elements;

elements = classes;

// Access the class name
elements = classes.className;

// Access the class as [DOM Token List]

elements = classes.classList

// Add a new class

classes.classList.add('pizza')

// to remove the link

classes.classList.remove('pizza')
console.log(elements)
