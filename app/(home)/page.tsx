import { FC } from 'react';

import { Button } from '@project-management-app/components';

const Home: FC = () => {
  return (
    <div>
      <h1>Hello, world</h1>
      <Button size='l' variant='contained'>
        Hello
      </Button>
      <Button size='m' variant='contained'>
        Hello
      </Button>
      <Button size='s' variant='contained'>
        Hello
      </Button>
      <Button size='l' variant='ghost'>
        Hello
      </Button>
      <Button size='m' variant='ghost'>
        Hello
      </Button>
      <Button size='s' variant='ghost'>
        Hello
      </Button>
      <Button size='l' variant='text'>
        Hello
      </Button>
      <Button size='m' variant='text'>
        Hello
      </Button>
      <Button size='s' variant='text'>
        Hello
      </Button>
    </div>
  );
};

export default Home;
