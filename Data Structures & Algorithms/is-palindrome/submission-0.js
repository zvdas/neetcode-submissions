class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /**
         * loop through the sentence in reverse and check if each word
         * is alphanumeric using regex. if it is, push it in lowercase
         * into a list. then check if the list equals its reverse
         */
        const sentence_reversed = [];
        for (let n = s.length; n >= 0; n--) {
            if (/[a-z0-9]/i.test(s[n])) {
                sentence_reversed.push(s[n]?.toLowerCase());
            }
        }
        return sentence_reversed.join("") === sentence_reversed.toReversed().join("");
    }
}
