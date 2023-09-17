## Guardians

Guardians are similar to what a pipeline do, they validate information
as a guardian of a giant door which is the API information, similar to
paladins, they protect the information against any possible unauthorized
thing from getting data. To create a guardian we use:

```bash
$ npx nest g gu <PATH>
```

To use a guardian we use the `@UseGuards()` then we just need to import
the guard we are using, as an example:

> some.controller.ts

```typescript
import {
  ...
  UseGuards
} from '@nestjs/common';
import { SomeGuard } from './auth/guards/some-guard/some-guard.guard';

@Controller()
export class SomeController {
  constructor(private readonly appService: AppService) {}
  ...
  @UseGuards(SomeGuard)
  @Get()
  getExample() {
    return this.appService.getData();
  }
```

Main difference with pipeline is that pipelines can protect an entire
controller, also they can handle with an specific endpoint just like in
previous example

> some.controller.ts

```typescript
import {
  ...
  UseGuards
} from '@nestjs/common';
import { SomeGuard } from './auth/guards/some-guard/some-guard.guard';

@UseGuards(SomeGuard)
@Controller()
export class SomeController {
  constructor(private readonly appService: AppService) {}
  ...
  @Get()
  getExample() {
    return this.appService.getData();
  }
```

The opposite to protect all the endpoint under a guardian is to release
some of them, for example making some of them "public", to make this we
can use the `@SetMetadata()`, just like this:

> some.controller.ts

```typescript
import {
  ...
  UseGuards
  SetMetadata
} from '@nestjs/common';
import { SomeGuard } from './auth/guards/some-guard/some-guard.guard';

@UseGuards(SomeGuard)
@Controller()
export class SomeController {
  constructor(private readonly appService: AppService) {}
  ...
  @SetMetadata("isPublic", true)
  @Get()
  getExample() {
    return this.appService.getData();
  }
```

This decorator "release" the getExample endpoint, but as you can see
this solution is a hard-coded approach, to get a better way to do it
you could us a decorator. An useful feature on TS are decorators, so
using then next to guards can make this process easier and more 
maintainable, let's see an example:

> public.decorator.ts

```typescript
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

export const Public = () => {
  SetMetadata(IS_PUBLIC_KEY, true);
};
```

Then we can update the decarator

> some.controller.ts

```typescript
import {
  ...
  UseGuards
  SetMetadata
} from '@nestjs/common';
import { SomeGuard } from './auth/guards/some-guard/some-guard.guard';

@UseGuards(SomeGuard)
@Controller()
export class SomeController {
  constructor(private readonly appService: AppService) {}
  ...
  @Public()
  @Get()
  getExample() {
    return this.appService.getData();
  }
```

If you see that approach is more maintainable, then if you see the
final decorator, we achieve this:

```typescript
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

import { IS_PUBLIC_KEY } from 'src/auth/decorators/public.decorator';

@Injectable()
export class PublicGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Auth');
    if (authHeader !== 'someHeader') {
      throw new UnauthorizedException('You are not allow to do that');
    }
    return true;
  }
}
```

If you see it, again there's a hard-coded approach on this solution, we
could use a simple env var
