// Lodash
// _. - use lodash
// Lodash is a JavaScript library for utility functions.

// Map - creates a new array with the results of calling a function for every element in the array.
// _.map(array, iteratee)
// const people = [
//   {
//     name: 'Khrystyna',
//     age: 21,
//     location: {
//       country: 'Ukraine',
//       city: 'Lviv',
//     },
//   },
//   {
//     name: 'Andriy',
//     age: 12,
//     location: {
//       country: 'Ukraine',
//       city: 'Kyiv',
//     },
//   },
//   {
//     name: 'Nazar',
//     age: 25,
//     location: {
//       country: 'Poland',
//       city: 'Warsaw',
//     },
//   },
// ]

// const cityArray = people.map((person) => {
//   return person.location.city;
// })

// console.log(_.map(people, 'location.city'));
// console.log(cityArray);

// FlatMap - creates a new array with the results of calling a function for every element in the array.
// _.flatMap(array, iteratee)

// function duplicate(n) {
//   return [n, n]
// }

// function multiply(n) {
//   return n * 2
// }

// const arr = [1, 2, 3, 4]
// console.log(_.flatMap(arr, multiply))

// MapKeys - creates a new object with the results of calling a function for every key in the object.
// _.mapKeys(object, iteratee)

// const obj = { 'a': 1, 'b': 2 }

// console.log(_.mapKeys(obj, (value, key) =>  key + value))

// MapValues - creates a new object with the results of calling a function for every value in the object.
// _.mapValues(object, iteratee)

// const obj = {
//   'first': { name: 'Khrystyna', age: 21 },
//   'second': { name: 'Nazar', age: 25 },
// }

// console.log(_.mapValues(obj, (value) => value.age + 1))


// KeyBy - creates an object composed of keys generated from the results of running each element of collection thru iteratee.
// _.keyBy(collection, [iteratee = identity])

// const findPerson = people.find((person) => person.location.city === 'Lviv')
// console.log(findPerson)
// const userByCity = _.keyBy(people, 'location.city')
// console.log(userByCity['Warsaw'])
// console.log(userByCity['Lviv'])

// Get - returns the value at path of object.
// _.get(object, path, defaultValue)

// const obj = {
//   a: [
//     {
//       b: {
//         c: 3,
//       }
//     }
//   ]
// }

// console.log(obj.a[0].b.c)
//
// console.log(_.get(obj, 'a[0].b.d', 'default'))
// console.log(_.get(obj, ['a', '1', 'b', 'c'], 'default'))


// Set - sets the value at path of object.
// _.set(object, path, value)

// obj.a[0].b.d = 4

// _.set(obj, 'a[0].b.d', 4)
// _.set(obj, ['a', '0', 'b', 'e'], 5)
// console.log(obj)

// CloneDeep - creates a deep clone of value.
// _.cloneDeep(value) - for objects and arrays

// const obj = { a: 1, b: 2, c: 3 }
// const array = [1, 2, 3]

// const copyObj = _.cloneDeep(obj)
// copyObj.d = 4
// console.log(copyObj, obj)

// const copyArray = _.cloneDeep(array)
// copyArray.push(4)
// console.log(copyArray, array)

// First - returns the first element of array.
// _.first(array)
// const array = [1, 2, 3, 4, 5]
// array[0]
// console.log(_.first(array))

// Last - returns the last element of array.
// _.last(array)
// array[array.length - 1]
// console.log(_.last(array))

// Nth - returns the nth element of array.
// _.nth(array, n)
// const array = [1, 2, 3, 4, 5]
// console.log(_.nth(array, 3))

// Chunk - returns an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
// _.chunk(array, [size=1])
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(_.chunk(array, 6))

// Flatten - flattens array a single level deep.
// _.flatten(array)
// const array = [1, [2, [3, [4, [5]]]]]
// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(_.flatten(array))

// Sample - returns a random element from array.
// _.sample(array)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(_.sample(array))

// Shuffle - shuffles array in place.
// _.shuffle(array)

// console.log(_.shuffle(array))
// console.log(_.shuffle(array))
// console.log(_.shuffle(array))
// console.log(_.shuffle(array))

// Range - creates an array of numbers (positive or negative or both) between start and end (inclusive).
// _.range(start, end, [step=1])

// console.log(_.range(20))
// console.log(_.range(5, 20))
// console.log(_.range(10, 15))
// console.log(_.range(10, 20, 2))


// Random - returns a random number between min and max (inclusive).
// _.random(min, max, [floating=false])

// console.log(_.random(90, 100))
// console.log(_.random(3.2, 5))

// Math.round(Math.random() * 10)

// Min - returns the minimum value of array.
// _.min(array)

// const arr = [12, 34, 2, 76, 33, 96, 5, 43, 2]

// console.log(_.min(arr))

// Max - returns the maximum value of array.
// _.max(array)

// console.log(_.max(arr))

// MinBy - returns the minimum value of array.
// _.minBy(array, [iteratee=_.identity])

// console.log(_.minBy(people, 'age'))

// MaxBy - returns the maximum value of array.
// _.maxBy(array, [iteratee=_.identity])

// console.log(_.maxBy(people, 'age'))

// Sum - returns the sum of values in array.
// _.sum(array)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const sum = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(sum)
// console.log(_.sum(arr))

// Pull - removes all given values from array.
// _.pull(array, [values])
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(_.pull(array, 2, 4, 6))


// Compact - removes all falsey values from array.
// _.compact(array)

// const array = [0, 1, false, 2, '', 3, null, undefined, 4, 5, 6, 7, 8, 9, 10]
// console.log(_.compact(array))

// UniqueId - returns a unique identifier for object.
// _.uniqueId([prefix=''])

// console.log(_.uniqueId())
// console.log(_.uniqueId())
// console.log(_.uniqueId('user'))
// console.log(_.uniqueId('user'))
// console.log(_.uniqueId('user'))
// console.log(_.uniqueId('user'))
// console.log(_.uniqueId('user'))
// console.log(_.uniqueId('user'))
// console.log(_.uniqueId('user'))
// console.log(_.uniqueId('user'))

const arr = ['string one', 'hello world', 'trueFalse']
// CamelCase, KebabCase, SnakeCase, PascalCase
// Capitalize, Lowercase, Uppercase

// CamelCase - converts string to camel case.
// _.camelCase(string)

// console.log(_.map(arr, _.camelCase))


// KebabCase - converts string to kebab case.
// _.kebabCase(string)

// console.log(_.map(arr, _.kebabCase))


// SnakeCase - converts string to snake case.
// _.snakeCase(string)

// console.log(_.map(arr, _.snakeCase))


// PascalCase - converts string to pascal case.
// _.pascalCase(string)

// console.log(_.map(arr, _.pascalCase))
