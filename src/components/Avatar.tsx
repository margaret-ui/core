import styled, { css } from 'styled-components';

type AvatarModel = {
  imageUrl?: string;
  size?: string;
  shape?: string;
  placeholder?: any;
  firstName?: string;
  lastName?: string;
  name?: string;
};

type WrapperProps = AvatarModel & {
  size?: string;
  shape?: string;
};

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
    boxshadow: ${theme.avatar?.boxShadow};
    color: ${theme.avatar?.color};
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
}: AvatarModel): any => {
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

const Avatar = (props: AvatarModel) => (
  <Wrapper
    style={{
      backgroundImage: props.imageUrl
        ? `url(${encodeURI(props.imageUrl)})`
        : undefined,
    }}
    {...props}
  >
    {getAvatarContent(props)}
  </Wrapper>
);

Avatar.defaultProps = {
  imageUrl: '',
};

export default Avatar;
