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

        if(countZeroes >=2){
            for(let i =0; i<nums.length; i++){
                res.push(0);
            }
        }else if(countZeroes == 1){
            for(let i =0; i<nums.length; i++){
                if(nums[i] == 0){
                    res.push(product);
                }else{
                    res.push(0);
                }
            }
        }else {
            for(let i =0; i<nums.length; i++){
                let val = product/nums[i];
                res.push(val);
            }
        }

        return res;
    }
}
