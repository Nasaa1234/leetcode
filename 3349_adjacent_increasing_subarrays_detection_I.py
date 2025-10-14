from typing import List


class Solution:
    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        if n < 2 * k:
            return False

        inc = [1] * n
        for i in range(1, n):
            if nums[i] > nums[i - 1]:
                inc[i] = inc[i - 1] + 1

        for a in range(n - 2 * k + 1):
            if inc[a + k - 1] >= k and inc[a + 2 * k - 1] >= k:
                return True

        return False


sol = Solution()

nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
print(sol.hasIncreasingSubarrays(nums, k))
