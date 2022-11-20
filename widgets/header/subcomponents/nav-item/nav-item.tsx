import { ComponentProps, FC, ReactNode } from 'react';

import { Button } from '@project-management-app/components';

type Props = {
  href: string;
  children: ReactNode;
  variant?: ComponentProps<typeof Button>['variant'];
};

const NavItem: FC<Props> = ({ children, variant = 'text', href }) => {
  return (
    <Button variant={variant} size="s" href={href}>
      {children}
    </Button>
  );
};

export { NavItem };
