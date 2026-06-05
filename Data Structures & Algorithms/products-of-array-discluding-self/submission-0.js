class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let reslut=[]
        for(let i in nums){
            let product =1;

            for(let j in nums ){
                if(i!==j){
                    product= product*nums[j]

                }
            }
            reslut.push(product)
        }
        return reslut;
    }
}
