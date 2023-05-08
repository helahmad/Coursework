/*

# Unit Tests Specifications for multiplication:

    A function called "multiplication" that returns the product of the two input numbers.
    
    1- Expect multiplication(2, 3) to be a number
    2- Expect multiplication(2, 3) to be equal to 6
    3- Expect multiplication(0, 3) to be equal to 0
    4- Expect multiplication(2, 0) to be equal to 0
    5- Expect multiplication(-2, 3) to be equal to -6
    6- Expect multiplication(-2, -3) to be equal to 6

    7- Expect multiplication("a", 3) to be an error
    8- Expect multiplication(2, "b") to be an error
    9- Expect multiplication(undefined, 2) to be an error
    10- Expect multiplication(null, 2) to be an error
    11- Expect multiplication(2, null) to be an error

/////////////////////////////////////////////////////////////////////////////////////////////////

# Unit Tests Specifications for concatOdds: 

    A function called "concatOdds" takes two arrays of integers as arguments. It should return a single 
    array that only contains the odd numbers, in ascending order, from both of the arrays.

    1- Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array
    2- Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be equal to [-1, 1, 3, 9, 15]
    3- Expect concatOdds([], []) to be an empty array
    4- Expect concatOdds([2, 4, 6], [1, 3, 5]) to be equal to [1, 3, 5]
    5- Expect concatOdds([2, 4, 6], [1, 3, 5, 7]) to be equal to [1, 3, 5, 7]
    6- Expect concatOdds(["a", "b", "c"], [1, 2, 3]) to be an error
    7- Expect concatOdds([1, 2, 3], []) to be [1, 3]
    8- Expect concatOdds([], [4, 6, 8]) to be an empty array
    9- Expect concatOdds([1, 1, 1], [1, 1, 1]) to be equal to [1]
    

/////////////////////////////////////////////////////////////////////////////////////////////////////

# Functional Tests for shopping cart checkout:

    1- When a user adds an item to their cart, the item should appear in the cart
    2- When a user clicks "Checkout as Guest", they should be prompted for their shipping information
    3- When a user fills out their shipping information and clicks "Continue to Payment", 
        they should be prompted for their payment information
    4- When a user fills out their payment information and clicks "Complete Order", they should see 
        a confirmation page with their order details
    5- When a user clicks "Log In" and fills out their credentials, their saved shipping and payment information 
        should appear, and they should be able to complete their order
    6- When a user clicks "Create Account" and fills out their information, they should be able to complete their 
        order and their account should be created
    
    7- When a user clicks "Checkout" without any items in their cart, they should be shown an error message 
        indicating their cart is empty and prevented from proceeding.

    8- When a user clicks "Checkout" and chooses to sign up as a guest, they should be able to enter their billing 
        and shipping information without being prompted to create an account.
    9- When a user clicks "Checkout" and chooses to create an account, they should be prompted to create a username 
        and password, and asked to verify their email address.
    10- When a user clicks "Checkout" and enters incorrect login or password information, they should be shown an 
        error and prompted to try again or create a new account.
    11- When a user clicks "Checkout" and confirms their purchase, they should be shown a confirmation page with 
        an order number and receipt.
    12- when a user tries to checkout with an address that is not valid (e.g. missing required fields)? Expect an 
        error message to be displayed and the user to be prompted to enter a valid address.
    13- When a user clicks on "Create Account" without filling in any information, they should be shown an error

//////////////////////////////////////////////////////////////////////////////////////////////////////////

*/