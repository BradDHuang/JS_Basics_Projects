

// 1. Declare JSON as a JS string or read it from another place
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// 2. Convert JSON to a JS object

let obj = JSON.parse(text); // typically, as an array of individual objects

console.log(obj); // Object {employees: Array(3)}

// 3. Use the JS object to retrieve information
let e1 = obj.employees[1].firstName + " " + obj.employees[1].lastName;
console.log(e1); // Anna Smith
obj.employees[0].firstName = "Gilbert";
let newE0 = obj.employees[0].firstName;
console.log(newE0); // Gilbert

// 4. Convert a JS object to JSON

let jsonText = JSON.stringify(obj);

console.log(jsonText);
/*
{"employees":[{"firstName":"Gilbert","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]}
*/
// (the result has no white space)





