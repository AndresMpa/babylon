# Singleton

## Usage

Use the same component in different sections of your project, it means;
we are accessing the same information all the time, we use it to assure
we are changing a specific value contained inside the Object from
Singleton

## How to

- Constructor should be private, other objects shouldn't be able to use `new`
- Create a static method to get the previous created instance; that instance should be storage in cache memory

| Pros                                                                   | Cons                                                                                                                                                  |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Low memory cost, it only needs 1 instance                              | Breaks SOLID principle, Singleton fucks up the "S" (Singleton doesn't follow Single Responsibility), it handles creation also it handles modification |
| Easy to use, we create a instance of it only the first time we call it | It's implementation difficulty increments significantly when we are working with multiple threads                                                     |
| Global access, we can use the same reference to access it globally     | Testing this is something... Weird                                                                                                                    |

> Some devs consider this as an antipattern

## When to

Use it when you need:

- Have only one instance, for example a BD connection for a low level of entries
- A strict control of global variables, for example a config statement (Is a tacit example) for your project

## Implementation

#### Using JavaScript

```js
/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class Singleton {
  static instance = undefined;

  /**
   * Constructor method, not private for syntax reasons, to be called
   * for static method
   * @param version value that represents the version of the instance
   */

  // STEP 1
  constructor(version) {
    this._version = version;
  }

  /**
   * Static method that returns unique created instance or create it
   * @param version used only to help us to differentiate the instances
   * @returns {Singleton} unique Singleton instance
   */

  // STEP 2
  static getInstance(version) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }

    return Singleton.instance;
  }

  /**
   * Singleton version attribute getter
   * @returns the version of the instance
   */
  get version() {
    return this._version;
  }
}

/**
 * Main function
 */
function appSingleton() {
  console.log("--- [JS] Calling appSingleton ---\n");
  const singleton1 = Singleton.getInstance("version-1");
  const singleton2 = Singleton.getInstance("version-2");
  const singleton3 = Singleton.getInstance("version-3");

  console.log(
    `singleton1 and singleton2 are equal? ${
      singleton1 === singleton2 ? "yes" : "no"
    }`,
  );
  console.log(
    `singleton2 and singleton3 are equal? ${
      singleton2 === singleton3 ? "yes" : "no"
    }`,
  );

  // Let's verify if the versions are equal too
  console.log(`singleton1 version: ${singleton1.version}`);
  console.log(`singleton2 version: ${singleton2.version}`);
  console.log(`singleton3 version: ${singleton3.version}`);
}

appSingleton();
```

#### Using TypeScript

```ts
/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class Singleton {
  private static instance: Singleton;
  private _version: string;

  /**
   * Constructor method to be called by static method
   * @param version value that represents the version of the instance
   */

  // STEP 1
  private constructor(version: string) {
    this._version = version;
  }

  /**
   * Static method that returns unique created instance or create it
   * @param version used only to help us to differentiate the instances
   * @returns unique Singleton instance
   */

  // STEP 2
  static getInstance(version: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }

    return Singleton.instance;
  }

  /**
   * Singleton version attribute getter
   * @returns the version of the instance
   */
  get version(): string {
    return this._version;
  }
}

/**
 * Main function
 */
function appSingleton() {
  console.log("--- [TS] Calling appSingleton ---\n");
  const singleton1 = Singleton.getInstance("version-1");
  const singleton2 = Singleton.getInstance("version-2");
  const singleton3 = Singleton.getInstance("version-3");

  console.log(
    `singleton1 and singleton2 are equal? ${
      singleton1 === singleton2 ? "yes" : "no"
    }`,
  );
  console.log(
    `singleton2 and singleton3 are equal? ${
      singleton2 === singleton3 ? "yes" : "no"
    }`,
  );

  // Let's verify if the versions are equal too
  console.log(`singleton1 version: ${singleton1.version}`);
  console.log(`singleton2 version: ${singleton2.version}`);
  console.log(`singleton3 version: ${singleton3.version}`);
}

appSingleton();

// This is not relevant for the course, don't worry about this
export {};
```

> Examples taken from [serie-design-patterns](https://github.com/platzi/serie-design-patterns) explanation achieved thanks to [refactoring.guru](https://refactoring.guru/es/design-patterns/singleton)
