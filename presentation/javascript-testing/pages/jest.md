---
layout: image
image: state-of-js-testing-library.png
---

---
layout: two-cols
---
<style scoped>
    img {
        width: 80%;
        height: auto;
    }
</style>

# 

<img src="jest-logo.svg">

::right::

# **Jest**

- Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- Works with projects using **Babel**, **Typescript**, **Node**, **React**, **Angular**, **Vue**, **Svelte** and more!

<br>

```js
function sum(a, b) {
  return a + b;
}

test('dos més dos són quatre', () => {
  expect(sum(2 + 2)).toBe(4);
});
```

---

# Jest

#### Install Jest

```
npm i -D jest @types/jest ts-jest
```

<br>

#### Create jest.conf.js file

```
touch jest.config.js
```

<br>

```js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
```

<br>

### Init with Jest cli

```
npx jest --init
```

---
layout: two-cols
---

# Run tests

```
npm run test
```

```json {5,15,16,17}
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest"
  },
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "socket.io": "^4.5.4"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@types/jest": "^29.2.4",
    "jest": "^29.3.1",
    "ts-jest": "^29.0.3",
    "typescript": "^4.9.3"
  }
}
```

::right::

<br>
<img src="run-test-example.png">
<img src="run-test-fail-example.png">
