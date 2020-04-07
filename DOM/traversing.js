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
