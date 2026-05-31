class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let current =[]
        let maxlen=0;
        let longest=[];

        for(let char of s){
            while(current.includes(char)){
                current.shift()
            }
            current.push(char)

            if(current.length>maxlen){
                maxlen= current.length
                longest=[...current]
            }
        }

        return maxlen;
    }
}
