'use client';

import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useRef,
  ForwardedRef,
  useState,
  useEffect,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import classNames from 'classnames';
import { mergeRefs } from 'react-merge-refs';

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
      errorMessage,
      isError,
      variant = 'filled',
      isMultiline = false,
      ...inputAttrs
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [growingBlockValue, setGrowingBlockValue] = useState(
      inputAttrs.value
    );

    const setGrowingBlockValueWithEndLine = (value: string) => {
      setGrowingBlockValue(`${value}\n `);
    };

    const handleTextAreaInput: ChangeEventHandler<HTMLTextAreaElement> = (
      e
    ) => {
      setGrowingBlockValueWithEndLine(e.target.value);
      inputAttrs.onInput?.(e);
    };

    const handleTextAreaFocus: FocusEventHandler<HTMLTextAreaElement> = (e) => {
      setGrowingBlockValueWithEndLine(e.target.value);
      inputAttrs.onFocus?.(e);
    };

    const handleTextAreaBlur: FocusEventHandler<HTMLTextAreaElement> = (e) => {
      setGrowingBlockValue(e.target.value);
      inputAttrs.onFocus?.(e);
    };

    useEffect(() => {
      if (!textareaRef.current) return;
      setGrowingBlockValue(textareaRef.current.value);
    }, [textareaRef]);

    return (
      <div
        className={classNames(classes.outerWrapper, {
          [classes.outerWrapper_isError]: isError || errorMessage,
          [classes.outerWrapper_variant_filled]: variant === 'filled',
          [classes.outerWrapper_variant_unfilled]: variant === 'unfilled',
        })}
      >
        <div className={classes.inputWrapper}>
          {isMultiline ? (
            <div className={classes.textareaWrapper}>
              <p aria-hidden className={classes.growingBlock}>
                {growingBlockValue}
              </p>
              <textarea
                className={classes.textarea}
                placeholder={label}
                rows={1}
                {...inputAttrs}
                onInput={handleTextAreaInput}
                onFocus={handleTextAreaFocus}
                onBlur={handleTextAreaBlur}
                ref={mergeRefs([ref, textareaRef])}
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

export { TextInput };
