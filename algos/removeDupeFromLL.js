// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let dummy = linkedList;
	while(dummy !== null){
		let next = dummy.next;
		while(next !== null && next.value === dummy.value){
			next = next.next;
		}
		dummy.next = next;
		dummy = next
	}
	return linkedList
}

exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
