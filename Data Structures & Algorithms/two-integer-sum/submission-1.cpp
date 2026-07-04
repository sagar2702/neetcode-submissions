class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mp;
        for(int i=0; i<nums.size();i++){
            mp[nums[i]] = i;
        }
        vector<int> res;

        for(int i=0; i<nums.size(); i++){
            int temp = target - nums[i];
            if(mp.count(temp)) {
                if(i==mp[temp]) continue;
                if(i<mp[temp]) {
                    res.push_back(i);
                    res.push_back(mp[temp]);
                }else {
                   res.push_back(mp[temp]);
                   res.push_back(i); 
                }
                break;
            }
        }
      return res;
    }
};
