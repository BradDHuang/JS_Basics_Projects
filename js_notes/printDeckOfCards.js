
// The format of the 1st print out (13 cards per line):
// e.g. 1 of Spades, 2 of Spades, 3 of Spades,... 13 of Spades.
// 2nd: You need to print cards in each color in random order. 
// So there will be 4 lines, each line has 13 cards of same color in a random order.
// 3rd: You need to print cards in total random order. 
// So there will be 4 lines, each line has 13 cards that can be in different color in a random order.

let subDeck1 = [];
let subDeck2 = [];
let subDeck3 = [];
let subDeck4 = [];
const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function deckOfCards() {
    const logos = ["Spades", "Hearts", "Diamonds", "Clubs"];
    for (let i in nums) {
        // console.log(i); // index.
        subDeck1.push(`${nums[i]}-${logos[0]}, `);
        subDeck2.push(`${nums[i]}-${logos[1]}, `);
        subDeck3.push(`${nums[i]}-${logos[2]}, `);
        subDeck4.push(`${nums[i]}-${logos[3]}, `);
    }  
    print("", subDeck1);
    print("", subDeck2);
    print("", subDeck3);
    print("", subDeck4);
}
console.log("*** 1st print out: ***");
deckOfCards();
console.log("");

function print(res, arr) {
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    console.log(res);
}

function randomize(arr) {
    let len = arr.length;
    let rand;
    while (len > 0) {
        rand = Math.floor(Math.random() * len);
        len--;
        [arr[len], arr[rand]] = [arr[rand], arr[len]];
    }
}
console.log("*** 2nd print out: ***");
randomize(subDeck1);
randomize(subDeck2);
randomize(subDeck3);
randomize(subDeck4);
print("", subDeck1);
print("", subDeck2);
print("", subDeck3);
print("", subDeck4);
console.log("");

let mixedArr = [...subDeck1, ...subDeck2, ...subDeck3, ...subDeck4];
console.log("*** 3rd print out: ***");
randomize(mixedArr);
let res = "";
for (let i = 0; i < mixedArr.length; i++) {
    res += mixedArr[i];
    if ((i + 1) % 13 === 0) {
        console.log(res);
        res = "";
    }
}

/*

*** 1st print out: ***
1-Spades, 2-Spades, 3-Spades, 4-Spades, 5-Spades, 6-Spades, 7-Spades, 8-Spades, 9-Spades, 10-Spades, 11-Spades, 12-Spades, 13-Spades, 
1-Hearts, 2-Hearts, 3-Hearts, 4-Hearts, 5-Hearts, 6-Hearts, 7-Hearts, 8-Hearts, 9-Hearts, 10-Hearts, 11-Hearts, 12-Hearts, 13-Hearts, 
1-Diamonds, 2-Diamonds, 3-Diamonds, 4-Diamonds, 5-Diamonds, 6-Diamonds, 7-Diamonds, 8-Diamonds, 9-Diamonds, 10-Diamonds, 11-Diamonds, 12-Diamonds, 13-Diamonds, 
1-Clubs, 2-Clubs, 3-Clubs, 4-Clubs, 5-Clubs, 6-Clubs, 7-Clubs, 8-Clubs, 9-Clubs, 10-Clubs, 11-Clubs, 12-Clubs, 13-Clubs, 

*** 2nd print out: ***
2-Spades, 10-Spades, 1-Spades, 4-Spades, 13-Spades, 11-Spades, 12-Spades, 6-Spades, 7-Spades, 5-Spades, 3-Spades, 9-Spades, 8-Spades, 
7-Hearts, 5-Hearts, 12-Hearts, 3-Hearts, 2-Hearts, 11-Hearts, 9-Hearts, 1-Hearts, 13-Hearts, 10-Hearts, 4-Hearts, 6-Hearts, 8-Hearts, 
4-Diamonds, 11-Diamonds, 7-Diamonds, 12-Diamonds, 8-Diamonds, 2-Diamonds, 6-Diamonds, 9-Diamonds, 1-Diamonds, 13-Diamonds, 10-Diamonds, 3-Diamonds, 5-Diamonds, 
7-Clubs, 4-Clubs, 3-Clubs, 11-Clubs, 9-Clubs, 12-Clubs, 10-Clubs, 8-Clubs, 6-Clubs, 5-Clubs, 2-Clubs, 13-Clubs, 1-Clubs, 

*** 3rd print out: ***
8-Spades, 5-Hearts, 13-Hearts, 9-Clubs, 4-Diamonds, 11-Spades, 2-Spades, 12-Clubs, 9-Diamonds, 7-Diamonds, 1-Spades, 5-Diamonds, 6-Diamonds, 
9-Spades, 13-Diamonds, 7-Spades, 8-Diamonds, 12-Hearts, 11-Hearts, 6-Spades, 1-Hearts, 5-Clubs, 6-Hearts, 4-Clubs, 3-Diamonds, 10-Clubs, 
6-Clubs, 11-Clubs, 3-Clubs, 8-Hearts, 7-Hearts, 10-Hearts, 3-Spades, 1-Clubs, 4-Hearts, 3-Hearts, 12-Diamonds, 2-Clubs, 1-Diamonds, 
13-Clubs, 9-Hearts, 10-Diamonds, 7-Clubs, 2-Diamonds, 5-Spades, 12-Spades, 8-Clubs, 10-Spades, 13-Spades, 11-Diamonds, 4-Spades, 2-Hearts,

*/







