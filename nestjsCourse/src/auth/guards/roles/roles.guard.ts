import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { ROL_KEY } from '../../../auth/decorators/roles/roles.decorator';
import { PayloadToken } from '../../model/token.model';
import { Role } from '../..//model/roles.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Role[]>(ROL_KEY, context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const user = request.user as PayloadToken;

    const isAuth = roles.includes(user.role);
    if (!isAuth) {
      throw new UnauthorizedException('Your are not allow to do that');
    }
    return isAuth;
  }
}
