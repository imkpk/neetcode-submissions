class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr= s.toLowerCase().replace(/[^a-z0-9]/g,"")
        let left =0, right = cleanStr.length-1;

        while(left<right){

            if(cleanStr[right]!==cleanStr[left]){
                return false;
            }

            left++;
            right--;

        }
     return true;

    }
}
