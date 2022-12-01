'use client';

import React, {
  TextareaHTMLAttributes,
  forwardRef,
  useRef,
  useState,
  useEffect,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import classNames from 'classnames';
import { mergeRefs } from 'react-merge-refs';

import { InputVariant } from '../inputs.types';
import classes from '../inputs.module.scss';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  errorMessage?: string | null;
  isError?: boolean;
  variant?: InputVariant;
};

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, errorMessage, isError, variant = 'filled', ...inputAttrs },
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
      inputAttrs.onBlur?.(e);
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
          <div
            className={classNames(classes.textareaWrapper, {
              [classes.textareaWrapper_hasValue]: !!growingBlockValue,
            })}
          >
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

export { TextArea };
