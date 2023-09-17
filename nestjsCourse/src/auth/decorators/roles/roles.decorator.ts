import { SetMetadata } from '@nestjs/common';

import { Role } from '../../model/roles.model';

export const ROL_KEY = 'roles';

export const Roles = (...roles: Role[]) => SetMetadata(ROL_KEY, roles);
