class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currentsum=0, max=nums[0];
        for(let item of nums){
            currentsum= currentsum+item;            
            max=Math.max(max,currentsum)
            if(currentsum<0){
                currentsum=0;
            }
        }
        return max;
    }
}
