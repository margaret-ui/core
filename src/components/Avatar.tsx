import styled, { css } from 'styled-components';
import { trim } from 'lodash';

type AvatarModel = {
  imageUrl?: string;
  size?: string;
  shape?: string;
  placeholder?: any;
  firstName?: string;
  lastName?: string;
  name?: string;
}

type WrapperProps = {
  size: string;
  shape: string;
}

const Wrapper = styled.span<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-position: center center;
  text-transform: uppercase;

  ${({ theme }: { theme: any }) => css`
    width: ${theme.avatar?.sizes?.default};
    height: ${theme.avatar?.sizes?.default};
    font-size: calc(${theme.avatar?.sizes?.default} / 2);
    background: ${theme.avatar?.background};
    border: ${theme.avatar?.border};
    boxShadow: ${theme.avatar?.boxShadow};
    color: ${theme.avatar?.color};
    border-radius: ${theme?.avatar?.shape?.default};
  `};
  
  ${({ size, theme }: { size: string, theme: any }) =>
    Boolean(size) &&
    Boolean(theme?.avatar?.sizes?.[size]) &&
    css`
      width: ${theme?.avatar?.sizes?.[size]};
      height: ${theme?.avatar?.sizes?.[size]};
      font-size: calc(${theme?.avatar?.sizes?.[size]} / 2);
    `};

  ${({ shape, theme }: { shape: string, theme: any }) =>
    Boolean(shape) &&
    Boolean(theme?.avatar?.shape?.[shape]) &&
    css`
      border-radius: ${theme?.avatar?.shape?.[shape]};
    `}

`;

const getAvatarContent = ({ firstName = "", lastName = "", placeholder, imageUrl, name }: AvatarModel): any => {
  if (Boolean(imageUrl)) {
    return null;
  }

  if (Boolean(placeholder)) {
    return placeholder;
  }

  if (Boolean(firstName) || Boolean(lastName)) {
    return (
      <span>
        {trim(firstName).charAt(0)}
        {trim(lastName).charAt(0)}
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

const Avatar = (props: AvatarModel) => (
  <Wrapper
    style={{
      backgroundImage: Boolean(props.imageUrl) ? `url(${encodeURI(props.imageUrl)})` : undefined,
    }}
    {...props}
  >
    {getAvatarContent(props)}
  </Wrapper>
);

Avatar.defaultProps = {
  imageUrl: "",
}

export default Avatar;
