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

## Migrations

Migrations are like version controls on BD, those are large pieces
of code that allow ORM to make changes on BD tables, they are really
useful, sometimes Migrations can change critical information, that's
why Sequelize suggests not to use sync() method, this method run
Migrations when we start the service so it is okay for development mode,
but it's a bad idea on production this is quite dangerous

## Relactions

ORMs allows you to trigger relations between tables, in Sequelize this
can be done really easy, there are some methods to do it, those create
a link between code and RDMS, to trigger those relations while creating,
searching or updating tables

### One to One relations

To handle this kind of relations we use 2 methods, belongsTo() & hasOne();
belongsTo is used to make relations from the table invokes it to some
other table (Primary key owner), while hasOne handle foreign keys. Onces
the relation is on the RDMS, we can use "include", which is a parameter
to tell sequelize to remember to bring us data from those relations on
that table (include is an array passed on a json inside the queries)

### One to Many relations

CONSTRATINS, weak entities will recive the relation, it means that one
of them uses the method over the other (Entity (1) -> (N) Weak Entity);
in this case the method used for 1:N relations is hasMany(), but it
also need of belongsTo() to make the relation on the weak Entity, in
other words; Entity (1) uses hasMany() -> while (N) weak Entity uses
belongsTo()
