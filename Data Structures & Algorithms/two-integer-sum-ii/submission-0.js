class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        /**
         * using two pointers for optimal memory comeplexity
         * left and right pointers are first and last element of array
         * both move towards middle. the sum of the elements at the two index
         * pointers if lesser than the target, increment left pointer
         * if greater than the target, decrement right pointer
         * if equal to target, return the pointers + 1 (since their indexes)
         */
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const currentSum = numbers[left] + numbers[right];
            if (currentSum === target) {
                return [left + 1, right + 1];
            } else if (currentSum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
        return [];
    }
}
