class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mp = {};
        for(let i of strs){
            let x = i.split('').sort((a, b) => a.localeCompare(b)).join('');
            if(mp[x]){
                mp[x].push(i);
            }else {
                mp[x] = [];
                mp[x].push(i);
            } 
        }

        let res = [];
        for(let x of Object.values(mp)){
            res.push(x);
        }
        return res;
    }
}
