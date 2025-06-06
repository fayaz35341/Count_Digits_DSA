print("Become the programmer you're meant to be!")
class Solution:
    def count_numbers(self,n):
        count=0
        while n>0:
            count+=1
            n=int(n/10)
        return count
print(Solution().count_numbers(21263))
        
