// CONDITIONAL STATEMENTS

// EQUALL TO 

const person = true

if(person == true){
    console.log("I am black")
} else{
    console.log("I am white")
}

// NOT EQUAL 

const score = 100;

if(score != 100){
    console.log("Not equal to the score")
}else{
    console.log("Equal to the score")
}

// STRICT COMPARISON
// It does check the condition given and also the typeof the element in being checked 
// This also applies to the not equal conditional statement (!==)

const age = 30;

if(age === '30'){
    console.log('Yes they\'re the same')
}else{
    console.log('No they\'re different')
}


// else if conditional statement
// Used n a scenario where there is more than two conditional statement
let currentime = 20

if (currentime > 0 && currentime <= 6){
    console.log("GOOD MORNING")
}else if (currentime > 6 && currentime <=12){
    console.log("GOOD AFTERNOON")
}else if(currentime > 12 && currentime <=24){
    console.log("GOOD NIGHT")
}else{
    console.log("INVALID")
}