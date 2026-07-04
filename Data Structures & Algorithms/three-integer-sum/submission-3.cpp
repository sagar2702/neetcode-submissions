class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> res;
        for(int i=0; i<nums.size()-2; i++){
            int firstNum = nums[i];
            int l = i+1;
            int r = nums.size()-1;

            if(i> 0 && nums[i-1] == nums[i]) {
                continue;
            }

            
            while(l<r){
                int currSum = nums[l]+nums[r];
                if(firstNum + currSum > 0) {
                    r--;
                } else if(firstNum + currSum < 0){
                    l++;
                }else {
                    vector<int> arr;
                    arr.push_back(firstNum);
                    arr.push_back(nums[l]);
                    arr.push_back(nums[r]);
                    res.push_back(arr);
                    l++;
                    r--;
                    while(nums[l-1]==nums[l] && l<r) {
                       l++;
                    }
                }
            }
            
        }

        return res;
    }
};
