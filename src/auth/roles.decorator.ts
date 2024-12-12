import { SetMetadata } from '@nestjs/common';

/**
 * Custom decorator for setting roles metadata
 * @param roles Array of roles that are allowed for a route
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
