class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Map();
        function dfs(index ){
            //base case
            if(index>=nums.length){
                return 0;
            }
            if (memo.has(index)) return memo.get(index);
            let robCurrent = nums[index]+ dfs(index+2)
            let skipCurrent= dfs(index+1)
            let result = Math.max(robCurrent, skipCurrent);
            memo.set(index, result);
            return result;            
        }
        return dfs(0);
    }
}
