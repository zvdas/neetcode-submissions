class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        if sorted(s) != sorted(t):
            return False
        cache = set()
        for letter in sorted(s):
            cache.add(letter)
        for char in sorted(t):
            if char not in cache:
                return False
        return True