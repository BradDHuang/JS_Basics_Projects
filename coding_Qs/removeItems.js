
// remove items from box to empty the box.
// you can only remove 1, or 3 items per time.
// how many ways? e.g. 4 items => 3 ways.
// for 4 items, there are 3 ways: [1 1 1 1]; [1 3]; [3 1].

function numOfWays(items) {
  let mod = Math.pow(10, 9) + 7;
  let res = 0;
  let numOf3 = 0, numOf1 = 0;
  let map = new Map();
  for (let i = 1; i * 3 <= items; i++) { // i is num. Of 3s.
    numOf3 = i;
    numOf1 = items - numOf3 * 3;
    res += helper(numOf3, numOf1, map);
  }
  return ( 1 + res) % mod; // all 1s.
}

function helper(n3, n1, map) {
  if (n3 === 0 || n1 === 0) {
    return 1;
  }
  if (map.has(n3 + "," + n1)) {
    return map.get(n3 + "," + n1);
  }
  let r3 = helper(n3 - 1, n1, map);
  let r1 = helper(n3, n1 - 1, map);
  let r = r3 + r1;
  map.set(n3 + "," + n1, r);
  return r;
}

console.log(numOfWays(6)); // 6 ways.


