# Restaurance
![Heroes of the Storm](img/heroes.png)  
A package to send elements to the Heroes of the Storm.

## Installation
### In a browser
```html
<script src="path/to/restaurance.bundle.js"></script>
```

### via NPM
```js
import restaurance from "restaurance"; //ES6
const restaurance = require("restaurance"); //CommonJS, ES6
var restaurance = require("restaurance"); //CommonJS
//etc...
```
## Documentation
### restaurance([hotsImage : Object[, elems : Array[, duration : Number]]])

Kidnap elements into the `Heroes of the Storm` and show advertisement of the `Heroes of the Storm`.
#### Arguments
##### hotsImage
An object which contains data of hots image.

default:
```js
{
	width: 150,
	height: 150,
	x: (window.innerWidth - width) / 2,
	y: (window.innerHeight - width) / 2
}
```

##### elems
An array which contains selectors or elements which will be kidnapped into the `Heroes of the Storm`.

default:
All elements which don't have any children.

##### duration
The duration(seconds) of the kidnapping animation.
It should be more than 2s.

default:
`30`

## [Examples](https://HelloWorld017.github.io/restaurance/)
