// FUNCTIONS

// FUNCTION DECLARATION
// Use the fuction keyword to initialize a function
// In functions one can also pass arguments while calling the function
// This is accomplished by passing parameters in your function
// We can also use default parameters to rectify the error or an undefined output

function helloVisitor(firstname ='John', lastname='Doe') {
    console.log(`Hello ${firstname} ${lastname} and welcome to our website`)
}

helloVisitor()

// We can also return some statement inside our function
// Youll notice that once we call the function there will be no output at all
// To solve this we need to call the function using a varialble and a keyword
// Then output it using the console.log
// With this method you can reuse the function again 

function addition(num1, num2) {
    return num1 + num2
}

let total = addition(10,20)

let result = addition(20,20)
console.log("total: ",total)
console.log("result: ",result)


// FUNCTION EXPRESSION

// we declare a variable that will be equal to the function that is going to be created 
// We use default parameters to deviated the NaN output


const sum = function(num1 = 0,num2 = 0) {

    return num1 + num2
}

console.log("sum = ",sum(1,1))

// Immediatetly - Invoked Function Expression IIEFI

// (function() {
//     console.log('Learning');
// })();

// Property methods 

const musicPlayer = {
    play: function(id = 0) {
        console.log(`Playing music with the id ${id}`)
    },
    pause: function(){
        console.log('Music paused')
    }

}

musicPlayer.play(20)
musicPlayer.pause()

// methods can also be placed outside the object

musicPlayer.remove =function(id = 0){
    console.log(`Remove song with the id ${id}`)
}

musicPlayer.remove(2)