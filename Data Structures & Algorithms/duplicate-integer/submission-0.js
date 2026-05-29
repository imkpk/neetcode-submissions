class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let newArray=[]
       for(let i =0; i<nums.length; i++){
        if(!newArray.includes(nums[i])){
            newArray.push(nums[i])
            
        }else{
            return true;
        }
       
       }
       return false
    }
}
