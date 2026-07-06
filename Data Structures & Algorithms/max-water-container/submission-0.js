class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let i=0;
        let j = heights.length -1;
        while(i<j){
           let temp;
           if(heights[i]>heights[j]){
              temp = heights[j] * (j-i); 
              j--;
           }else{
              temp = heights[i] * (j-i);
              i++;
           }
           if(temp > max){
             max = temp;
           }
        }

        return max;
    }
}
