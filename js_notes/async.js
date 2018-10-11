

// async e.g.
function printString(string){
    setTimeout(
        () => {
        console.log(string);
        }, 
        Math.floor(Math.random() * 100) + 1
    );
}
function printAll(){
    printString("A");
    printString("B");
    printString("C");
}
printAll();

// With callback:
function printString(string, callback){
    setTimeout(
        () => {
        console.log(string);
        callback();
        }, 
        Math.floor(Math.random() * 100) + 1
    );
}
function printAll(){
    printString("A", () => {
        printString("B", () => {
            printString("C", () => {});
        });
    });
}
printAll();

// With Promise:
function printString(string){
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
            console.log(string);
            resolve();
            }, 
            Math.floor(Math.random() * 100) + 1
        );
    });
}
function printAll(){
    printString("A")
        .then(() => printString("B"))
        .then(() => printString("C"));
}
printAll();

// With async/await:
async function printAll(){
    await printString("A");
    await printString("B");
    await printString("C");
}
printAll();

// another e.g. with res.
function addString(previous, current){
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(previous + current);
            }, 
            Math.floor(Math.random() * 100) + 1
        );
    });
}
function addAll(){  
    addString('', 'A')
        .then(res => addString(res, 'B'))
        .then(res => addString(res, 'C'))
        .then(res => {
            console.log(res); // Prints out "ABC"
        });
}
addAll();








