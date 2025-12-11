// my first solution, awful
// 262ms & 62.86mb used
// Time complexity = O(n^2)
// Space complexity = O(n)
//
// explanation:
// where:
// n = s.length (initial length of the string)
//
// 1. Outer Loop (The While Loop):
//    - Runs O(n) times. (Since two characters are removed in each iteration,
//      the loop executes n/2 times, which is simplified to O(n)).
//
// 2. Cost of Inner Operations (Inside the While Loop):
//    - The inner 'for' loop (searching for the last open bracket) is O(n).
//    - The string manipulation (s.slice and concatenation) requires creating a
//      new string of length L, making this operation also O(n).
//
// 3. Substitution (O(outer) * O(inner)):
//    - The total time complexity T(n) is the product of the number of outer loops
//      and the cost of the inner operations:
//
// T(n) = O(n) * O(n)
// T(n) = O(n^2)
//
// Big O:
// T(n) = O(n^2)
function isValid1(s: string): boolean {
  const openBrackets = new Set<number>([40, 91, 123]);
  // const closedBrackets = new Set<number>([41, 93, 125]);
  const mapBrackets: Map<number, number> = new Map<number, number>([
    [40, 41],
    [91, 93],
    [123, 125],
  ]);

  while (true) {
    let lastOpenBracketIndex: number | null = null;
    for (let i = 0; i < s.length; i++) {
      const ascii = s.charCodeAt(i);
      if (openBrackets.has(ascii)) {
        lastOpenBracketIndex = i;
      }
    }

    const isLastItem = s.length === lastOpenBracketIndex;
    if (lastOpenBracketIndex === null || isLastItem) return false;
    const expectedNextValue = mapBrackets.get(
      s.charCodeAt(lastOpenBracketIndex),
    );
    if (!expectedNextValue) return false;
    if (expectedNextValue !== s.charCodeAt(lastOpenBracketIndex + 1))
      return false;

    //remove pair
    s = s.slice(0, lastOpenBracketIndex) + s.slice(lastOpenBracketIndex + 2);
    if (s.length === 0) return true;
  }
}

// 3ms runtime & 58.83mb used
// Time complexity = O(n)
// Space complexity = O(n)
//
// explanation:
// T(n) = n * (C(insertion) + C(search) + C(delete))
//
// where:
// n = s.length
// C(insertion) = stack.push(asciiItem) = O(1)
// C(search) = openBrackets.has(asciiItem) & mapBrackets.get(asciiItem) & stack.isEmpty() = O(1)
// C(delete) = stack.pop() = O(1)
//
// sustitution:
// T(n) = n * (O(1) + O(1) + O(1))
// T(n) = n * O(1)
//
// Big O:
// T(n) = O(n)
function isValid(s: string): boolean {
  class Stack<T> {
    // The underlying JavaScript array stores the elements.
    private items: T[] = [];

    /**
     * Adds an element to the top of the stack (O(1) operation).
     * @param item The element to add.
     */
    push(item: T): void {
      this.items.push(item);
    }

    /**
     * Removes and returns the top element from the stack (O(1) operation).
     * Throws an error if the stack is empty.
     * @returns The top element.
     */
    pop(): T | undefined {
      return this.items.pop(); // Returns undefined if the array is empty
    }

    /**
     * Returns the top element without removing it (O(1) operation).
     * @returns The top element, or undefined if the stack is empty.
     */
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }

    /**
     * Checks if the stack is empty.
     * @returns True if the stack is empty, false otherwise.
     */
    isEmpty(): boolean {
      return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     * @returns The stack size.
     */
    size(): number {
      return this.items.length;
    }
  }

  const stack = new Stack<number>();
  const openBrackets = new Set<number>([40, 91, 123]);
  const closedBrackets = new Set<number>([41, 93, 125]);
  const mapBrackets: Map<number, number> = new Map<number, number>([
    [41, 40],
    [93, 91],
    [125, 123],
  ]);

  for (let i = 0; i < s.length; i++) {
    const asciiItem = s.charCodeAt(i);
    if (openBrackets.has(asciiItem)) {
      stack.push(asciiItem);
    } else if (closedBrackets.has(asciiItem)) {
      const topStackExpectedValue = mapBrackets.get(asciiItem);
      const topStackValue = stack.peek();
      if (topStackExpectedValue !== topStackValue) return false;
      stack.pop();
    } else {
      return false;
    }
  }

  if (!stack.isEmpty()) return false;
  return true;
}
