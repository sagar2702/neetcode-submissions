class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let mp = {};

        for(let c of s){
            if(mp[c]){
                mp[c]++;
            }else{
                mp[c]=1;
            }
        }
        for(let c of t){
            if(mp[c]) mp[c]--;
        }
        for(let x of Object.values(mp)){
            if(x>0) return false;
        }

        return true;
    }
}
