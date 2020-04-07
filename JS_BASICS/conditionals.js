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
// And also using the AND operator
// In this case if both conditions are true then the conditions are passed 
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

// OR OPERATOR
// If either of the condiotions are true, the condition is passed 

let cash = 300,
    credit = 300,
    cartTotal = 500;
    available = cash + credit

if (cash>=cartTotal || credit>=cartTotal){
    console.log('Pay using cash or credit')
} else if (available >= cartTotal){
    console.log('Pay using both')
}
else{
    console.log('Insufficient Funds')
}

// Ternary Operator
// It is the shortcut for the if-else statement 

let authenticated = true

let nextURL = authenticated ? 

    alert("Welcome to  the admin page") :

    alert("Not logged in!! Please Log in")

// SWITCH STATEMENT
// It is same as if statements

let paymentMethod = prompt("Please enter your payment method choice: ")
    cartTotal = 300

switch(paymentMethod){
    case 'cash' :
       amount = prompt("Input Amount: ")
       balance = amount - cartTotal
       console.log (`Balance = ${balance}`)
       break; 

    case 'cheque' :
        submit = prompt(" Are you sure you want to submit the cheque?")

        if (submit == 'yes'){
            console.log('Checking validity of the cheque')
            console.log('Check valid. Processing payment...')
        }
        else{
            console.log('Please select a valid payment method')
        }
        break;


    case 'card' :
        auth = prompt("Enter your password")
        password = '123'

        if (auth == password){
            console.log('Password correct. Processing payment')
        } else{
            console.log('Password Incorrect, Please try again')
        }
        break;
    default :
        console.log("Please select a valid payment method")
}