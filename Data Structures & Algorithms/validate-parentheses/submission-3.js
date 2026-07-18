class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let arr = [];
      for(let x of s){
        if('{(['.includes(x)){
          arr.push(x);
          continue;
        } 
        let y = arr.pop();
        if(x === ']' && y!=='[') {
          return false; 
        }
        if(x === '}' && y!=='{') {
          return false;
        }
        if(x === ')' && y!=='(') {
          return false;
        }
      }
      if(arr.length !== 0 ) return false;

      return true;
    }
}
