
// The Set object 
// lets you store 
// unique values 
// of any type, whether primitive values or object references.

// Set objects are collections of values. 
// You can iterate through the elements of a set 
// in insertion order. 
// A value in the Set may only occur once; it is unique in the Set's collection.

// .size
// .add()
var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
console.log(mySet.size); // 2

// The entries() method 
// returns a new Iterator object that contains 
// an array of [value, value] for each element in the Set object, 
// in insertion order.
const iterator1 = mySet.entries();

for (let entry of iterator1) {
  console.log(entry);
}
// [1, 1] [5, 5]

// .keys() is the same function as the .values()
// .values()

// .delete()
// .has()
console.log(mySet.has(1)); // true
mySet.delete(1);
console.log(mySet.has(1)); // false

// .clear()
mySet.clear();
console.log(mySet.size); // 0

var o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2});
console.log(mySet.size); // 2
// o is referencing a different object 

console.log(mySet.has(o)); // true
console.log(mySet.has({a: 1, b: 2})); // false









