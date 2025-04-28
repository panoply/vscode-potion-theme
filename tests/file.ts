// @ts-nocheck

// --- Import Types ---
import type { SomeType } from './types';

// --- Export Types ---
export type { SomeType };

// --- 'as' Clauses in Import ---
import { exportedVar as aliasVar } from './file';

// --- Type-only Imports ---
import type { Config } from './config';


// --- Basic Types ---
let num: number = 42;
let str: string = "hello";
let bool: boolean = true;
let nul: null = null;
let undef: undefined = undefined;
let sym: symbol = Symbol('s');
let big: bigint = 100n;
let anyVar: any = "anything";
let unknownVar: unknown = 123;
let voidVar: void = undefined;
let neverVar: never = (() => { throw "error"; })();

// --- Literal Types ---
let literalNum: 5 = 5;
let literalStr: "foo" = "foo";
let literalBool: true = true;

// --- Arrays ---
let arr1: number[] = [1,2,3];
let arr2: Array<string> = ["a","b"];
let readonlyArr: readonly number[] = [1,2,3];

// --- Regex ---
let exp = /(?i)^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.(?:com|org|net)(?:\?[a-zA-Z0-9&=]*)?$|(\d{1,3}\.){3}\d{1,3}(?<!192\.168\.0\.1)|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|\b(?!false|true)\w+\b(?:\s*[-+*/]\s*\d+\.?\d*)|\[\^\\s\]\S{2,}(?=\s|$)/gms

// --- Tuples ---
let tuple1: [number, string] = [1, "a"];
let tupleOptional: [number, string?] = [1];
let tupleRest: [string, ...number[]] = ["a", 1,2,3];

// --- Object Types ---
let obj1: { a: number; b: string } = {
  a: 1,
  b: "x"
};

let nestedObj: {
  inner: {
    prop: string;
    foo: boolean;
    bar: number;
    baz: object;
  }
} = {
  inner: {
    prop: "deep",
    foo: true,
    bar: 1000,
    baz: {}
  }
};


// --- Functions ---
function add(x: number, y: number): number { return x + y; }
const sub = (x: number, y: number): number => x - y;
const fnExpr = function(x: number): number { return x * 2; };

// --- Function Overloads ---
function fnOverload(x: number): number;
function fnOverload(x: string): string;
function fnOverload(x: any): any { return x; }

// --- 'this' Types ---
function withThis(this: Date, x: number): void {

  console.log(this.getFullYear(), x);

}

// --- Classes ---
class Base {
  public pub = 1;
  protected prot = 2;
  private priv = 3;
  readonly ro = 4;
  static staticProp = "static";
  static staticMethod() {}

  constructor(public a: number) {}
  method(x: string): string { return x; }
}

// --- Inheritance ---
class Child extends Base {
  override method(x: string): string {
    return super.method(x) + " child";
  }
}

// --- Abstract Classes ---
abstract class AbstractBase {
  abstract doSomething(): void;
}

// --- Interfaces ---
interface IPoint { x: number; y: number; }
interface IExtended extends IPoint { z: number; }

// --- Type Aliases ---
type NumOrStr = number | string;
type Point3D = { x: number; y: number; z: number };

// --- Index Signatures ---
interface Dictionary {
  [key: string]: number;
}
const dict: Dictionary = { key1: 1 };

// --- Enums ---
enum Direction { Up, Down, Left, Right }
const dir: Direction = Direction.Left;
const valOfEnum = Direction[1];

// --- Const Enums ---
const enum ConstDirection {
  Up,
  Down,
  Name = 'example'
}
const constDir = ConstDirection.Up;

// --- Union / Intersection Types ---
type UnionType = number | string;
type IntersectionType = { a: string } & { b: number };

// --- Type Assertions ---
let someUnknown: unknown = "hello";
let strLength = (someUnknown as string).length;

// --- Non-null Assertion ---
let maybeStr: string | undefined;
const sureStr: string = maybeStr!;

// --- Type Guards ---
function isString(x: any): x is string {
  return typeof x === "string";
}

// --- Discriminated Unions ---
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }
}

// --- Promises ---
const promise = new Promise((resolve, reject) => resolve("done"));

promise.then(console.log).catch(console.error);


// --- Mapped Types ---
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// --- Conditional Types ---
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
type Result = MessageOf<{ message: string }>;

// --- Template Literal Types ---
type World = "world";
type Greeting = `hello ${World}`;

// --- keyof and typeof ---
type Key = keyof IPoint;
const obj = { a: 1, b: 2 };
type ObjType = typeof obj;

// --- Index Access Types ---
type PointX = IPoint["x"];

// --- Infer ---
type ReturnTypeExample<T> = T extends (...args: any[]) => infer R ? R : any;

// --- Recursive Types ---
type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };

// --- Utility Types ---
type PartialPoint = Partial<IPoint>;
type RequiredPoint = Required<PartialPoint>;
type ReadonlyPoint = Readonly<IPoint>;
type PickX = Pick<IPoint, "x">;
type OmitY = Omit<IPoint, "y">;
type NonNullableType = NonNullable<string | undefined>;

