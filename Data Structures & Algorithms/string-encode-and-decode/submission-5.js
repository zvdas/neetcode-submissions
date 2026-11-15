class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).reduce((acc, idx) => acc+idx, "");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const words = [];
        let i = 0;
        let j = 0;
        let length;
        while (i < str.length) {
            j = i;
            while (str[j] !== '#') {
                j += 1;
            }
            length = Number(str.slice(i, j));
            i = j + 1;
            words.push(str.slice(i, i + length));
            i += length;
        }
        return words;
    }
}
