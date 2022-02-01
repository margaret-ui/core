export type AvatarModel = {
  imageUrl?: string;
  size?: string;
  shape?: string;
  placeholder?: any;
  firstName?: string;
  lastName?: string;
  name?: string;
};

export type WrapperProps = AvatarModel & {
  size?: string;
  shape?: string;
};
