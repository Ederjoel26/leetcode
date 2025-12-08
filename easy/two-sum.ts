// 2ms runtime & 57.73mb used
// Time complexity = O(n)
// Space complexity = O(n)
//
// explanation:
// T(n) = n * (C(substraction) + C(search) + C(insertion))
//
// where:
// n = nums.length
// C(substraction) = (costs of substraction) target - nums[i] = O(1)
// this is only possible because of hash table
// C(search) = map.has(res) & map.get(res) = O(1)
// C(insertion) = map.set(nums[i], i) = O(1)
//
// sustitution:
// T(n) = n * (O(1) + O(1) + O(1))
// T(n) = n * O(1)
//
// Big O:
// T(n) = O(n)
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) {
      const index = map.get(res);
      return [i, index];
    }

    map.set(nums[i], i);
  }

  return [];
}
