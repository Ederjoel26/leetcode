// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// this is bullshit, I'll refactor it

function reverseList(head: ListNode | null): ListNode | null {
  let reversed: ListNode | null = null;
  let f = true;

  while (true) {
    if (!head) break;

    if (f) {
      f = false;
      reversed = new ListNode(head.val);
      head = head.next;
      continue;
    }

    const s = new ListNode(head.val, reversed);
    reversed = s;
    head = head.next;
  }

  if (!reversed) {
    let reversed = new ListNode();
    return reversed.next;
  }

  return reversed;
}