// --- Awaited ---
type AwaitedType = Awaited<Promise<string>>;

// --- Modules ---
export const exportedVar = 1;
export default class ExportedClass {}
import { exportedVar as importedVar } from './file';
import ExportedDefault from './file';

// --- Namespaces ---
namespace Shapes {
  export class Circle { radius = 1; }
}
let circle = new Shapes.Circle();

// --- Decorators ---
function classDecorator<T extends { new (...args: any[]): {} }>(ctor: T) {
  return class extends ctor {};
}

@classDecorator
class Decorated {}

// --- Ambient Declarations ---
declare const globalString: string;
declare function globalFunc(x: number): void;
declare module "external-module" {
  export function externalFn(): void;
}

// --- Declaration Merging ---
interface Merged { a: number }
interface Merged { b: string }

// --- Module Augmentation ---
declare module "./file" {
  export interface ExportedClass {
    newMethod(): void;
  }
}

// --- Tuple Labels ---
type NamedTuple = [x: number, y: number];

// --- Optional Properties ---
interface PartialPerson {
  name: string;
  age?: number;
}

// --- Optional Tuple Elements ---
type OptionalTuple = [number, string?];

// --- Variadic Tuple Types ---
type VariadicTuple<T extends any[]> = [...T, number];

// --- Readonly Tuples ---
type ReadonlyTuple = readonly [number, string];

// --- readonly modifier ---
interface ReadonlyPoint {
  readonly x: number;
  readonly y: number;
}

// --- Satisfies Operator ---
const user = { name: "Alice", age: 30 } satisfies { name: string; age: number; };

// --- Using 'in' Operator for Type Guards ---
function safeAccess(obj: any) {
  if ("prop" in obj) {
    console.log(obj.prop);
  }
}

// --- assert Function ---
function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new Error("Not a string!");
  }
}

// --- Module Resolution Paths (not directly syntax but common in tsconfig) ---
// import { something } from "@/lib/utils";  (where @ is mapped to src/)

// --- 'unknown' with Narrowing ---
function handle(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

// --- Exhaustiveness Checking ---
function exhaustiveCheck(x: never): never {
  throw new Error("Unhandled case: " + x);
}

// --- Abstract Constructor Signatures ---
interface AbstractCtor {
  new (...args: any[]): Base;
}

// --- Interface Constructor Signatures ---
interface Ctor<T> {
  new (...args: any[]): T;
}

// --- Indexed Access for Union Types ---
type ValueOf<T> = T[keyof T];

// --- typeof fn type inference ---
const fnSample = (x: number) => x * 2;
type FnReturn = ReturnType<typeof fnSample>;

// --- Namespaces Inside Modules ---
export namespace MathUtils {
  export function square(x: number) {
    return x * x;
  }
}

//  --- JSDoc Comments ---

/**
 * A sample function demonstrating various JSDoc tags and syntax for testing syntax highlighting.
 * This function processes user data and returns a formatted result.
 *
 * @summary Processes user input with advanced formatting.
 * @description
 * This function takes a user object, validates it, and applies transformations based on the options provided.
 * It supports multiple input formats and handles edge cases like `null` or `undefined` inputs.
 *
 * @template {T} T - The type of the user data, typically an object or string.
 * @template U - The type of the transformation result.
 *
 * @param {Object.<string, any>} user - The user data object with key-value pairs.
 * @param {string} [user.name="Anonymous"] - The user's name, defaults to "Anonymous".
 * @param {number} user.age - The user's age, must be a positive integer.
 * @param {{ format: 'json' | 'xml', strict: boolean }} [options] - Optional formatting options.
 * @param {(input: string) => string} callback - A callback function to process the name.
 *
 * @returns {Promise<T & { id: string } | U>} A promise resolving to the transformed user data with an added ID.
 * @throws {TypeError} If the user object is not a valid object.
 * @throws {RangeError} If the age is negative.
 *
 * @example
 * const x = 'foo'
 *
 * @see {@link https://example.com/docs|API Documentation}
 *
 * @author John Doe <john.doe@example.com>
 * @version 1.2.3
 * @since 1.0.0
 * @deprecated Use `processUserV2` instead.
 *
 * @license MIT
 * @copyright 2025 Example Corp.
 *
 * @public
 * @async
 * @function
 * @memberof module:user
 * @alias processUserAlias
 *
 * @typedef {Object} UserOptions
 * @property {'json' | 'xml'} format - The output format.
 * @property {boolean} strict - Whether to enforce strict validation.
 *
 * @fires UserProcessed
 * @event UserProcessed
 * @property {string} eventName - The name of the event.
 * @property {T} data - The processed user data.
 *
 * @todo Add support for additional formats.
 * @ignore
 */

/**
 * A sample class with JSDoc to test class-related tags.
 * @class
 * @extends BaseClass
 * @implements UserInterface
 * @mixes LoggerMixin
 */
