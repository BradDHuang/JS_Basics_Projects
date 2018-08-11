

// RegExp


const re1 = /going/;
const re2 = new RegExp("going"); // equivalent object constructor

const input = "As I was going to Saint Ives";
input.startsWith("As") // true
input.endsWith("Ives") // true
input.startsWith("going", 9) // true -- start at index 9
input.endsWith("going", 14) // true -- treat index 14 as the end of the string
input.includes("going") // true
input.includes("going", 10) // false -- starting at index 10
input.indexOf("going") // 9
input.indexOf("going", 10) // -1
input.indexOf("nope") // -1
input.toLowerCase().startsWith("as") // true
const output = input.replace("going", "walking");

// /<PATTERN>/<FLAG>
/*
<flag>
• i – ignore case
• g – global match
• m – multi-line match
*/
/*
<pattern>
• Bracket []
• Metacharacters \*
• Quantifiers n
• ^-begin, $-end
• RegExp properties
• RegExp methods
*/

/*
Not allowed – used to build pattern
• ^, $, ., *, +, ?, =, !, :, |, \, /, (, ), {, }
• Their use must proceed with ‘\’, e.g. /\\/
*/

/*
/<PATTERN>/ - CHARACTER CLASS
Any character in the class, within []
• [...] - Any one character between the brackets.
• [^...] - Any one character not between the brackets.
• . - Any character except newline or another Unicode line terminator.
• \w - Any ASCII word character. Equivalent to 
[a-zA-Z0-9_].
• \W - Any character that is not an ASCII word character. Equivalent to [^a-zA-Z0-9_].
• \s - Any Unicode whitespace character.
• \S - Any character that is not Unicode whitespace. Note that \w and \S are not the same thing.
• \d - Any ASCII digit. Equivalent to 
[0-9].
• \D - Any character other than an ASCII digit. Equivalent to [^0-9].
• [\b] - A literal backspace (special case).
*/

/*
/<PATTERN>/ - REPETITION
To repeat, next to an item
• { n , m } - Match the previous item at least n times but no more than m times.
• { n ,} - Match the previous item n or more times.
• { n } - Match exactly n occurrences of the previous item.
• ? - Match zero or one occurrences of the previous item. 
That is, the previous item is optional. Equivalent to {0,1}.
• + - Match one or more occurrences of the previous item. Equivalent to {1,}.
• * - Match zero or more occurrences of the previous item. Equivalent to {0,}.
• /\d{2,4}/, /\w{3}\d?/, /[?(]*/

/*
/<PATTERN>/ - ALTERNATION
• A special charater (|) to specify alternatives
• /ab|cd |ef/
• /d{3}|[a-z]{4}/
• Left to right precedence
*/

/*
/<PATTERN>/ - GROUPING
() is used for grouping into a single subexpression so the items can be treated as a single unit.
• /java(script)?/ - script is optional
• /(ab|cd)+|ef/ Also used for defining subexpressions within the complete pattern.
• /[a-z]+(\d+)/
*/

/*
/<PATTERN>/ - ANCHOR CHARACTERS
To specify the matching position of the string
• ^ - Match the beginning of the string and, 
      in multiline searches, the beginning of a line.
• $ - Match the end of the string and, in multiline searches, the end of a line.
• \b - Match a word boundary. That is, match the position between a \w character and a \W character 
       or between a \w - character and the beginning or end of a string. (Note, however, that [\b] matches backspace.)
• \B - Match a position that is not a word boundary.
• (?= p ) - A positive lookahead assertion. Require that the following characters match the pattern p, 
            but do not include those characters in the match.
• (?! p ) - A negative lookahead assertion. Require that the following characters do not match the pattern p.
*/


// match a word boundary:

// For example, /b/ matches the character "b". 
// By placing a backslash in front of "b", that is by using /\b/, 
// the character becomes special to mean match a word boundary.
// e.g.
    // test: /\.js$/,


// Password check:

// var str = "b3d456"; // false, A-Z
// var str = "B3D456"; // false, a-z
// var str = "bcdbcd"; // false, 0-9
// var str = "b3d456()"; // false, 0-9a-zA-Z
// var str = "b3d45"; // false, >= 6
// var str = "b3d45678911"; // false, <= 10
var str = "b3d456D"; // true

function checkPassword(str) {
    var res = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,10}$/;
    return res.test(str);
}
console.log(checkPassword(str));


