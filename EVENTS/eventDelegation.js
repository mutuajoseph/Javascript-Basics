// Event Delegation

/*
 How to use the Javascript event delegation that adds
 a single event handler to the pparent element instead of having to register multiple event hand;ers to 
 the child element

*/

// In a scenario whereby you have many childElements inside th parenElement
// creating an event for every single element would slow down the sit performance
// In such cases we then use bubbling to solve this problem


const mennu = document.querySelector('#mennu')

// console.log(mennu)

mennu.addEventListener('click', navigate)

function navigate(e){
    let target = e.target
    switch(target.id){
        case 'home' :
            console.log('The home link was clicked')
            break;
        case 'dashboard' :
            console.log('THe dashboard link was clicked')
            break;
        case 'report' :
            console.log('The report link was clicked')
            break;

    }
}