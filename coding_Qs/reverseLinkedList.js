
// ListNode constructor
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let headNode = new ListNode(3);
headNode.next = new ListNode(5);
headNode.next.next = new ListNode(7);
// Now the list is: 3 -> 5 -> 7 -> null

// Implementing Reverse LinkedList below:
function reverse(head) {
  if (head === null) return null;
  let pre = null;
  while (head !== null) {
    let cur = head.next;
    head.next = pre;
    pre = head;
    head = cur;
  } 
  return pre;
}

let reversedHead = reverse(headNode);
console.log(reversedHead.val);
console.log(reversedHead.next, reversedHead.next.next);
// Now it is: 7 -> 5 -> 3 -> null







