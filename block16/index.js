    /**
     * this solution is to create a program to help the pharmacy to encourage
     * its customers'retention by giving them some extra conditional discounts 
     * on their total bill.
     * to achieve this target :
     *  1- I declared a variable named total to store the intial total for the customer.
     *  2- I declared a variable named totalDiscount to store the total discount applied to this
     *     customer based on his eligibility.
     *  3- I created a function called getInitialTotal which take the Customer object as a parameter
     *     and return the total of number of refills multiplied by the unit price. the return will
     *     update the total variable declared earlier.
     *  4- I created a function called calculateDiscount which take the customer object as a parameter
     *     and check what kind of discount eligibility this customer has and calculate the total discount
     *     to be applied to this customer and retur it to update the totalDiscount variable.
     *  5- I created a function called printGrandTotal which does not has any parameters and iside this 
     *     function I declared a local variable called grandTotal which calculate the grand total by 
     *     substracting the total discount from the initial total and pass this total to the returned 
     *     console.log statement.
     *  6- to test this program with the example objects , I crated an array named customes which has 
     *     all test case objects as its elements.
     *  7- I created a function using arrow function to console log all the final returns of each element
     *     of customers array using a for loop which call all the 3 functions on each element at iteration.
     *     
     */
    
    

    // declaring the global variables
    let total ;
    let totalDiscount ;
    
    // the function to get the initial total of each customer
    function getInitialTotal (customer){
        total = customer.pricePerRefill * customer.refills ;
        return total ;
    }
    
    // the function to check kind of discount the customer has and calculate the total discount
    function calculateDiscount (customer){
        if (customer.subscription && customer.coupon){
            totalDiscount = (total * 0.25) + 10 ;
            return totalDiscount ;
        } else if (customer.subscription){
            totalDiscount = total * 0.25 ;
            return totalDiscount ;
        } else if (customer.coupon){
            totalDiscount = 10 ;
        }
        return 0 ;
    }


    // the function to calculate and and print the grand total
    function printGrandTotal () {
        let grandTotal = total - totalDiscount ;
        return (console.log(`your grand total is $${grandTotal}`))
    }

/////////////////////////////////////////////////////////////////////////////////////

// objects to test (test cases)

    const timmy = {
        prescription: "acetaminophen",
        pricePerRefill: 25,
        refills: 3,
        subscription: false,
        coupon: true,
    };

    const sarah = {
        prescription: "diphenhydramine",
        pricePerRefill: 50,
        refills: 1,
        subscription: true,
        coupon: false,
    };

    const rocky = {
        prescription: "phenylephrine",
        pricePerRefill: 30,
        refills: 5,
        subscription: true,
        coupon: true,
    };

    // to test all objects in the problem I created this function using the arrow function

    const printCustomerGrandTotal = (arr) => {
        for (let i = 0; i < arr.length; i ++){
            let element = arr[i];
            getInitialTotal(element);
            calculateDiscount(element);
            printGrandTotal();
        }
    }
    
    // create an array for all customers
    const customers = [timmy, sarah, rocky];

    printCustomerGrandTotal(customers);
