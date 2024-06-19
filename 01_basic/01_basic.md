JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic to advanced.

### This tutorial covers every version of JavaScript:

- The Original JavaScript ES1 ES2 ES3 (1997-1999)
- The First Main Revision ES5 (2009)
- The Second Revision ES6 (2015)
- The Yearly Additions (2016, 2017 ... 2021, 2022)
- JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.
- ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.

### JavaScript Programs
- A computer program is a list of "instructions" to be "executed" by a computer.
- In a programming language, these programming instructions are called statements.
- A JavaScript program is a list of programming statements.
- In HTML, JavaScript programs are executed by the web browser.

### JavaScript Code Blocks
- JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
- The purpose of code blocks is to define statements to be executed together.
- One place you will find statements grouped together in blocks, is in JavaScript functions:

`
The <script> Tag In HTML, JavaScript code is inserted between <script> and </script> tags.
`
> Example
```
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```
```
Old JavaScript examples may use a type attribute: 
<script type="text/javascript">.
The type attribute is not required. JavaScript is the default scripting language in HTML.
```

### JavaScript can "display" data in different ways:

- Writing into an HTML element, using innerHTML.
- Writing into the HTML output using document.write().
- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

### JavaScript Keywords
- JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
- Our Reserved Words Reference lists all JavaScript keywords.
- Here is a list of some of the keywords you will learn about in this tutorial:

### JavaScript Keywords and Descriptions

| Keyword   | Description                                      |
|-----------|--------------------------------------------------|
| var       | Declares a variable                              |
| let       | Declares a block variable                        |
| const     | Declares a block constant                        |
| if        | Marks a block of statements to be executed on a condition |
| switch    | Marks a block of statements to be executed in different cases |
| for       | Marks a block of statements to be executed in a loop |
| function  | Declares a function                              |
| return    | Exits a function                                 |
| try       | Implements error handling to a block of statements|

### JavaScript Values
- The JavaScript syntax defines two types of values:
- Fixed values, Fixed values are called Literals.
- Variable values are called Variables.

### JavaScript Literals
The two most important syntax rules for fixed values are:

1. Numbers are written with or without decimals:

10.50

1001

2. Strings are text, written within double or single quotes:

"John Doe"

'John Doe'

### JavaScript Variables
- In a programming language, variables are used to store data values.
- JavaScript uses the keywords var, let and const to declare variables.
- An equal sign is used to assign values to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6: 

let x;

x = 6;

### JavaScript Operators
- JavaScript uses arithmetic operators ( + - * / ) to compute values:
- JavaScript uses an assignment operator ( = ) to assign values to variables:
let x, y;
x = 5;
y = 6;

### JavaScript Expressions
An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an evaluation.

For example, 5 * 10 evaluates to 50:

5 * 10

### JavaScript Identifiers / Names
Identifiers are JavaScript names.

Identifiers are used to name variables and keywords, and functions.

The rules for legal names are the same in most programming languages.

A JavaScript name must begin with:

- A letter (A-Z or a-z)
- A dollar sign ($)
- Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.

```
Note
Numbers are not allowed as the first character in names.

This way JavaScript can easily distinguish identifiers from numbers.
```
### JavaScript is Case Sensitive
All JavaScript identifiers are case sensitive. 

The variables lastName and lastname, are two different variables:
JavaScript does not interpret LET or Let as the keyword let.

### JavaScript Character Set
JavaScript uses the Unicode character set.

Unicode covers (almost) all the characters, punctuations, and symbols in the world.

For a closer look, please study our Complete Unicode Reference.


## JavaScript Variables
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

- Automatically
- Using var
- Using let
- Using const
```
Note
It is considered good programming practice to always declare variables before use.
```
```
Note
The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.
```

When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

```
Note
Variables are containers for storing values.
```

### JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _ (but we will not use it in this tutorial).
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
```
Note
The "equal to" operator is written like == in JavaScript.
```

### Declaring a JavaScript Variable
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var or the let keyword:

var carName;

or:

let carName;

After the declaration, the variable has no value (technically it is undefined).

To assign a value to the variable, use the equal sign:

carName = "Volvo";


### One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:

Example
let person = "John Doe", carName = "Volvo", price = 200;

### Value = undefined
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

The variable carName will have the value undefined after the execution of this statement:
```
Note
You cannot re-declare a variable declared with let or const.

This will not work:

let carName = "Volvo";
let carName;
```
## JavaScript Let
The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope

### Block Scope
Before ES6 (2015), JavaScript did not have Block Scope.

JavaScript had Global Scope and Function Scope.

ES6 introduced the two new JavaScript keywords: let and const.

These two keywords provided Block Scope in JavaScript:

```
Example
Variables declared inside a { } block cannot be accessed from outside the block:

{
  let x = 2;
}
// x can NOT be used here
```

### Global Scope
Variables declared with the var always have Global Scope.

Variables declared with the var keyword can NOT have block scope:
```
Example
Variables declared with varinside a { } block can be accessed from outside the block:

{
  var x = 2;
}
// x CAN be used here
```
### Cannot be Redeclared
Variables defined with let can not be redeclared.

You can not accidentally redeclare a variable declared with let.

```
With let you can not do this:

let x = "John Doe";

let x = 0.
```
```
Variables defined with var can be redeclared.

With var you can do this:

var x = "John Doe";

var x = 0;
```

### Redeclaring Variables
Redeclaring a variable using the var keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:
```
Example
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```
Redeclaring a variable using the let keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:
```
Example
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```
### Difference Between var, let and const
| Keyword | Scope    | Redeclare | Reassign | Hoisted | Binds | this |
|---------|----------|-----------|----------|---------|-------|------|
| var     | Function | No        | Yes      | Yes     | Yes   | Yes  |
| let     | Block    | Yes       | No       | No      | No    | No   |
| const   | Block    | Yes       | No       | No      | No    | No   |

### What is Good?
- let and const have block scope.

- let and const can not be redeclared.

- let and const must be declared before use.

- let and const does not bind to this.

- let and const are not hoisted.

### What is Not Good?
- var does not have to be declared.

- var is hoisted.

- var binds to this.

### Redeclaring
Redeclaring a JavaScript variable with var is allowed anywhere in a program:
```
Example
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
```
With let, redeclaring a variable in the same block is NOT allowed:
```
Example
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
```
Redeclaring a variable with let, in another block, IS allowed:
```
Example
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}
```
### Let Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:
```
Example
This is OK:

carName = "Volvo";
var carName;
```
If you want to learn more about hoisting, study the chapter [JavaScript Hoisting](https://www.w3schools.com/js/js_hoisting.asp)

Variables defined with let are also hoisted to the top of the block, but not initialized.

Meaning: Using a let variable before it is declared will result in a ReferenceError:

Example
carName = "Saab";
let carName = "Volvo";


