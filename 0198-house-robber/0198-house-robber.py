class Solution(object):
    def rob(self, nums):
        if len(nums) == 0:
            return None
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums)
        result = [0] * len(nums)
        result[0] = nums[0]
        result[1] = max(nums[0], nums[1])
        for i in range(2, len(nums)):
            result[i] = max(result[i - 2] + nums[i], result[i - 1])
        return max(result)
            
        