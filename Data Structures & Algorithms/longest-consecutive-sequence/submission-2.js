class Solution {
    /**
     * @param {number[]}
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            let curreEle = nums[i];
            if (!numSet.has(curreEle - 1)) {
                let count = 1;
                while (numSet.has(curreEle + 1)) {
                    curreEle++;
                    count++;
                }
                longest = Math.max(longest, count);
            }
        }
        return longest;
    }
}
