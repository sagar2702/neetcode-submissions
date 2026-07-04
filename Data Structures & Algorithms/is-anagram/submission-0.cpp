class Solution {
public:
    bool isAnagram(string s, string t) {
        int sSize = s.size();
        int tSize = t.size();

        if(sSize != tSize) return false;

        int count[26] = {0};
        for(int i=0;i<sSize; i++){
            int index1 = int(s[i]) - 97;
            int index2 = int(t[i]) - 97;
            count[index1]++;
            count[index2]--;
        }
        for(int i=0; i<26 ; i++){
            if(count[i] != 0) {
                return false;
            }
        }

        return true;
    }
};
