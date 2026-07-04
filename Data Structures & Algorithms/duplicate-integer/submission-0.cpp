class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
       set<int> values;
       bool flag = false;
       for(int i=0; i<nums.size(); i++){
            cout<< nums[i];
            if(values.find(nums[i]) != values.end()) {
                flag = true;
            }
            values.insert(nums[i]);

       }

       return flag;
    }
};
