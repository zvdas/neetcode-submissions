class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        cache = {}
        for index, value in enumerate(nums):
            complement = target - value # complement is the number to be matched
            if complement in cache:
                return [cache[complement], index]
            cache[value] = index
