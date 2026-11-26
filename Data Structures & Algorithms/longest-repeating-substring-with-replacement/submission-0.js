class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /**
         * using the sliding window with the two pointers, both pointers will
         * start from zero, the right pointer looping through till array length
         * once the difference between the sliding window length and the maximum
         * frequency of characters is greater than k, increment the left pointer
         * by one and remove the left most value from the sliding window. the
         * maximum result of the sliding window length is saved and returned.
         */
        const counter = {};
        let left = 0;
        let result = 0;
        let maxFrequency = 0;
        for (let right = 0; right < s.length; right++) {
            counter[s[right]] = 1 + (counter[s[right]] ?? 0);
            maxFrequency = Math.max(maxFrequency, counter[s[right]]);
            while (right - left + 1 - maxFrequency > k) {
                // while (right - left + 1 - Math.max(...Object.values(counter)) > k) {
                counter[s[left]] -= 1;
                left += 1;
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}
