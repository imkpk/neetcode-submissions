class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count ={}
        for(let num of nums){
            count[num]=(count[num]|| 0)+1
        }
        let arr= Object.entries(count);
        arr.sort((a,b)=>b[1]-a[1])
        let result = arr.slice(0,k).map(pair=>Number(pair[0]));
        return result;

    }
}
