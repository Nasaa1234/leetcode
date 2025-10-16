from typing import List
from collections import Counter


class Solution:
    def findSmallestInteger(self, nums: List[int], value: int) -> int:
        mod_count = Counter(num % value for num in nums)

        x = 0
        while True:
            mod = x % value
            if mod_count[mod] > 0:
                mod_count[mod] -= 1
            else:
                return x
            x += 1
