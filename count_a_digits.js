console.log("Become the programmer you're meant to be!")
class Solution{
    count_digits(n){
        let count=0
        while(n>0){
            count+=1 
            n=Math.floor(n/10)
        }
        return count
        
    }
}
console.log(new Solution().count_digits(654156))
