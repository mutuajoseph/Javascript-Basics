// WHILE LOOPS

// while statement creates a loop that executes a block of code as long as the test condition evaluates to true. The following illustrates the syntax of the while statement.

//  checks if the condition satisfies the literals given then goes to the next block
let count = 70;

while(count < 10){
    console.log(`count: ${count}`);
    count +=2;
}

// If you want a statement to be outputed before the condition is checked use the do while loop

let numbers = 70;
do{
    console.log(`numbers: ${numbers}`);
    numbers +=1;
} while(numbers < 10)