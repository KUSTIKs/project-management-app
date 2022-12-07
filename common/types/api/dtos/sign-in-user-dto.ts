type SignInUserDto = {
  login: string;
  password: string;
};

type SignInUserResponseDto = {
  token: string;
};

export type { SignInUserDto, SignInUserResponseDto };
