import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { AvatarProps, AvatarGroupProps } from './types';
import AvatarGroup from './AvatarGroup';
import { getInitials } from './utils';

const Wrapper = styled.span<AvatarProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, variant }) => css`
    width: ${theme?.avatar?.sizes?.default};
    height: ${theme?.avatar?.sizes?.default};
    font-size: calc(${theme?.avatar?.sizes?.default} / 2);
    background-color: ${variant === 'last'
      ? theme?.avatar?.backgroundLight
      : theme?.avatar?.background};
    box-shadow: ${theme?.avatar?.boxShadow};
    color: ${theme?.avatar?.color};
    border-radius: ${theme?.avatar?.shape?.default};
  `};

  ${({ size, theme }) =>
    size &&
    theme?.avatar?.sizes?.[size] &&
    css`
      width: ${theme?.avatar?.sizes?.[size]};
      height: ${theme?.avatar?.sizes?.[size]};
      font-size: calc(${theme?.avatar?.sizes?.[size]} / 2);
    `};

  ${({ shape, theme }) =>
    shape &&
    theme?.avatar?.shape?.[shape] &&
    css`
      border-radius: ${theme?.avatar?.shape?.[shape]};
    `}

    ${({ zIndex }) =>
      Boolean(zIndex) &&
      css`
        z-index: ${zIndex};
      `}

    ${({ bg }) =>
      Boolean(bg) &&
      css`
        background: ${bg};
      `}

    ${({ fontSize }) =>
      Boolean(fontSize) &&
      css`
        font-size: ${fontSize}rem;
      `}

    ${({ showBorder, theme }) =>
      Boolean(showBorder) &&
      css`
        border: ${theme?.avatar?.border};
      `}
`;

const getAvatarContent = ({
  placeholder,
  imageUrl,
  children,
  name,
}: AvatarProps): ReactNode => {
  if (imageUrl) {
    return null;
  }

  if (children) {
    return children;
  }

  if (name) {
    return getInitials(name);
  }

  if (placeholder) {
    return placeholder;
  }
};

const Avatar: FC<AvatarProps> & {
  Group: FC<AvatarGroupProps>;
  getInitials: (name: string) => string;
} = props => (
  <Wrapper
    style={
      props.imageUrl
        ? {
            backgroundImage: `url(${encodeURI(props.imageUrl)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }
        : {}
    }
    {...props}
  >
    {getAvatarContent(props)}
  </Wrapper>
);

Avatar.defaultProps = {
  imageUrl: '',
};

Avatar.Group = AvatarGroup;
Avatar.getInitials = getInitials;

export default Avatar;
