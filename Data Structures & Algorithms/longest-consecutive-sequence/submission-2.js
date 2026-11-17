class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        /**
         * create a set from the list of numbers
         * identify the sequence of numbers in the list by checking element-1 in set
         * if sequence, check length of sequence by checking element+1 in set
         * return longest sequence
         */
        const numSet = new Set(nums);
        let seqLength = 0;
        for(const num of nums) {
            if(!numSet.has(num - 1)) {
                let length = 0;
                while(numSet.has(num + length)) {
                    length += 1;
                }
                seqLength = Math.max(length, seqLength);
            }
        }
        return seqLength;
    }
}
