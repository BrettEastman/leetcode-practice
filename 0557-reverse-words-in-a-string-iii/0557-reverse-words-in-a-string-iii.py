class Solution(object):
    def reverseWords(self, s):
        result = []
        txt = s.split()
        for i in range(len(txt)):
            result.append(txt[i][::-1])
        return ' '.join(result)
        