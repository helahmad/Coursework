// Problem 1 (Is Truthy)
    // create a variable called input which value equal to the tested input
    let input = undefined;
    // check if input is truthy or falsy
    if (input){
        console.log(true); // if input value is truthy output is true
    } else {
        console.log(false); // if input value is falsy output is false
    }

// Problem 2 (Number Line)
    // create 3 variables numI, numII, sum
    let numI = 50; // change according to tested num1
    let numII = 51; // change according to tested num2
    let sum = numI + numII; // sum of num1 and num2
    // check if sum is greater than 100
    if (sum > 100){ 
        // log out sum and is greater than 100
        console.log(sum + " is greater than 100");
    // check if sum is greater than 0 but less than or equal 100
    } else if (sum > 0 && sum <= 100){ 
        // log out sum and is greater than 0
        console.log(sum +" is greater than 0"); 
    // check if sum equals number 0
    } else if (sum === 0){
        // log out sum and is equal to 0
        console.log(sum +" is equal to 0");
    // check if sum is less than 0 and grater than or equal -1000
    } else if (sum < 0 && sum >= -1000){
        // then log out sum and is a negative number
        console.log(sum +" is a negative number");
    // if nothing from the above conditions is true    
    } else {
        // then log out sum and less than -1000
        console.log(sum +" is less than -1000");
    }

// Problem 3 (Greater than 5)
    // create 2 variables num1 and num2
    let num1 = 5; // change according to tested num1
    let num2 = 6; // change according to tested num2
    // check if both num1 and num2 are greater than or equal 5
    if (num1 >=5 && num2 >=5){
        // if true log out true
        console.log(true);
    } else { 
        // if false log out false
        console.log(false); 
    }

// Problem 4 ( Pair and Compare)
    // create 4 variables param1A, param1B, param2A, param2B
    let param1A = "cat"; // change according to tested param1A
    let param1B = "cat"; // change according to tested param1B
    let param2A = 6;     // change according to tested param2A
    let param2B = "6";   // change according to tested param2B
    // check if param1A and param1B are equal in value and type
    // or if param2A and param2B are equal in value and type
    if ((param1A === param1B)|| (param2A === param2B)){
        // log out true if at least one expression is true
        console.log(true);
    } else {
        // log out false if none of the expressions is true
        console.log(false);
    }