class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        /**
         * using two pointer method, with both pointers at both ends of
         * the array, calculate the leftMax and rightMax, which are the
         * maximum of the left pointer and the numbers to the left of it
         * and the maximum of the right pointer and the numbers to the
         * right of it. If the leftMax is less than rightMax, the left
         * pointer is incremented by one else the right pointer is
         * decremented by one. The difference of the leftMax and the height
         * of the left pointer is the water trapped at the left pointer
         * element. Similarly, the difference between the rightMax and the
         * height of the right pointer is the water trapped at the right
         * pointer element.
         */
        if (!height) return 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[left];
        let rightMax = height[right];
        let totalTrappedWater = 0;
        while(left < right) {
            if(leftMax < rightMax) {
                left += 1;
                leftMax = Math.max(leftMax, height[left]);
                totalTrappedWater += leftMax - height[left];
            } else {
                right -=1;
                rightMax = Math.max(rightMax, height[right]);
                totalTrappedWater += rightMax - height[right];
            };
        }
        return totalTrappedWater;
    }
}
