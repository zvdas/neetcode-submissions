class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // create an array filled with 1
        const n = nums.length;
        const result = new Array(n).fill(1);
        // create a sumproduct from left to right
        let leftProduct = 1;
        for(let i=0; i<n; i++) {
            result[i] = leftProduct;
            leftProduct *= nums[i];
        }
        // create sumproduct of right to left
        let rightProduct = 1;
        for(let i=n-1;i>=0;i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        return result;
    }
}
