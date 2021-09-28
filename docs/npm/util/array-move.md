# array-move
移动数组中的元素到其他位置。

## Usage
```js
import {arrayMoveImmutable} from 'array-move';

const input = ['a', 'b', 'c'];

const array1 = arrayMoveImmutable(input, 1, 2);
console.log(array1);
//=> ['a', 'c', 'b']

const array2 = arrayMoveImmutable(input, -1, 0);
console.log(array2);
//=> ['c', 'a', 'b']

const array3 = arrayMoveImmutable(input, -2, -3);
console.log(array3);
//=> ['b', 'a', 'c']
```

## API
#### arrayMoveImmutable(array, fromIndex, toIndex)
Clones the given `array`, moves the item to a new position in the new `array`, and then returns the new `array`. The given array is not mutated.

#### arrayMoveMutable(array, fromIndex, toIndex)
Moves the item to the new position in the array. Useful for huge arrays where absolute performance is needed.

## 参考
[array-move](https://www.npmjs.com/package/array-move)