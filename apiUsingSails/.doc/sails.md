## What's sails?

Sails is the most popular MVC framework for Node.js, designed to emulate
the familiar MVC pattern of frameworks like Ruby on Rails, but with
support for the requirements of modern apps: data-driven APIs with a
scalable, service-oriented architecture

## Why to use it?

It's simple, extensible and usable

## How to start a new project

Since Sails is an MVC framework, it uses this patter by default

```
npx sails new <NAME>
```

But you can also use it as a simple API using '--no-frontend'

```
npx sails new <NAME> --no-frontend
```

This command just create a new project structure

## Basic commands

To start a project on development mode

Note:
  This command allow you to use 3 modes.
    - alter (Development): Try to recover info from DB
    - drop (Testing): Drops DB info
    - safe (Deploy): Try not to be annoying



```
npx sails lift
```

To generate an API from a blueprint

Note: This command generate 2 files also some other internal references

```
npx sails generate api <NAME>
```

