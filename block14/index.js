// guided Practice 1
    // create the initial cars array
    const cars = ["Honda", "Toyota", "Ford", "Subaru"];
    // update the first element from Honda to Hyundai
    cars.splice(0,1,"Hyundai");
    // add Mercedes to the index 2 of the array
    cars.splice(2,0,"Mercedes");
    // delete the last element of the array
    cars.pop();
    // add Audi to the end of the array
    cars.push("Audi");
    // log out the updated final array
    console.log(cars);



// guided Practice 2 
    // declare and initialize the variable sentence
    const sentence = "There once was a donkey named Eeyore."
    // declare variable count to count the letter e and initialize it to 0
    let count = 0;
    // loop through the sentence using for loop
    for (let i = 0; i < sentence.length; i++){
        // when there is e or E the count increase by 1
        if (sentence[i] === 'e' || sentence[i] === 'E'){
            count += 1;
        }
    }
    // log out the final count after looping through the whole characters of sentence
    console.log(count);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//only Odds problem
    // declare an array for initial input values
    const inputArray = [2,4,6,8,11,20,15,22];
    // declare a new empty array to add odd numbers
    const finalArray = [];
    // loop through inputArray to check if element is odd or even
    for (let i = 0; i < inputArray.length ; i++){
        //if the number is odd add it to the end of finalArray
        if (inputArray[i] % 2 != 0){
            finalArray.push(inputArray[i]);
        }
    }
    // log out the final array
    console.log(finalArray);


//Vowel versus Consonant problem
    // declare a variable to hold the tested word
    const input = "onomonopia";
    // create a counter variable to hold the number of consonant characters
    let consonant = 0;
    // create a counter variable to hold the number of vowel characters
    let vowel = 0;
    // loop through the whole characters of the input one at a time
    for (let i = 0 ; i< input.length ; i++){
        // if the current character is vowel (a,e,i,o or u) the vowel counter increase by 1
    if (input[i] === 'a'|| input[i] ==='e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        vowel ++;
        // if it is not a vowel , then the consonent counter increase by 1
    } else {
        consonant ++;
    }
    }
    // log out the original word & final consonant counter & final vowel counter
    console.log(input + " has " + consonant+ " consonants and "+ vowel +" vowels");

    
//Reverse Array
    // declare array for the original order numbers
    const original = [1,2,3];
    // declare a new empt array for reversed order of the original array
    const reverse = [];
    // loop through the original array
    for (let i = 0 ; i < original.length; i++){
        // add the current number to the begining of the reverse array
        reverse.unshift(original[i]);
    }
    // log out the final reversed array
    console.log(reverse);


//FizzBuzz problem
    // declare a variable x to hold the required word instead of the number
    let x;
    //loop through numbers from 1 to 100
    for(let i = 1; i<=100 ;i++){
        // check if the number of current itteration is dividable by both 3 and by 5
        if(i%3 === 0 && i%5 === 0){
            //if true let x = FizzBuzz
            x = "FizzBuzz";
        // if above condition is false, check if it id dividable by 3 only
        } else if(i%3 === 0){
            // if true let x = Fizz
            x = "Fizz";
        // if above conditions are false check if it is dividable by 5 only
        } else if(i%5 === 0){
            // if true, let x = Buzz
            x = "Buzz";
        // if all the above conditions are false
        } else {
            // let x = the number at current iteration
            x = i ;
        }
        // log out the current x value
        console.log(x);
    }