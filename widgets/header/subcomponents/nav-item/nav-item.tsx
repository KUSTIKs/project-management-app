import { FC, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import { Button } from '@project-management-app/components';

type Props = LinkProps & {
  children: ReactNode;
};

const NavItem: FC<Props> = ({ children, ...linkProps }) => {
  return (
    <Link {...linkProps}>
      <Button variant="text" size="s">
        {children}
      </Button>
    </Link>
  );
};

export { NavItem };
