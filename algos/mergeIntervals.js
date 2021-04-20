function mergeOverlappingIntervals(array) {
  // Write your code here.
	//sort the interval of increasing starting value >>> [[start,end],[start1,end1]]
	array.sort((a,b)=> a[0]-b[0])
	
	let result = [array[0]]
	let start = 0;
	for( let i = 1; i < array.length; i++){
		let entryOne = array[i];
	  let entryTwo = result[start];
		if(entryOne[0] <= entryTwo[1]){ 
			result[start]= [entryTwo[0], entryOne[1] > entryTwo[1] ? entryOne[1] : entryTwo[1]];
		}
		else{
			result.push(entryOne);
			start+=1;
		}
	}
  return result;
}

exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
