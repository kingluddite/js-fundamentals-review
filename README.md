# DOM
* Document Object Model
* When the browser reads an HTML file it creates a treelike structure of nodes

## What is a node?
* Node is a branching point that reveals more nodes
* Each node is an HTML element or a JavaScript object that has properties and methods that can be accessed and used
* Tree nodes is top down structure
* **note** Not like the traditional tree structure with root on bottom
8 The tree structure is the DOM tree or the Document Object Model

## MDN
Mozilla Developer Network
[link to MDN](https://developer.mozilla.org/en-US/)

**note**: The DOM is NOT JavaScript but it is an interface that we can interact with the programming langauge JavaScript

[Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - "The DOM is an API that allows access to and modification of the current document. It allows manipulation of document Node and Element. HTML, XML and SVG have extended it to manipulate their specific elements."

"The Document Object Model (DOM) is a programming interface for `HTML`, `XML` and `SVG` documents. It provides a structured representation of the document as a tree. The `DOM` defines methods that allow access to the tree, so that they can change the document **structure**, **style** and **content**. The `DOM` provides a representation of the document as a structured group of nodes and objects, possessing various properties and methods. Nodes can also have **event handlers** attached to them, and once an event is **triggered**, the event handlers get executed. Essentially, it connects web pages to scripts or programming languages."

### 3 Types of Actions We Can Do to the DOM
* Manipulation
    - where we manipulate elements
* Traversal
    - Selecting an element based on the relationship with another element.
        + Example: select a child element of a known parent element like a `<Li>` child of an `<UL>`
* Events
    - Listening to a specific event, like a mouse click or a key press, and having something execute
