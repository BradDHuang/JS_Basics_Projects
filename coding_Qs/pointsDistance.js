
// Submit a program that outputs 26 coordinates listed in order, 
// closest-to-farthest (physically on the Cartesian Plane) from a single input origin.
/*
Create a program that will take in a single x and y coordinate as the origin.  
After the input is provided, the output should be all of the coordinates(all 26 coordinates), 
in order of closest-to-farthest from the origin.
So, if the origin is (6,33), then the first item in the output would be the coordinate closest to (6,33), 
then the second closest, then third closest, and so on for all 26 input coordinates.
The origin should vary; do not hardcode a static origin.  
*/


let arrList = [
    {"id":"a","value":"31,49"},
    {"id":"b","value":"44,67"},
    {"id":"c","value":"93,6"},
    {"id":"d","value":"20,16"},
    {"id":"e","value":"68,53"},
    {"id":"f","value":"71,8"},
    {"id":"g","value":"61,90"},
    {"id":"h","value":"34,97"},
    {"id":"i","value":"21,63"},
    {"id":"j","value":"19,84"},
    {"id":"k","value":"0,81"},
    {"id":"l","value":"6,76"},
    {"id":"m","value":"43,64"},
    {"id":"n","value":"18,64"},
    {"id":"o","value":"10,61"},
    {"id":"p","value":"37,27"},
    {"id":"q","value":"44,88"},
    {"id":"r","value":"75,63"},
    {"id":"s","value":"99,46"},
    {"id":"t","value":"28,51"},
    {"id":"u","value":"88,79"},
    {"id":"v","value":"47,21"},
    {"id":"w","value":"18,66"},
    {"id":"x","value":"84,100"},
    {"id":"y","value":"75,92"},
    {"id":"z","value":"32,33"}
];

let srcX = [];
let srcY = [];
arrList.forEach(e => {
    const co = e.value.split(",");
    srcX.push(co[0]);
    srcY.push(co[1]);
});
// console.log(srcX);
// console.log(srcY);
let initPointX = srcX[Math.floor(Math.random() * 26)];
let initPointY = srcY[Math.floor(Math.random() * 26)];
let initP = [initPointX, initPointY];
console.log(`The origin is (${initP})`);
let mapping = [];
arrList.forEach(e => {
    let co = e.value.split(",");
    const dist = Math.sqrt((parseInt(initP[0]) - parseInt(co[0])) * (parseInt(initP[0]) - parseInt(co[0]))
                         + (parseInt(initP[1]) - parseInt(co[1])) * (parseInt(initP[1]) - parseInt(co[1])));
    mapping.push([e.id, e.value, dist]);
});
mapping.sort((a, b) => {
    return a[2] - b[2];
});
// console.log(mapping); // Array(26)
mapping.forEach(e => {

    // console.log(e); // test

    console.log(`{id: ${e[0]}, value: ${e[1]}}`);
});



