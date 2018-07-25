

MODULES (IN ES2015)

• Module: a single, entire JS file and can be imported by another

• A module file might contain a class definition, a set of related classes, 
    a library of utility functions, or just a script of code to execute
    
• Module:
• Contents is not wrapped in any special construct
• Export values to be shared with other files
• Top-level variables and functions are not visible in other files
• Code is evaluated in strict mode
• Cyclic module dependencies are supported
• Enables APIs to be defined in modules instead of global variables

• Different from node.js’ require()


MODULES - EXPORT
• Can export any number of values from a module
    • values can be any JS type including functions and classes
    • can specify a default export => a named export with the name "default"
• To define and export a value
    • export let name = value;
    • export function name(params) { ... }
    • export class name { ... }
• To export multiple, previously defined values
    • export {name1, name2 as other-name2, ...};
• To specify a default export
    • export default expr;
    • export {name as default};
    • export default function (params) { ... };
    • export default class { ... };
    
MODULES - IMPORT
• Can import values from other modules
• Imports are hoisted to top of file
• To import all exports into a single object
    • import * as obj from 'module-path'
• To import specific exports
    • import {name1, name2 as other-name, ...} from 'module-path';
• To import the default export
    • import default-name from 'module-path';
    • import {default as default-name} from 'module-path';
• To import the default export and specific exports
    • import default-name, {name1, name2, ...} from 'module-path';
• To import a module only for its side effects
    • import 'module-path';
    



