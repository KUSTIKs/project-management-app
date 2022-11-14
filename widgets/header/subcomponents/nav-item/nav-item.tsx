import { ComponentProps, FC, ReactNode } from 'react';
import Link from 'next/link';

import { Button } from '@project-management-app/components';

type Props = {
  href: string;
  children: ReactNode;
  variant?: ComponentProps<typeof Button>['variant'];
};

const NavItem: FC<Props> = ({ children, variant = 'text', href }) => {
  return (
    <Link href={href}>
      <Button variant={variant} size="s">
        {children}
      </Button>
    </Link>
  );
};

export { NavItem };
