import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { AvatarProps } from './types';

const Wrapper = styled.span<AvatarProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    width: ${theme?.avatar?.sizes?.default};
    height: ${theme?.avatar?.sizes?.default};
    font-size: calc(${theme?.avatar?.sizes?.default} / 2);
    background-color: ${theme?.avatar?.background};
    border: ${theme?.avatar?.border};
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
`;

const getAvatarContent = ({
  firstName = '',
  lastName = '',
  placeholder,
  imageUrl,
  name,
}: AvatarProps): ReactNode => {
  if (imageUrl) {
    return null;
  }

  if (placeholder) {
    return placeholder;
  }

  if (firstName || lastName) {
    return (
      <span>
        {(firstName || '').trim().charAt(0)}
        {(lastName || '').trim().charAt(0)}
      </span>
    );
  }

  return (
    <span>
      {(name || '')
        .split(' ')
        .map(chunk => chunk.charAt(0))
        .slice(0, 2)
        .join('')}
    </span>
  );
};

const Avatar: FC<AvatarProps> = props => (
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

export default Avatar;
