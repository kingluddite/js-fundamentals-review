# Good to know

## strict mode
```
'use strict'
```

* If you use this and try this:

```
'use strict'
dog = 'peaches';
```

* You will get an error that `dog` is not defined
* If you don't use `'strict'` you won't get that error

## It is enabled by default when writing JavaScript modules
* You will just be writing JavaScript modules

## semi-colon
* Used to end a `statement`
* semi-colon go at end of statement

## Why don't I have a semi-colon on first line?
```
if (age > 10) {;
    console.log('you are old');
}
```

* Because that is referred to as a "code block"
* We could use ASI (Automatic Semi-colon insertion)

## == vs ===
// == checks the value but not the type.
// “1” == 1 => true
// === checks the value and the type.
// “1" === 1 => false
// = Assignment Operator: Assigns the value from the right to the variable on the left.

## Scoping
* Answers the question: "Where are my variables available to me?"
* var variables are scoped differently than `const` and `let`
* `var` variables are **function** scoped
* `let` and `const` variables are  **block** scoped

### Good tips with declaring variables
* `const` by default
* change to `let` when you need it
* rarely (if ever) use `var`

## Naming conventions for variables
* Don't start with capital letter
* Variables should not start with a capital letter unless they are a "class"
* Variables must start with `a-z`
* They also can start with or contain `$` or `_`
* `_` is synonymous with lodash library
* `$` is synonymous with jQuery library
* Use camelCaseNotation for variable names
* Upper CamelCaseNotation for class based names
* You can not use kebab case in JavaScript (dashes are also substraction operator) this-is-kebab-case
* `this_is_snake_case`

# JavaScript Types
## There are 7 types in JavaScript
* way to remember this

`SNOB'N'US`

* String
    - 'word'
    - "word"
    - `word`
* Number
    - 21
    - other languages have decimal types, floats, integers, JavaScript has one 'Number' type
* Object
    - Everything in JavaScript is an Object
    - Functions, arrays, dates are also Objects
* Boolean
* Null
* Undefined
* Symbol
    - new to JavaScript
    - Give us a guaranteed unique identifier useful when you need to come up with a unique id inside of an object

### Primitive types
* String
* Number
* Boolean

## In modern Front-End Web Development 3 main components:

1. Content
  * HTML and markup
2. Style
  * CSS and layout
3. Interactivity
  * JavaScript and interactivity and behavior
      - JavaScript can work with the `window` object (HTML and CSS can not)
          + Everything you do with JavaScript in the browser happens inside the `window`
          + A browser has a special object called the `window object`

## Good way to think about HTML, CSS and JavaScript
* Think of HTML as the walls of a house
* Think of CSS as the paint on those walls
* Think of JS as the electrical sockets in that house

## Window Object
Contains lots of information

* Current location URL
* Web page or the `document` you have open
* The application code you've written

### Let's experiment with the window object in the browser
* Pick any website

`> window`

`> window.document`

`> window.document.images`

* Returns and array, an empty array if no images

`> window.location.href`

`> window.location.host`

* **tip** `cmd + k` clears console (mac)

* alert is `window.alert`
* Also
    - `window.document`
    - `window.document.body`
    - `document.head`
    - `window.document.forms`
    - `window.document.scripts`

## What happens when the browser loads a web page?
It creates TWO things:

1. Window
2. Document

* Both window and document are objects
    - Objects are containers for data and can perform specific actions for that particular object
    - Many objects built into the browser environment and JavaScript itself
    - You can create `custom` objects using JavaScript
* Window is the global scope of your JavaScript program

## Resources
* [strict mode MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [QUOKKA](https://quokkajs.com/)
* [SNOB'N'US]([reference](https://twitter.com/wesbos/status/1136729371513954312?lang=en)
* [Use Web Bos Eslint and Prettier setup](https://github.com/wesbos/eslint-config-wesbos)
