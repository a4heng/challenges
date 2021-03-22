function medianTwoArrays (nums1, nums2) {
  // edge case
  
  //variables   
  let x
  let y
  
  if (nums1.length > nums2.length) {
    x = nums2.length
    y = nums1.length
    let temp = nums1
    nums1 = nums2
    nums2 = temp
  } else {
    x = nums1.length
    y = nums2.length
  }
  
  let start = 0
  let end = x
  
  
  /*
     1 3 |      8 9 15
     7 11 18 19 |  21 25 
  
  */
  
  while (start <= end) {
      let partitionx = Math.floor((start + end)/2)
      let partitiony = Math.floor(((x+y+1)/2)-partitionx)
      
      let maxLeftx = partitionx === 0 ? -Infinity : nums1[partitionx-1] 
      let minRightx = partitionx === x ? Infinity : nums1[partitionx] 
      
      let maxLefty = partitiony === 0 ? -Infinity : nums2[partitiony-1] 
      let minRighty = partitiony === y ? Infinity : nums2[partitiony] 
      
      if (maxLeftx <= minRighty && maxLefty <= minRightx) {
          
        if (((x+y) % 2) === 0) {
          return (Math.max(maxLeftx, maxLefty) + Math.min(minRightx, minRighty))/2
        } else {
          return Math.max(maxLeftx, maxLefty)
        }
        
        
      } else if (maxLeftx > minRighty) {
        end = partitionx-1
      } else {
        start = partitionx+1
      }
      
  }
    
}

console.log(medianTwoArrays([1,3,8,9,15], [7,11,18,19,21,25]))
console.log(medianTwoArrays([7,11,18,19,21,25], [1,3,8,9,15],))