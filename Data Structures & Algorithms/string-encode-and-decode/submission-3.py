class Solution:

    def encode(self, strs: List[str]) -> str:
        if not strs:
            return ""
        result = "".join([f"{len(s)}#{s}" for s in strs])
        return result
    def decode(self, s: str) -> List[str]:
        if not s:
            return []
        words = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j+=1
            string_length = int(s[i:j])
            i = j+1
            words.append(s[i:i+string_length])
            i+=string_length
        return words


