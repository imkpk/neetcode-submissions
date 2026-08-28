class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj={}
        for(let i=0; i<nums.length; i++){
            let current= nums[i];

            // for(let j =i+1; j<nums.length; j++){
            //     if(nums[i]+nums[j]===target){
            //         return [i, j]
            //     }
            // }
            if(obj[target-current]!== undefined){
                return [obj[target-current], i];

            }
            obj[current]=i;
        }
    return []
    }

}
