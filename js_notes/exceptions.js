

// ERROR AND EXCEPTION HANDLING:
/*
• Coders always make ‘mistakes’, called bugs
• When a program runs into a bug, execution crashes

• Errors need to be handled through Exception Handling
• Exception handling is a mechanism that deals with errors in a controlled fashion (no crash).

• Not error handling because it’s meant to deal with exceptional circumstances — that is:
• not the errors anticipated, such as invalid email address,
• but the ones aren’t, such as server is not working.
*/


// Call Stack:

function a() {
    console.log('a: calling b');
    b();
    console.log('a: done'); 
}
function b() {
    console.log('b: calling c');
    c();
    console.log('b: done'); 
}
function c() {
    console.log('c: throwing error');
    throw new Error('c error');
    console.log('c: done');
}
function d() {
    console.log('d: calling c');
    c();
    console.log('d: done'); 
}
try {
    a();
} catch(err) {
    console.log(err.stack);
}   
/* 
a: calling b
b: calling c
c: throwing error
Error: c error
*/






