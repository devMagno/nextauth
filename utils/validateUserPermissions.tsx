export type User = {
  permissions: string[];
  roles: string[];
};

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams) {
  if (permissions?.length) {
    const hasAllPermissions = permissions.every((permission) =>
      user?.permissions.includes(permission)
    );

    if (!hasAllPermissions) return false;
  }

  if (roles?.length) {
    const hasAtLeastOneRole = roles.some((role) => user?.roles.includes(role));

    if (!hasAtLeastOneRole) return false;
  }

  return true;
}
