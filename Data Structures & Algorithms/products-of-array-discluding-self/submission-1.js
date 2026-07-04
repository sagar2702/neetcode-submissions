class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let countZeroes = 0;
        let product = 1;
        let res = [];
        for(let i of nums) {
           if(i == 0){
            countZeroes++;
           }else{
            product = product*i;
           }
        }

        if(countZeroes > 1){
            return new Array(nums.length).fill(0);
        }

        for(let i=0; i<nums.length; i++){
            if(countZeroes == 1){
                let val = nums[i] == 0 ? product : 0
                res.push(val);
            }else {
                let val = product/nums[i];
                res.push(val);
            }
        }

        return res;
    }
}
