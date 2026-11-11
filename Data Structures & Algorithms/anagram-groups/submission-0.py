class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        cache = defaultdict(list)
        for string in strs:
            sorted_string = ''.join(sorted(string))
            cache[sorted_string].append(string)
        return list(cache.values())
            