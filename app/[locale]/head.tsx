import { FC } from 'react';

const RootHead: FC = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* <!-- Primary Meta Tags --> */}
      <title>Magic project manager</title>
      <meta name="title" content="Magic project manager" />
      <meta
        name="description"
        content="Simple tool for process and project management"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Magic project manager" />
      <meta
        property="og:description"
        content="Simple tool for process and project management"
      />
      <meta property="og:image" content="/images/meta-image.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Magic project manager" />
      <meta
        property="twitter:description"
        content="Simple tool for process and project management"
      />
      <meta property="twitter:image" content="/images/meta-image.png" />
    </>
  );
};

export default RootHead;
