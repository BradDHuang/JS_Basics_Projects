const str = '11122234344';

function findNumShowTwice(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] === 2) return key;
    }
    return undefined;
}

console.log(findNumShowTwice(str)); // 3

