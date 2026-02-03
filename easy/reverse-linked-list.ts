// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// this is the best solution
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// this is bullshit
// function reverseList(head: ListNode | null): ListNode | null {
//   let reversed: ListNode | null = null;
//   let f = true;
//
//   while (true) {
//     if (!head) break;
//
//     if (f) {
//       f = false;
//       reversed = new ListNode(head.val);
//       head = head.next;
//       continue;
//     }
//
//     const s = new ListNode(head.val, reversed);
//     reversed = s;
//     head = head.next;
//   }
//
//   if (!reversed) {
//     let reversed = new ListNode();
//     return reversed.next;
//   }
//
//   return reversed;
// }
