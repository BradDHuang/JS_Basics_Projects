
let arr = [2,1,2];
console.log(subsets(arr));
// console.log(subsets());
// console.log(subsets([]));

function subsets(arr) {
    let res = [];
    if (arr === undefined) {
        return arr;
    }
    arr.sort((a, b) => a - b);
    let item = [];
    helper(arr, 0, item, res);
    return res;
}

function helper(arr, startIdx, item, res) {
    // res.push(item);
    // 如果是res.push(item)的话，那么加进去了之后对item再进行处理也会改变res中的值，
    // 因为两者是对同一个对象的引用，为了防止这种情况发生，这里用deep copy，
    // 即创建一个与item内容相同的新的对象存到res中，那样之后对item的修改不会对res造成影响。
    console.log(Array.from(item));
    res.push(Array.from(item));

    for (let i = startIdx; i < arr.length; i++) {
        if (i > startIdx && arr[i] === arr[i - 1]) {
            continue;
        }
        item.push(arr[i]);
        helper(arr, i + 1, item, res);
        item.splice(item.length - 1, 1);
    }
}

