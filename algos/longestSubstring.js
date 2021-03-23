
function longestSubstring (str, k) {
  let start=0
  let end=0 
  let low=0
  let high=0
  let dict = {}   
  
    while(high < str.length) {
      dict[str[high]] = (dict[str[high]] || 0) + 1
      
      while (Object.keys(dict).length > k) {
         dict[str[low]]-=1
         if (dict[str[low]] === 0) {
           delete dict[str[low]]
         } 
          low++
      }

      if ((high-low) > (end - start)){
         end = high
         start = low
      }
      high++
    }
    return str.substring(start, end+1)
  
}
