class Solution(object):
    def sortArrayByParity(self, nums):
        result = []
        for i in range(len(nums)):
            if nums[i] % 2 == 0:
                result.insert(0, nums[i])
            else:
                result.append(nums[i])
        return result
        