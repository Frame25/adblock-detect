# AdBlock Detect library

It's just ES6 class that has simple logic for detecting AdBlock Extention in browser. 

## Installation

You can install it with npm: 

```shell
npm install @frame25/adblock-detect
```

**IMPORTANT!** To add it into your project you should use Babel and Webpack, because it's written in ES6 style.
In this case you do as usual: 
```js
import AdBlockDetect from '@frame25/adblock-detect';
```

## Options

Class constructor gets an object with config. Here are properties:

```js
new AdBlockDetect({
  debug: false, // if is true, on each step you'll have a message in console
  pixelClass: 'any classes', // you can add some extra custom css classes to pixel if need
  pixelStyle: 'background: red;', // adding custom extra styles, BUT do NOT add "pointer-events: none", "visibility: hidden" and "display: none"
  loopLimit: 5, // count of checking cycles; default is recomended
  loopInterval: 100, // interval time in milliseconds; default is recomended
  onDetected: function(){}, // if AdBlock in browser callback
  onNotDetected: function(){}, // if NO AdBlock in browser callback
  onEnd: function(){}, // finish callback in each case; return result boolean value with AdBlock detection
})
```

## Full example

After creating an object from class, you should init it. So it could be like this: 
```js
import AdBlockDetect from '@frame25/adblock-detect';
const abd = new AdBlockDetect({ 
  /* your config */ 
  onEnd (result) { window.adblockDetected = result }
});
abd.init(); // to start process
```

## Easy check

If you don't need any custom stuff, and just want simple one-row result, here it is:

```js
AdBlockDetect.go() // after 500ms you'll have window.AdBlockEnabled === true or false
```

This method returns a promise, so you can do like this:

```js
AdBlockDetect.go().then(adblockIsOn => {
  // adblockIsOn is Boolean
  if (adblockIsOn) console.log('Damn it\'s enabled!')
  else console.log('Get the party started!')
})