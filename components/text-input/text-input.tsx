import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useRef,
  ForwardedRef,
  useState,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import classNames from 'classnames';

import classes from './text-input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    errorMessage?: string | null;
    isError?: boolean;
    variant?: 'filled' | 'unfilled';
    isMultiline?: boolean;
  };

const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (
    {
      label,
      value: initialValue,
      errorMessage,
      isError = !!errorMessage,
      variant = 'filled',
      isMultiline = false,
      ...inputAttrs
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue);

    const handleInput: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      setValue(e.target.value + ' ');
      inputAttrs.onInput?.(e);
    };

    return (
      <div
        className={classNames(classes.outerWrapper, {
          [classes.outerWrapper_isError]: isError,
          [classes.outerWrapper_variant_filled]: variant === 'filled',
          [classes.outerWrapper_variant_unfilled]: variant === 'unfilled',
        })}
      >
        <div className={classes.inputWrapper}>
          {isMultiline ? (
            <div className={classes.textareaWrapper}>
              <p aria-hidden className={classes.growingBlock}>
                {value}
              </p>
              <textarea
                className={classes.textarea}
                placeholder={label}
                rows={1}
                {...inputAttrs}
                onInput={handleInput}
                ref={ref as ForwardedRef<HTMLTextAreaElement>}
              />
            </div>
          ) : (
            <input
              className={classes.input}
              placeholder={label}
              {...inputAttrs}
              ref={ref as ForwardedRef<HTMLInputElement>}
            />
          )}

          <label className={classes.label}>
            {label}
            {!!inputAttrs.required && '*'}
          </label>
        </div>
        {!!errorMessage && (
          <p className={classes.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

const A = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  return <TextInput label="sd" ref={ref} />;
};

export { TextInput };
