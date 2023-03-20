# Relations

As a NoSQL, mongo handle with relations in a different way than usual SQL DB,
to have relations here we mainly create references, so those "relations" are
not as strong as a SQL usual one

> Note: Documents on Mongo generally weight 16Mb

## Raw 1:1

To create 1:1 relations, mongo just need a functions we place inside @Prop()
which is "raw", this function will create a sub entity or sub field inside that
entity's field, for example

<ins>someEntity.entity.ts</ins>

```typescript
  @Prop(
    raw({
      someName: {
        type: String,
      },

      someData: {
        type: String,
      },
    }),
  )
  someField: Record<string, any>;
```

In this example some someField contains 2 different data types, "string" and "any"

We should also update its DTO, simply using `ValidateNested` from `@nestjs/class-validator`
this validator validates a field from `CreateOtherDto`

<ins>someEntity.dto.ts</ins>

```typescript
import CreateOtherDto from "./Other.dto.ts"
  ...
  @ValidateNested()
  @IsNotEmpty()
  readonly someField: CreateOtherDto;
  ...
```

## Ref 1:1

There are at least 2 ways to create 1:1 relations in mongo, one of those are "direct"
relations or "raw" (Previous topic), those are injected in the same entity as an
array or anything similar to that. Those relations are so useful to handle with small
chuck of data, for example roles in a sales platform. But this kind of relations
can handle with larger chuck of data, ideal documents on Mongo weight 16 MB or less.
To create ref 1:1 relations, mongo just need a data type we place inside @Prop()
which is "Types.ObjectId", this type will indicates mongo that this field is a reference
to another entity, then we use the "ref" field to add the reference

<ins>someEntity.entity.ts</ins>

```typescript
import { Document, Types } from 'mongoose';
import { RandomEntity } from "./RandomEntity.entity"
  ...
  @Prop({
    type: Types.ObjectId,
    ref: RandomEntity.name
  })
  someField: RandomEntity;
  ...
```

## Raw 1:N

This kind of relations are pretty similar to raw 1:1 relations, its difference lies in
the @Prop object which uses the "type" field to define the entity instead of using it
to define a field. The key of this kind of references lies in "type", if you use a []
then it is a 1:N relation

```typescript
  @Prop({
    type: [{ name: { type: String }, someProp: { type: String } }],
  })
  someField: Types.Array<Record<String, Any>>; 
```

## Ref 1:N

This is similar to previous relations, in order to create a referential relationship
Moongose uses "ref" parameter then, it uses a entity.name field to make the reference

```typescript
  @Prop({ type: [{ type: Types.ObjectId, ref: SomeEntity.name }] })
  someEntities: Types.Array<SomeEntity>;
```
