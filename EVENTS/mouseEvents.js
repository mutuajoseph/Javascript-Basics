// MOUSE EVENTS 

// Basic mouse events and their properties in Javascript

// They fire when you use the mouse to interact with elements on the page 

// mousedown fires when you depress the mouse button on the element
// mouseup fires when you release the mouse button on the element
// click fires when mousedoen and mouseup is detected on the element
// mousemove fires repeatedly when you move the cusor around an element
// mouseover/mouseout fires when the mouse cursor is outside of te element and then move to inside the boundaries of the element
// mouseenter/mouseleave fires when the mouse cursor is outside of an element and then moves inside the boundaries of the element



// Registering a mouse event 

// First, select the elemrnt using the querySelector() or getElementById()
// Then, register the mouse event using the addEventListener() method

let btn1 = document.querySelector('#message')


btn1.addEventListener('mousemove', btn1Function)

function btn1Function(e){
    console.log('Im being hovered')
}


btn1.onmousemove = (e) => {
    console.log('Im being hovered');
}

// Mouse event example 

let btn2 = document.querySelector('#select')

btn2.addEventListener('contextmenu', (e) =>{
    e.preventDefault();
    e.stopPropagation()
})

btn2.addEventListener('mouseup', mouseClick);

function mouseClick(e){
    switch(e.button){
        case 0 :
            console.log("Left side of the mouse was clicked")
            break
        case 1 :
            console.log("Middle side of the mouse was clicked")
            break
        case 2 :
            console.log("Right part of the mouse was clicked")
            break
        default:
            console.log(`Mouse not clicked ${e.button}`)
    }
}