# Async JS

* Event Loop
* callbacks

```js
function doLongRunningThingAndGiveAnswerAfter(someFunctionToCallLater) {
  setTimeout(function () {
    someFunctionToCallLater(42);
  }, 2000);
}

function someOtherFunctionThatGetsTheAnswer(answer) {
  // this will log after 2 seconds...
  console.log(answer);
}

doLongRunningThingAndGiveAnswerAfter(someOtherFunctionThatGetsTheAnswer);
```

* Promises
  * async / await
* API Requests, JSON, fetch, cors