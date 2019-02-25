
// Array Methods Review

// forEach Always returns 
// undefined

[1,2,3].forEach((val, idx, arr) => console.log(val, idx, arr));

// str.split()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#Return_value

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/
function addKeyAndValue(arr,key,value){
    arr.forEach(e => {
        e[key] = value;
    });
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   var sArr = str.toLowerCase().split('');
   var obj = {};
   var vowels = 'aeiou';
   sArr.forEach(letter => {
       if (vowels.indexOf(letter) !== -1) {
           if (letter in obj) {
               obj[letter]++;
           } else {
               obj[letter] = 1;
           }
       }
   });
   return obj;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Return_value
// A new array 
// with each element being the result of the callback function.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// The some() method 
// tests whether at least one element in the array passes the test 
// implemented by the provided function.
// Return value
// true if the callback function returns a truthy value for any array element; otherwise, false.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Return value
// The value that results from the reduction.

var arr = [1,2,3,2,3];
console.log(
    arr.reduce((acc, val) => {
        if (acc[val]) {
            acc[val]++;
        } else {
            acc[val] = 1;
        }
        return acc;
    }, {})
); 
// {1: 1, 2: 2, 3: 2}

var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
console.log(extractValue(arr,'name')); // ['Elie', 'Tim', 'Matt', 'Colt']
function extractValue(arr, key){
    return arr.reduce((acc, val) => {
        acc.push(val[key]);
        return acc;
    }, []);
}

console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};
function vowelCount(str){
   let lStr = str.toLowerCase().split('');
   let vowels = 'aeiou';
   return lStr.reduce((acc, val) => {
       if (vowels.indexOf(val) !== -1) {
           if (acc[val]) {
               acc[val]++;
           } else {
               acc[val] = 1;
           }
       }
       return acc;
   }, {});
}

var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(addKeyAndValue(arr, 'title', 'Instructor'));
/*  
[
    {title: 'Instructor', name: 'Elie'}, 
    {title: 'Instructor', name: 'Tim'}, 
    {title: 'Instructor', name: 'Matt'}, 
    {title: 'Instructor', name: 'Colt'}
]
*/
function addKeyAndValue(arr, key, value){
    return arr.reduce((acc, val) => {
        val[key] = value;
        acc.push(val);
        return acc;
    }, []);
}

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}
var names = ['Elie', 'Colt', 'Tim', 'Matt'];
console.log(partition(names, isLongerThanThreeCharacters)); // [['Elie', 'Colt', 'Matt'], ['Tim']]
function partition(arr, callback){
    return arr.reduce((acc, val) => {
        if (callback(val)) {
            acc[0].push(val);
        } else {
            acc[1].push(val);
        }
        return acc;
    }, [[],[]]);
}






