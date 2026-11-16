class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // define three arrays for three cases
        const rows = Array.from({ length:9 }, () => new Set());
        const cols = Array.from({ length:9 }, () => new Set());
        const boxes = Array.from({ length:9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                // save value
                const value = board[r][c];

                // skip blank cells
                if (value === ".") continue;

                // define the boxes index
                const boxesIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // check in saved value repeats in all three conditions
                if (rows[r].has(value) || cols[c].has(value) || boxes[boxesIndex].has(value)) {
                    return false;
                }
                
                // save values
                rows[r].add(value);
                cols[c].add(value);
                boxes[boxesIndex].add(value);
            }
        }

        // if no duplicates
        return true;
    }
}
