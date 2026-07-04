class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set([]);
        for(let i of nums){
            if(s.has(i)){
                return true;
            }
            s.add(i);
        }

        return false;
    }
}
