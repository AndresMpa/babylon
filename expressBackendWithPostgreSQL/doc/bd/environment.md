# .env

On frontend we don't use it; BUT if your making backend
we need dotenv, dotenv allow node to load .env file,
Vue, React, Angular, etc; handle those process.env var
by themselves express doesn't, so we need dotenv

## encodeURIComponent

This is an utility from JS, if you are using high level
or sensitive information it's necessary to encode it
(Like users and passwords)

## URI

This is a connection method used by many BD and services
such as AWS

### Good practice

If you use a .env, use a .env.example; this is a good
practice, nobody remembers its env var
