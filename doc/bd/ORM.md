# ORM

Object Relational Model, this is like an object; it's a layer of
abstraction from SQL, it makes easier to use BDs, but you know
you still need SQL. ORM are agnostic from RDMS or BD managers so
it make connections on background for use, it handle basic queries
and some other interesting things, so it's really useful

## Sequelize vs TypeORM

Those both are the greatest ORM avalible on JS and TS, TypeORM
is better for TS while Sequelize is more used on JS; still both
of the make almost the same

## Sequelize

Using Sequelize you can parametrice almost everything so it helps
you switch quicky from on RDMS to other if it is needed; also
make easier connection process, in Sequelize connection are a
driven by a singleton like pool connections on Postgres
