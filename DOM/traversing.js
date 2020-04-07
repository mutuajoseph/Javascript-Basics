// Refers to how to get the parent node of an element by using the Js parentNode attribute of the Node object

// To get a specific node in the DOM tree you use the parentNode property

// syntax
// let parent = node.parentNode

// Note that the parenNode is read-only

// If you happen to create a new node and you havent attached it to the DOM tree, the parentNOde of that node will also be null


let input = document.querySelector('.note')

console.log(input.parentNode)


// Siblings 

// how to select the nex siblings, previous siblings and all siblings of an element 

// use case example a list of navigation links

// To get to the next sibling you use the nextElementsSibling attribute

let list = document.querySelector('.current')

    nextSIbling = list.nextElementSibling.nextElementSibling
    // while(nextSIbling){
    //     console.log(nextSIbling)
    //     nextSIbling = list.nextElementSibling
    // }

console.log(nextSIbling)

// Get the previous siblings
// to get the previous siblings you use the previusElementSibling attribute

    previousSibling = list.previousElementSibling

    console.log(previousSibling)

// Get the first child element, last child element and all children of a specified element 

// To get the first child element of a specified element, you use the firstChild prperty of the element 
/* The firstChild property returns a child node which can be any node type such as an element node,
 a text node, or a comment node. 
*/

let content = document.getElementById('menu')
let firstChild = content.firstChild.nodeName
// getting the fitst child element
    firstChild = content.firstElementChild
// geting the last child element
    lastChild = content.lastElementChild
// getting all child nodes
    children =content.children
console.log(lastChild)
console.log(firstChild)
console.log(children)

/*    
The firstChild and lastChild return the first and last child of a node, which can be any node type including text node, comment node, and element node.
The firstElementChild and lastElementChild return the first and last child Element node.
The childNodes returns a live NodeList of all child nodes of any node type of a specified node. The children return all child Element nodes of a specified node.
*/
