'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';

import {
  AppLink,
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';
import { AppLocale, SignInUserDto } from '@project-management-app/types';
import { useAppRouter } from '@project-management-app/hooks';
import { authService } from '@project-management-app/services';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';
import { QueryKey } from '@project-management-app/enums';

import { getSignInSchema } from './sign-in.schema';
import { authDictionary } from '../auth.dictionary';
import classes from '../auth.module.scss';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const SignInPage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = authDictionary.getContentMap({ locale });
  const {
    mutate: signIn,
    error,
    isLoading,
  } = useMutation({
    mutationKey: [QueryKey.AUTH, 'sign-in'],
    mutationFn: authService.signIn,
    onSuccess: () => navigateToBoards(),
  });
  const router = useAppRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUserDto>({
    resolver: zodResolver(
      getSignInSchema({
        locale,
      })
    ),
  });
  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleSignIn: SubmitHandler<SignInUserDto> = (dto) => {
    signIn(dto);
  };

  const navigateToBoards = () => {
    router.refresh();
    router.push('/boards');
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit(handleSignIn)}>
        <Typography variant="title1" weight={800}>
          {contentMap.signIn}
        </Typography>
        <fieldset className={classes.fieldset} disabled={isLoading}>
          <TextInput
            {...register('login')}
            label={contentMap.login}
            errorMessage={errors.login?.message}
          />
          <TextInput
            {...register('password')}
            label={contentMap.password}
            errorMessage={errors.password?.message}
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
        {contentMap.signInMessage}{' '}
        <AppLink href="/sign-up">
          <Typography
            variant="text"
            weight={600}
            colorName="blue/500"
            as="span"
          >
            {contentMap.signUp}
          </Typography>
        </AppLink>
      </Typography>
    </div>
  );
};

export default SignInPage;
