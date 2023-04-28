
/*
Budget	  Price1 - Price2	      Expected Return
50	        20      25	            True
100	        50      46	            False
500	        230     230	            True
200	        140     50	            False
*/


    let budget ;
    let price1 ;
    let price2 ;

    function sumOfGifts(gift1, gift2) {
        return gift1 + gift2;
    }

    const giftTotal = sumOfGifts(price1, price2);

    function addTax(giftTotal) {
        return giftTotal + (giftTotal * 0.08);
    }

    const giftsWithTax = addTax(giftTotal);

    function holidayShopping(budget, giftsWithTax) {
        return budget > giftsWithTax;
    }

    holidayShopping(budget, giftsWithTax);


    function print () {
        const inputBudget = [50, 100, 500, 200];
        const inputPrice1 = [20, 50, 230, 140];
        const inputPrice2 = [25, 46, 230, 50];
        for (let i = 0; i < inputBudget.length; i++) {
            price1 = inputPrice1[i] ;
            price2 = inputPrice2[i] ;
            budget = inputBudget[i] ;
            //console.log("gift1: " + price1 + "     gift2: " + price2 + "     Budget: " + budget);
            //console.log(sumOfGifts(price1, price2));
            //console.log(addTax(sumOfGifts(price1, price2)));
            console.log(holidayShopping(budget, addTax(sumOfGifts(price1, price2)))); // final answer
            console.log(" ");
        }
        
    }

    print();

    //console.log("gift1: " + price1 + "     gift2: " + price2 + "     Budget: " + budget);
    //console.log(giftTotal);
    //console.log(giftsWithTax);
    //console.log(holidayShopping(budget,giftsWithTax));