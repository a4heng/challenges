function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	redShirtHeights.sort((a,b) => b-a)
	blueShirtHeights.sort((a,b) => b-a)
	let color = blueShirtHeights[0] > redShirtHeights[0] ? 'BLUE' : 'RED'
	for(let i = 0; i< blueShirtHeights.length; i++){
		
		if(color === "BLUE"){
			if(blueShirtHeights[i] <= redShirtHeights[i]) return false;
		}else{
			if(blueShirtHeights[i] >= redShirtHeights[i]) return false;
		}
	}
	
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
