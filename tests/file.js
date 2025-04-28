// --- import/export (ES Modules) ---
export const exportedValue = 123;
export default function exportedFunc() {}
import { exportedValue } from './file.js';
import exportedFunc from './file.js';

// --- Primitives ---
let num = 123;
let str = "hello";
let bool = true;
let nul = null;
let undef = undefined;
let sym = Symbol('unique');
let big = 123n;

// --- Objects ---
const arr = [1, 2, 3];
const nested = { arr: [{ id: 1 }, { id: 2 }] };
const set = new Set([ 1,2,3 ]);
const map = new Map([["a",1], ["b",2]]);
const weakSet = new WeakSet();
const weakMap = new WeakMap();
const obj = {
  a: 1,
  b: {
    c: 2
  },
  d: [3,4],
  inner: {
    prop: "deep",
    foo: true,
    bar: 1000,
    baz: {}
  }
};

// --- Regex ---
let exp = /(?i)^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.(?:com|org|net)(?:\?[a-zA-Z0-9&=]*)?$|(\d{1,3}\.){3}\d{1,3}(?<!192\.168\.0\.1)|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|\b(?!false|true)\w+\b(?:\s*[-+*/]\s*\d+\.?\d*)|\[\^\\s\]\S{2,}(?=\s|$)/gms

// --- Arrays ---
arr.forEach(x => console.log(x));
arr.map(x => x * 2);
arr.filter(x => x > 1);
arr.reduce((a, b) => a + b, 0);
arr.find(x => x > 1);
arr.findIndex(x => x > 1);
arr.flat();
arr.flatMap(x => [x*2]);
arr.at(-1);

// --- Basic Functions ---
function add(x, y) { return x + y; }
const multiply = function(x, y) { return x * y; };
const arrow = (x, y) => x - y;
const singleParam = x => x + 1;

// --- Default Parameters ---
function greet(name = "world") {
  console.log(`Hello, ${name}`);
}

// --- Rest & Spread ---
function sum(...args) {
  return args.reduce((a,b) => a+b);
}
const arrCopy = [...arr];
const mergedObj = { ...obj, e: 5 };

// --- Destructuring ---
const [first, second] = arr;
const { a, b: renamedB } = obj;

// --- Template Literals & Tagged Templates ---
const greeting = `Hi ${str}`;
function tag(strings, ...values) {
  return strings[0] + values.join('-');
}
const tagged = tag`Welcome ${"user"}!`;

// --- Loops ---
for (let i = 0; i < 3; i++) {}
for (const el of arr) {}
for (const key in obj) {}
while (false) {}
do {} while (false);

// --- Conditionals ---
if (bool) {
  console.log("true");
} else {
  console.log("false");
}
switch (str) {
  case "hello": break;
  default: break;
}

const result = bool ? "yes" : "no";

// --- Try/Catch/Finally ---
try {
  throw new Error("fail");
} catch (e) {
  console.error(e);
} finally {
  console.log("cleanup");
}

// --- Promises ---
const promise = new Promise((resolve, reject) => resolve("done"));
promise.then(console.log).catch(console.error);

// --- async/await ---
async function asyncFn() {
  const res = await promise;
  console.log(res);
}
asyncFn();

// --- Generators ---
function* gen() {
  yield 1;
  yield 2;
}
const g = gen();
g.next();

// --- Classes ---
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} speaks.`); }
}

// --- Inheritance ---
class Dog extends Animal {
  speak() { console.log(`${this.name} barks.`); }
}

// --- Static ---
class MathUtil {
  static add(x, y) { return x + y; }
}

// --- Private Fields (#) ---
class Secret {
  #privateField = 42;
  getSecret() { return this.#privateField; }
}

// --- Symbols in Objects ---
const uniqueKey = Symbol('key');
const symObj = { [uniqueKey]: 'secret' };

// --- Prototypes ---
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() { return `Hi ${this.name}`; };

// --- Set/Map Methods ---
set.add(4);
set.has(2);
map.set("c", 3);
map.get("a");

// --- WeakSet/WeakMap (only objects) ---
weakSet.add({});
weakMap.set({}, "value");

// --- typeof / instanceof ---
typeof "string"; // "string"
"abc" instanceof String; // false

// --- delete ---
delete obj.a;

// --- eval (discouraged) ---
eval("console.log('dangerous')");

// --- arguments Object ---
function oldFn() {
  console.log(arguments[0]);
}

// --- Optional Chaining and Nullish Coalescing ---
const safeAccess = obj?.b?.c ?? "default";


// --- import.meta ---
console.log(import.meta.url);

// --- Dynamic Imports ---
async function load() {
  const module = await import('./file.js');
  console.log(module);
}

// --- Top-level Await (in ESM) ---
// const mod = await import('./file.js');

// --- Proxy ---
const proxy = new Proxy(obj, {
  get(target, prop) {
    return prop in target ? target[prop] : 0;
  }
});

// --- Reflect ---
Reflect.set(obj, "newProp", 100);

// --- Object methods ---
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Object.assign({}, obj);
Object.hasOwn(obj, 'b');

// --- JSON ---
const jsonStr = JSON.stringify(obj);
const parsed = JSON.parse(jsonStr);

// --- Intl API ---
const formatter = new Intl.NumberFormat('en-US').format(1000);

// --- Performance API ---
performance.now();

// --- History API ---
history.pushState({}, "", "/new-page");

// --- URL API ---
const url = new URL("https://example.com");
url.searchParams.append("q", "test");

// --- DOM Basics ---
document.querySelector('div');
document.createElement('p');

// --- Web Storage ---
localStorage.setItem('key', 'value');
sessionStorage.getItem('key');

// --- Fetch API ---
fetch('https://api.example.com')
  .then(res => res.json())
  .then(console.log);

// --- AbortController ---
const controller = new AbortController();
fetch('https://api.example.com', { signal: controller.signal });
controller.abort();

// --- BroadcastChannel ---
const channel = new BroadcastChannel('tab');
channel.postMessage('ping');

// --- EventTarget (Custom Events) ---
const eventTarget = new EventTarget();
eventTarget.addEventListener('test', e => console.log(e));
eventTarget.dispatchEvent(new Event('test'));

// --- Web Workers (basic) ---
// const worker = new Worker('worker.js');

// --- MessageChannel ---
const { port1, port2 } = new MessageChannel();
port1.onmessage = e => console.log(e.data);
port2.postMessage('ping');

// --- Structured Clone ---
const clone = structuredClone(obj);

// --- Error subclasses ---
class CustomError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CustomError";
  }
}

// --- Logical Assignment Operators ---
let x = null;
x ??= 10;
let y = "";
y ||= "default";
let z = 0;
z &&= 100;

// --- Numeric Separators ---
const largeNum = 1_000_000;

// --- BigInt Math ---
const sumBig = 1n + 2n;

// --- Await inside Loops ---
async function asyncLoop() {
  for (const i of [1,2,3]) {
    await Promise.resolve(i);
  }
}

// --- Temporal Proposal (future) ---
// import { Temporal } from '@js-temporal/polyfill';
// const now = Temporal.Now.instant();

// --- WeakRefs (advanced memory control) ---
const wr = new WeakRef({});

// --- FinalizationRegistry ---
const registry = new FinalizationRegistry((heldValue) => {
  console.log(heldValue);
});
registry.register({}, "someValue");

// --- with (discouraged) ---
/*
with (obj) {
  console.log(c);
}
*/
