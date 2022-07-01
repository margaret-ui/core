import React, { FC, isValidElement } from 'react';
import styled, { css } from 'styled-components';
import Avatar from './Avatar';
import { AvatarGroupProps, AvatarProps } from './types';
import { setProperty } from '../../utils';
import { ResponsiveSpacing } from '../../types';

type GroupsProps = {
  spacing?: ResponsiveSpacing;
};

const Groups = styled.div<GroupsProps>`
  position: relative;
  display: flex;

  ${({ theme, spacing }) =>
    spacing &&
    css`
      > * {
        ${setProperty({ property: 'marginRight', theme, value: spacing })};
      }
    `}
`;

const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  size = 'default',
  shape,
  max = 4,
  spacing = -1.5,
  showBorder,
}) => {
  const avatarCount = React.Children.count(children);

  return (
    <Groups spacing={spacing}>
      {React.Children.toArray(children)
        .slice(0, max)
        .map((child, index) => {
          if (!isValidElement(child)) {
            return null;
          }

          return React.cloneElement(child as React.ReactElement<AvatarProps>, {
            size,
            shape,
            showBorder,
            zIndex: avatarCount - index,
          });
        })}

      {avatarCount > max && (
        <Avatar
          size={size}
          shape={shape}
          showBorder={showBorder}
          fontSize={1.25}
          variant="last"
        >
          +{avatarCount - max}
        </Avatar>
      )}
    </Groups>
  );
};

export default AvatarGroup;
