'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

import { Icon } from '@project-management-app/components';
import { useBooleanState } from '@project-management-app/hooks';

import { InputVariant } from '../inputs.types';
import classes from '../inputs.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errorMessage?: string | null;
  isError?: boolean;
  variant?: InputVariant;
};

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    { label, errorMessage, isError, variant = 'filled', ...inputAttrs },
    ref
  ) => {
    const isPassword = inputAttrs.type === 'password';
    const [isPasswordShown, isPasswordShownActions] = useBooleanState(false);
    const inputType =
      isPassword && isPasswordShown
        ? 'text'
        : isPassword && !isPasswordShown
        ? 'password'
        : inputAttrs.type;

    return (
      <div
        className={classNames(classes.outerWrapper, {
          [classes.outerWrapper_isError]: isError || errorMessage,
          [classes.outerWrapper_variant_filled]: variant === 'filled',
          [classes.outerWrapper_variant_unfilled]: variant === 'unfilled',
        })}
      >
        <div className={classes.inputWrapper}>
          <input
            className={classNames(classes.input, {
              [classes.input_withAction]: isPassword,
            })}
            placeholder={label}
            {...inputAttrs}
            type={inputType}
            ref={ref}
          />
          <label className={classes.label}>
            {label}
            {!!inputAttrs.required && '*'}
          </label>
          {isPassword && (
            <button
              className={classes.action}
              type="button"
              onClick={isPasswordShownActions.toggle}
            >
              {isPasswordShown ? <Icon.EyeOffLine /> : <Icon.EyeLine />}
            </button>
          )}
        </div>
        {!!errorMessage && (
          <p className={classes.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

export { TextInput };
