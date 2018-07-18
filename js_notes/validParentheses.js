



function braces(values) {

    let res = [];
    for (let i = 0; i < values.length; i++) {
        let len = values[i].length;
        let stack = [];
        let l = res.length;
        for (let j = 0; j < len; j++) {
            let e = values[i].charAt(j);
            if (e === '(') {
                stack.push(')');
            } else if (e === '[') {
                stack.push(']');
            } else if (e === '{') {
                stack.push('}');
            } else {                
                if (stack.length === 0 || stack.pop() !== e) {
                    
                    // res.push["NO"];
                    
                    res.push("NO");
                    break;
                }
            }
        }
        if (l === res.length) {
            
            // res.push["YES"];
            
            res.push("YES");
        }
    }
    return res;

}

const arr = ["{}[)]()", "{[{}]}"]; 
// braces(arr);
console.log(braces(arr));




