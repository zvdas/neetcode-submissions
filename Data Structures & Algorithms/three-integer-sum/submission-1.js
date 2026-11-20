class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /**
         * start by sorting the input array in ascending order, then loop through
         * the sorted array to find the first element of triplets, while filtering
         * out duplicates using continue in loop. For the remaining two elements
         * of triplets, use two sum method
         */
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    result.push([nums[i], nums[l], nums[r]]);
                    l += 1;
                    while (nums[l] === nums[l - 1] && l < r) {
                        l += 1;
                    }
                } else if (sum < 0) {
                    l += 1;
                } else {
                    r -= 1;
                }
            }
        }
        
        return result;
    }
}
