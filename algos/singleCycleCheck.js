// O(n) Time + space (can do better)
function hasSingleCycle(array) {
  // Write your code here.
	let counter = {}
	for(let i =0; i<array.length;i++) counter[i] = false;
	let start = 0
	console.log(counter)
	while(!counter[start]){
		counter[start] = true
		start += array[start]
		start = (start%(array.length) + array.length) % array.length;
	}
	console.log(counter)
	return Object.values(counter).every(el=>el) && start === 0
}

//O(n)time O(1) space
function hasSingleCycle(array) {
  // Write your code here.
	let numVisited = 0;
	let index = 0;
	while(numVisited < array.length){
		if(numVisited > 0 && index === 0){
			return false;
		}
		numVisited += 1
		index = getNextIndex(index, array)
	}
	return index === 0
}

function getNextIndex(index, array){
	let next = array[index];
	let nextIdx = ((((index + next) % array.length) + array.length ) % array.length)
	return nextIdx
}

exports.hasSingleCycle = hasSingleCycle;
