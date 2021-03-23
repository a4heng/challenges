function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = head => {
  // if (head === null || head.next === null) return head;
  // let node = reverseLinkedList(head.next);
  // let nextNode = head.next;
  // nextNode.next = head;
  // head.next = null;
  // return node

  let currNode = head;
  let prevNode = null;
  let nextNode = null;

  while(currNode != null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};

module.exports = { Node, reverseLinkedList }