# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases

`TypeScript` is a strictly typed programming language that is built on top of `EcmaScript` (popularly known as `JavaScript`). One of the best features of `TypeScript` is its `type guards` or `type narrowing`. This feature helps developers narrow down type of variable(s) or expression(s) within a specific scope by improving type safety and preventing runtime errors. Implementing type guards is particularly helpful in complex codebases where variables might be of more than one possible type. It allows a developer to use types with confidence and to predict the outcome.

## Why Type Guards Are Necessary

Type guards are necessary in TypeScript because -

- **Improved Type Safety**: TypeScript provide static type checking, meaning types a re checked at compile time. Type guards ensure that operations (functions/methods) are performed only on valid and expected types, which further helps avoid runtime errors.
- **Correct Data Flow**: Type guards ensure that the data flows relies in correct types.
- **Prevent Incorrect Parameter Passing**: When applied type guards in a function and later that function is called/invoked incorrect types parameters will not be permeable to pass as parameters.
- **Reliable Code**: The code will be safe and reliable by using type guards properly.

## Various Types of Type Guards and Their Use Cases

- [`typeof` operator](#typeof-operator)
- [`in` operator](#in-operator)
- [`instanceof` operator](#instanceof-operator)
- [`is` operator](#is-operator)

### typeof operator

typeof guard checks the type (of a variable or expression) using the `typeof` operator from `JavaScript`. It is used to narrow down the type of a variable to one of the primitive types in `JavaScript` (`string`, `number`, `boolean`, `symbol`, and `undefined`).

Example:

```ts
 type AlphaNumeric = string | number;

 const add = (x: AlphaNumeric, y: AlphaNumeric): AlphaNumeric => {
  if (typeof x === "number" && typeof y === "number") {
   return x + y;
  } else {
   return `${x} and ${y} are strings`;
  }
 };

 const result1 = add(2, "k");

 console.log(result1);
```

In the example above `add` function accepts the parameter `x` and `y` as `number` or `string` types. When the type of `x` and `y` both are number we are simple returning the sum of `x` and `y`. Else we are returning a simple statement in string.

### `in` operator

The `in` operator (type guard) checks if an object as the specific property. It is usually used to differentiate between objects with optional properties. Basic syntax for using `in` operator is `property in object`.

Example:

```ts
 type NormalUser = {
  name: string;
  isNormal: boolean;
 };

 type AdminUser = {
  name: string;
  role: "admin";
 };

 const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
   console.log(`User is Admin`);
  } else {
   console.log(`User is ${user.isNormal ? "Normal" : "Abnormal"}`);
  }
 };

 const normalUser: NormalUser = { name: "mamu", isNormal: false };
 const specialUser: AdminUser = { name: "mamu", role: "admin" };

 getUser(normalUser);
 getUser(specialUser);
```

In the example above, we are checking for role of a user based on type alias `NormalUser` and `AdminUser`. We know that property `role` only exists in type `AdminUser`. so we're logging it as Admin. We are doing otherwise if `role` property does not exist in `user`.

### `instanceof` operator

The `instanceof` operator is used to check if an object is an instance of a particular class. Then we will perform our operations based on the return value.

Example:

```ts
class Animal {
    makeSound() { 
        console.log("Sound Sound!");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Bheu Bheu!"); 
    }
}

function callAnimal(animal: Animal) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.makeSound();
    }
}

```

In the above example `Dog` is an extension of class `Animal`. in function `callAnimal` we are accepting any object of class `Animal` and then checking if the object `animal` is an instance of `Dog`; if the result is true, we are calling `bark` method from `Dog` class, otherwise we are calling the common method `makeSound`.

### `is` operator

The `is` operator is used to check type of a certain value similar to `instanceof`. Sometimes it can be a tool to handle `instanceof` guard more effectively. Using the `is` operator we can create functions to check types. The function takes an argument and checks if it matches a certain type (basic types/aliases/interfaces/classes). The function returns boolean, which can later help to narrow down types of a specific type. The basic syntax is `x is type`, where `x` is a variable and `type` is the specific type to check.

Example:

```ts
class Animal {
    makeSound() { 
        console.log("Sound Sound!");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Bheu Bheu!"); 
    }
}

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
}

function callAnimal(animal: Animal) {
    if (isDog(animal)) {
        animal.bark();
    } else {
        animal.makeSound();
    }
}
```

The above example is similar to the example used in `instanceof` but we are using a custom type checker function `isDog` (Type Predicate) to check the type of `animal` object. We combined `instance` of with `is` here.

**Conclusion**: Type guards are powerful tools for writing safe and readable code in TypeScript. These allow developers to handle types within a specific scope which reduces runtime errors and facilitate better intellisense from Code Editor(s). Applying type guards in complex `TypeScript` project can make codebase reliable and easier to maintain and understand.
