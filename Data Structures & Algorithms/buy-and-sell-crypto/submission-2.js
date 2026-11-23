class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;
        let right = prices.length - 1;
        while (left < right) {
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(profit, maxProfit);
            if (left == right - 1) {
                left = 0;
                right -= 1;
            } else {
                left += 1;
            }
        }
        return maxProfit;
    }
}
