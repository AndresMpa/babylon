# CORS

This is a common error; its most popular solution is using
`app.use(cors())` but that solution is a security hole, it
allow everyone to access you API and that not okay, to protect
you app from being used by everyone, cors allow you to use
some callbacks and something call "white list" which is a list
of different host, you are allowing to use the API, this is the
best way to make CORS works
