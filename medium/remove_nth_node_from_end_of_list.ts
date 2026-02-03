// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    let i = 0;
    do {
      i++;
      fast = fast!.next;
    } while (i < n);
    slow = slow!.next;
  }

  slow = slow?.next?.next;
  return slow;
}
