# Relations

As a NoSQL, mongo handle with relations in a different way than usual SQL DB,
to have relations here we mainly create references, so those "relations" are
not as strong as a SQL usual one

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
