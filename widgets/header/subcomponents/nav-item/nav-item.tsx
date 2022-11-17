import { ComponentProps, FC, ReactNode } from 'react';

import { AppLink, Button } from '@project-management-app/components';

type Props = {
  href: string;
  children: ReactNode;
  variant?: ComponentProps<typeof Button>['variant'];
};

const NavItem: FC<Props> = ({ children, variant = 'text', href }) => {
  return (
    <AppLink href={href}>
      <Button variant={variant} size="s">
        {children}
      </Button>
    </AppLink>
  );
};

export { NavItem };
