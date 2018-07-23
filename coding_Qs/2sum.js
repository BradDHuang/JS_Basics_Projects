

class TwoSum {
    constructor() {
        var initArr = [];
        this.arr = initArr;
        this.add = function(num) {
            this.arr.push(num);
            console.log(this.arr);
        }
        this.find = function(sum) {
            let array = this.arr;
            let len = array.length;
            let res = [];
            for (let i = 0; i < len; i++) {
                res[i] = sum - array[i];
            }
            for (let j = 0; j < len; j++) {
                for (let k = 0; k < len; k++) {
                    if (array[k] === res[j]) {
                        return true;
                    }
                }
            }
            return false;
        }
        this.remove = function(num) {
            let array = this.arr;
            let len = array.length;
            let newArr = [];
            for (let i = 0; i < len; i++) {
                if (num !== array[i]) {
                    newArr.push(array[i]);
                }
            }
            this.arr = newArr;
            console.log(this.arr);
            return;
        }
    }
}
var t = new TwoSum();
t.add(1);
t.add(3);
t.add(5);
console.log(t.find(4));
console.log(t.find(7));

t.remove(3);
console.log(t.find(4));









