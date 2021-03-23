function kAlgo (array) {
  let maxSoFar = array[0]
  let maxEnding = array[0]
  
  for (let i=1; i<array.length; i++) {
     maxEnding = Math.max(array[i], (array[i] + maxEnding))
     maxSoFar = Math.max(maxEnding, maxSoFar)
  }
 
 return maxSoFar
 
}


console.log(kAlgo([1, -2, 3, 10, -4, 7, 2, -5])) // 18




 const kadanesMaxSubarray = (arr) => {
   let max = -Infinity;
   let runningTotal = 0;
   for(let i = 0; i < arr.length; i++) {
     // If the running total is less than the value of the current element then there is no way
     // that the previous elements could be used to make a max subarray using the current element
     runningTotal = Math.max(arr[i], runningTotal + arr[i]);
     max = Math.max(max, runningTotal);
   }
   return max;
 }
