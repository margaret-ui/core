import { BoxProps } from '../Box';

export type ContainerTheme = {
  sizes: {
    [key: string]: string | number;
  };
};

export type ContainerProps = BoxProps & {
  size?: string;
};
