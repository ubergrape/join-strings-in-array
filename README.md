join-strings-in-array
=====================

Joins strings in given array with the given or default delimiter.
With the flag trims last delimiter in non last items

### Instalation
```
npm i --save join-strings-in-array
```

### Arguments
```js
joinStringsInArray(array[, delimeter = ' ', trimLast = false])
```

### Examples
```js
import joinStringsInArray from 'join-strings-in-array'

joinStringsInArray(['a', 'b', {}, 'c']), // ['a b ', {}, 'c']
joinStringsInArray(['a', 'b', {}, 'c'], true), // ['a b', {}, 'c']
joinStringsInArray(['a', 'b', {}, 'c'], '-'), // ['a-b-', {}, 'c']
joinStringsInArray(['a', 'b', {}, 'c'], '-', true), // ['a-b', {}, 'c']
```
