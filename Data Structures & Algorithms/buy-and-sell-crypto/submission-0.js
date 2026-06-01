class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [10,1,5,6,7,1]
     */
    maxProfit(prices) {
        let buyingPrice = prices[0] //buing price zero index value by default
        let maxPrice= 0

        for(let i=0;i<prices.length ;i++){
        //making buying price always less then current price 
        const currentPrice= prices[i];

        if(currentPrice<buyingPrice){
            buyingPrice= currentPrice;
        }
        let profit = currentPrice-buyingPrice; //

        maxPrice = Math.max(maxPrice, profit);
        }
        return maxPrice;
    }
}
