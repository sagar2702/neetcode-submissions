class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let max = 0;
      let tmax = 0;
      let curr = prices[0];
      for(let i = 1; i< prices.length; i++){
         if(prices[i]<=curr){
            if(tmax>max){
              max = tmax;
              tmax = 0;
            }
            curr = prices[i];
         }else{
           let diff = prices[i]-curr;
           if(diff>tmax) tmax = diff;
         }

      }

      if(tmax>max) max = tmax;
          return max;
    }


}
