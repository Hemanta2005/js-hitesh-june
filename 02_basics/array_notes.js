/*
# JavaScript Arrays - Quick Revision

## Create Array

```js
const arr = [1, 2, 3, 4, 5]
```

---

## Access Elements

```js
arr[0] // First element
arr[1] // Second element
```

---

## push() - Add at End

```js
arr.push(6)
```

Before:

```js
[1,2,3]
```

After:

```js
[1,2,3,6]
```

---

## pop() - Remove Last Element

```js
arr.pop()
```

Before:

```js
[1,2,3]
```

After:

```js
[1,2]
```

---

## unshift() - Add at Beginning

```js
arr.unshift(0)
```

Before:

```js
[1,2,3]
```

After:

```js
[0,1,2,3]
```

---

## shift() - Remove First Element

```js
arr.shift()
```

Before:

```js
[1,2,3]
```

After:

```js
[2,3]
```

---

## includes() - Check Existence

```js
arr.includes(3)
```

Output:

```js
true
```

---

## indexOf() - Find Position

```js
arr.indexOf(3)
```

Output:

```js
2
```

---

## join() - Convert Array to String

```js
arr.join()
```

Output:

```js
"1,2,3,4"
```

---

# Slice vs Splice

## slice(start, end)

```js
const arr = [0,1,2,3,4,5]

const result = arr.slice(1,4)
```

Output:

```js
[1,2,3]
```

Original Array:

```js
[0,1,2,3,4,5]
```

✅ Does NOT modify original array

---

## splice(start, count)

```js
const arr = [0,1,2,3,4,5]

const result = arr.splice(1,3)
```

Output:

```js
[1,2,3]
```

Original Array:

```js
[0,4,5]
```

❌ Modifies original array

---

# Combining Arrays

## concat()

```js
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const result = arr1.concat(arr2)
```

Output:

```js
[1,2,3,4,5,6]
```

---

## Spread Operator (...)

```js
const result = [...arr1, ...arr2]
```

Output:

```js
[1,2,3,4,5,6]
```

✅ Modern and preferred

---

# flat()

```js
const arr = [1,2,[3,4],[5,[6,7]]]

arr.flat(Infinity)
```

Output:

```js
[1,2,3,4,5,6,7]
```

---

# Array.isArray()

```js
Array.isArray([1,2,3])
```

Output:

```js
true
```

```js
Array.isArray("Hello")
```

Output:

```js
false
```

---

# Array.from()

Convert string to array.

```js
Array.from("Hemanta")
```

Output:

```js
["H","e","m","a","n","t","a"]
```

---

# Array.of()

Create array from values.

```js
Array.of(100,200,300)
```

Output:

```js
[100,200,300]
```

---

# Most Important Methods For Beginners

✅ push()

✅ pop()

✅ shift()

✅ unshift()

✅ includes()

✅ indexOf()

✅ slice()

✅ splice()

✅ concat()

✅ spread (...)

✅ Array.isArray()

✅ Array.from()

✅ Array.of()

These are enough for 90% of beginner JavaScript.

*/