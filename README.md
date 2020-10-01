# es6interpolate

Index-based interpolation, built on top of ES6 Template Literals.

Leverages ES6's Tagged Template Literals to build an interpolation `function`, which can be later called to create a `string`, substituting values into the indexed positions.

Example usage:

```JavaScript
var iString = interpolate`This is ${1}, which is pretty ${2} and ${3}. Just to reiterate, ${1} is ${2}! (nothing ${0} ${100} here)`;
// Sets iString to an interpolation function

console.log(iString('interpolation', 'cool', 'useful', 'extra'));
// Substitutes the values into the iString and returns:
//   'This is interpolation, which is pretty cool and useful.
//   Just to reiterate, interpolation is cool! (nothing  here)'
```

As you can see from this example:
* You can reuse the same index as many times as you want.
* Indices are 1-based. `${0}` will always be substituted for an empty string.
* Other indices that do not contain matching values will be substituted for empty strings.
* Any arguments that aren't used for substitution will be silently ignored.

Interpolation indices can only be represented as whole numbers. If any interpolation index is invalid, the interpolation function will not be returned, and an error will be thrown instead:

```JavaScript
var iString = interpolate`Some ${'of'} these ${42} indices are ${1.1} invalid.`;
// Uncaught Invalid Interpolation Positions: of, 1.1
```
