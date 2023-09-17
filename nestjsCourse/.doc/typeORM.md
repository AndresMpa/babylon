## Data bases connection

Nest comes with some native support for sequelize and typeORM, in order to follow the TS ecosystem it
is recommended to use typeORM, both approach comes with differences; when we are talking about a database
their are not always needed, since we can create queries using simple SQL and a simple database connection
we could deal with a team to use a simple connection, then when projects gets bigger enough, we should/could
use an ORM, in Nest using each approach we could have something like this:

### Direct connection

If we use a specific file to handle with database connections (Do it), we could use an global module to share
the database connection using a useFactory, in order to have only one instance of it (Which is more maintainable),
using this method we get a simple global connection

```typescript
@Global()
@Module({
  providers: [
    {
      provide: 'POSTGRES',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, database, password, port } = configService.database;
        const client = new Client({
          user,
          host,
          database,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['POSTGRES'],
})
```

### ORM way (TypeORM)

When our project get bigger or simply if we want to use them, we have the ORMs, this is an example using
typeORM, which is the recommended ORM to use in Nest using TS

```typescript
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, database, password, port } = configService.database;
        return {
          type: "postgres",
          host,
          port,
          database,
          password,
          username: user,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
```

Then we have to change a little the way our entities are defined, since TypeORM handle with models, our
entities match what a model is, a quick example can be the products entity

```typescript
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  identifier: number;

  @Column({
    unique: true,
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'int',
  })
  price: number;

  @Column({
    type: 'int',
  })
  stock: number;

  @Column({
    type: 'varchar',
  })
  image: string;
}
```

In that example we converted the product entity into a Entity as what a entity is for SQL model,
once the model is created it is necessary to register that Entity in the module

```typescript
import { TypeOrmModule } from '@nestjs/typeorm';
...
import { Product } from './entities/product.entity.ts';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  ...
})
```

That is pretty simple to do, as seen before

### Sync mode

An important feature to talk about is the `synchronize`, widely known as the "sync mode", is feature
that many other ORMs use such as Djgano, Lavaravel, sequelize, etc. This particular mode enable our
ORM to make some changes in our data base, to make its structure match with what we are doing, this
feature makes our development experience something less painful, but it can also cause several problems
in production stages, that why it's highly recommended not to use it on production

## Relations (Using TypeORM)

### One to one relations

To make relations (Using TypeORM), it is simple, it just needs two decorators, @JoinColumn and @OneToOne
OneToOne sets relations 1:1 type, while JoinColumn specifies a reference in the database, so OneToOne decorator
can be used in each field of the relation (It's a marker), but JoinColumn can be used only on a entity (It's the 
foreign key), also TypeORM allow us to specify extra data such as:
- Target relation type
- A specific field on the other side entity which is hosting the relation
- Some options like "nullable"

### One to many relations

Following SQL basics, weak entities host the relation, so in 1:M "the 1" is going to host it relation while
the other entity just have a reference, to do this, TypeORM uses 2 decorators @OneToMany() and @ManyToOne()
same as "1:M" where @ManyToOne represents the weak entity (Field whit this decorator uses the foreign key)

### Many to many

In order to create M:M relation using TypeORM, we use 2 decorators: @ManyToMany() and @JointTable, TypeORM
will create the pivot table by itself so it doesn't matter which entity host the @JoinTable decorator which
establish the reference between entities

### Custom M:M

Sometimes TypeORM M:M relations are not enough, those relations can't handle with custom fields, which is
something important under SQL model, since TypeORM is an Object Relational Mapping (ORM), we use Object
to model the DB, this characteristic helps developers to model the DB easier and faster, perhaps it also
"hide" the process.

To create a custom M:M relation we use a entity, that entity host 2 @ManyToOne(), then a @OneToMany() (Or
more) decorator

## Serializer

A serializer is kind of a middleware in which you "manage" fields on entities to "hide", "create", etc; some
fields, those fields are created by node (Which is not so optimal), due to this characteristic, it's better to
use SQL for big calculus, while serializers are a good option to handle with small queries
