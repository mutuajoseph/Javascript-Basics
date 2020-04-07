// FOR LOOPS 

// In this a statement is executed until specific condition is met

for(let x = 0; x <=10; x++){
    console.log(`Numbers: ${x}`)
}

// If statements can also be used inside for loops

for(let x = 0; x <=10; x++){

    if(x == 2){
        console.log("Second lucky number")
    }
    console.log(`Numbers: ${x}`)
}

// Inside the if statements one can either supply a break or continue function

for(let x = 0; x <=10; x++){

    if(x == 2){
        console.log("Second lucky number")
        continue;
    }
    console.log(`Numbers: ${x}`)
}

for(let x = 0; x <=10; x++){

    if(x == 2){
        console.log("Second lucky number")
        break;
    }
    console.log(`Numbers: ${x}`)
}

// Looping through an array

const cars = ['Bentley','Golf','Jeep','Benz']

let car_length = cars.length

// Accesing the items in the array of cars

for (let i = 0; i < car_length ; i++){

    console.log(`Type: ${cars[i]}`)
}

