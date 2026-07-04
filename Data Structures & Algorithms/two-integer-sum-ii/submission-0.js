class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const mp = new Map();

        for(let i=0;i<numbers.length; i++){
            const temp = target - numbers[i];
            if(mp.has(temp)) {
                return [mp.get(temp), i+1];
            }
            mp.set(numbers[i], i+1);
        }

        return [];
    }
}
