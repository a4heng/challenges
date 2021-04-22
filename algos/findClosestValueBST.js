function findClosestValueInBst(tree, target) {
  // Write your code here.
	function helper(root, target, nearest){
		if(root === null) return nearest;
		
		if(Math.abs(nearest - target) > Math.abs(root.value - target)){
			nearest = root.value;
		}
		
		if(target > root.value){
			return helper(root.right, target, nearest);
		}else if(target < root.value){
			return helper(root.left, target, nearest);
		}else{
			return nearest;
		}
		
		}
		
	return helper(tree, target, tree.value)
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.findClosestValueInBst = findClosestValueInBst;
