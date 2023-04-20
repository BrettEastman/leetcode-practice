class Solution(object):
    def findNumbers(self, nums):
        length = len(nums)
        result = 0
        for i in range(length):
            current = str(nums[i])
            if len(current) % 2 == 0:
                result += 1
        return result
        