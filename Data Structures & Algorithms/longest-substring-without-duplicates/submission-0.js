class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /**
         * using the sliding window, create a new set and two pointers
         * while the window slides to the right, remove the leftmost 
         * characters and add the rightmost characters. the longest 
         * string is the maximum window length captured.
         */
        const charSet = new Set();
        let left = 0;
        let result = 0;
        for (let right = 0; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left += 1;
            }
            charSet.add(s[right]);
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}
