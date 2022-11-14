const getCssVarFromAppColorName = (colorName: string) => {
  switch (colorName) {
    case 'text/100':
      return 'var(--color-text--100)';
    case 'text/200':
      return 'var(--color-text--200)';
    case 'text/300':
      return 'var(--color-text--300)';
    case 'text/400':
      return 'var(--color-text--400)';
    case 'text/600':
      return 'var(--color-text--600)';
    case 'text/700':
      return 'var(--color-text--700)';
    case 'text/800':
      return 'var(--color-text--800)';
    case 'grey/100':
      return 'var(--color-grey--100)';
    case 'grey/200':
      return 'var(--color-grey--200)';
    case 'grey/300':
      return 'var(--color-grey--300)';
    case 'background/100':
      return 'var(--color-background--100)';
    case 'blue/200':
      return 'var(--color-blue--200)';
    case 'blue/400':
      return 'var(--color-blue--400)';
    case 'blue/500':
      return 'var(--color-blue--500)';
    case 'blue/500/15':
      return 'var(--color-blue--500-15)';
    case 'blue/800':
      return 'var(--color-blue--800)';
    case 'red/200':
      return 'var(--color-red--200)';
    case 'red/500':
      return 'var(--color-red--500)';
    case 'red/500/15':
      return 'var(--color-red--500-15)';
    case 'red/700':
      return 'var(--color-red--700)';
    case 'red/800':
      return 'var(--color-red--800)';
  }
};

export { getCssVarFromAppColorName };
