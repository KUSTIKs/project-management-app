'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';

import {
  AppLink,
  Button,
  PasswordInput,
  TextInput,
  Typography,
} from '@project-management-app/components';
import { AppLocale, CreateUserDto } from '@project-management-app/types';
import { authService } from '@project-management-app/services';
import { useAppRouter } from '@project-management-app/hooks';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';
import { QueryKey } from '@project-management-app/enums';
import { getSignUpSchema } from '@project-management-app/schemas';

import { authDictionary } from '../auth.dictionary';
import classes from '../auth.module.scss';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const SignUpPage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = authDictionary.getContentMap({ locale });
  const {
    mutate: signUp,
    error,
    isLoading,
  } = useMutation({
    mutationKey: [QueryKey.AUTH, 'sign-up'],
    mutationFn: authService.signUp,
    onSuccess: () => navigateToSignIn(),
  });
  const router = useAppRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>({
    resolver: zodResolver(
      getSignUpSchema({
        locale,
      })
    ),
  });
  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleSignUp: SubmitHandler<CreateUserDto> = (dto) => {
    signUp(dto);
  };

  const navigateToSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit(handleSignUp)}>
        <Typography variant="title1" weight={800}>
          {contentMap.signUp}
        </Typography>
        <fieldset className={classes.fieldset} disabled={isLoading}>
          <TextInput
            {...register('name')}
            label={contentMap.name}
            errorMessage={errors.name?.message}
            autoComplete="nickname"
          />
          <TextInput
            {...register('login')}
            label={contentMap.login}
            errorMessage={errors.login?.message}
            autoComplete="username"
          />
          <PasswordInput
            {...register('password')}
            label={contentMap.password}
            errorMessage={errors.password?.message}
            autoComplete="new-password"
          />
          {isString(errorMessage) && (
            <Typography variant="text" weight={600} colorName="red/200">
              {errorMessage}
            </Typography>
          )}
        </fieldset>
        <Button size="l" isLoading={isLoading} type="submit">
          {contentMap.submit}
        </Button>
      </form>
      <Typography variant="text" weight={500}>
        {contentMap.signUpMessage}{' '}
        <AppLink href="/sign-in">
          <Typography
            variant="text"
            weight={600}
            colorName="blue/500"
            as="span"
          >
            {contentMap.signIn}
          </Typography>
        </AppLink>
      </Typography>
    </div>
  );
};

export default SignUpPage;
