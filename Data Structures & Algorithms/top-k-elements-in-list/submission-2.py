class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = {}
        for number in nums:
            counter[number] = counter.get(number, 0) + 1
        return sorted(counter, key=counter.get, reverse=True)[:k]