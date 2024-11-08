# Basic Problem Solving with TypeScript

## Problem 1

Write a TypeScript function `sumArray` that takes an array of numbers and returns the sum of all elements in the array.

> [Solution](src/problem-1.ts)

## Problem 2

Create a TypeScript function `removeDuplicates` that accepts an `array` of numbers and returns a new `array` with duplicates removed. Preserve the original order of elements.

> [Solution](src/problem-2.ts)

## Problem 3

Create a TypeScript function called `countWordOccurrences` that accepts a sentence (`string`) and a word (`string`). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

> [Solution](src/problem-3.ts)

## Problem 4

Define a union type `Circle` and `Rectangle`, where each type has a unique `shape` property. Create a function `calculateShapeArea` that uses type guards to calculate the area based on the shape type.

> [Solution](src/problem-4.ts)

## Problem 5

Write a generic function `getProperty` that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

> [Solution](src/problem-5.ts)

## Problem 6

Define an interface Profile with properties name, age, and email. Create a function `updateProfile` that accepts an object of type `Profile` and an `object` of type `Partial<Profile>` representing the updates. The function should return the updated profile.

> [Solution](src/problem-6.ts)

## Problem 7

Create a TypeScript class `Car` with properties make, model, and year. Include a method `getCarAge` that returns the car's age based on the current year.

> [Solution](src/problem-7.ts)

## Problem 8

Create a function `validateKeys<T>(obj: T, keys: (keyof T)[])` that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

> [Solution](src/problem-8.ts)

</br>

## Blog Writing (any one)

Write an impactful blog posts covering the following topics:

1. The significance of union and intersection types in Typescript.
2. How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.
3. Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

</br>

> [Blog](blog-3.md)
