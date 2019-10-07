---
title: Typescript Overview with Enact
github: https://github.com/enactjs/docs/blob/develop/src/pages/docs/tutorials/tutorial-typescript-enact/app-setup/index.md
order: 3
---
Quick reference guide for TypeScript Concepts before dive into code.

### Typescript Benefits
- TypeScript is an Object Oriented Programming language, which possess all the features of OOPs     concept hence helps to write more cleaner and robust code.

- TypeScript supports static type checking, thus you can find the error at compile time even before running your program thus helps to find errors.

- When you write large scale application and multiple developers are working on the same project, it becomes complex dealing with dynamic variables, hence static type features come into picture and thus TypeScript becomes the best option.

- TypeScript code can be compiled as per ES5 and ES6 standards thus having latest browser support.

### Typescript Basics

Below is the quick overview of TypeScript that will help you to understand the component sampler that we are going to create using Typescript and Enact.

- TypeScript files use the .ts file extension

- TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
  - TypeScript support `class` and includes `constructor` , `properties` and `Methods/functions`
  - Classes can be extended to create new classes with inheritance, using the keyword `extends`
- TypeScript supports [tag:Primitive] `(string, number, boolean, symbol, null, undefined, tuple)` as well as non-primitive `(array, object, void, enum)` types.

- Interfaces contain only the declaration of the members.

```js
interface TestProps {
    //Different ways to define type of a Prop
    //count prop "?" (optional) of type number
    count? : number,
    //Function that does not take arguments and does not return a value
    onChange(): any;
    //Function that accepts an argument:
    onChange(name: string): any,
    //Function that accepts an argument and returns a value
    onChange(name: string): number,
}
```
- Type assertion in typescript is way to tell the complier what is the type of the variable . It used when the type of the target value of the variable might not be known.

```js
interface MyTestProps {
    name : string,
    payment: number
}
const MyTestFunction = <TestProps> {
    ...
    ...
}
```
> Type assertions is similar to `type casting` in other languages. However, there is no runtime effect of type assertion in TypeScript. It is  merely a way to let the typeScript compiler know the type of a variable.

- An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.

- Fat arrow functions can be used to drop the `function` keyword and pass parameters with types

```
let sum = (x: number, y: number) => x + y;
```

- Using TypeScript we can use the concept of function overloading. You can have multiple functions with same name but different parameters types and return type. Make sure the number of parameters should be same.

```
function sum(a:string, b:string):string;

function sum(a:number, b:number): number;

```
> Just note that typescript does not support function overloading with different number of parameters and types with same name.

- TypeScript support concepts of Object oriented programming.

### Typescript Hints
- Don’t use the return type any for callbacks whose value will be ignored, instead do use the return type `void` for callbacks whose value will be ignored.
- There is no meaning to assign void to a variable, as only null or undefined is assignable to void.
- Do use optional parameters whenever possible
```js
interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}
```

**Next: [Adding new component](../adding-new-component/)**
