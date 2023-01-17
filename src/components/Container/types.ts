import { Property } from 'csstype';
import { BoxProps } from '../Box';

export type ContainerTheme = {
  sizes: {
    [key: string]: string | number;
  };
  paddingX:
    | string
    | number
    | Property.Padding
    | {
        [key: string]: string | number | Property.Padding;
      };
};

export type ContainerProps = BoxProps & {
  size?: string;
};
