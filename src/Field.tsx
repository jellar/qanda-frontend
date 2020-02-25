import React, { useContext, ChangeEvent } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2, gray5, gray6 } from './styles';
import { FormContext } from './Form';

interface Props {
  name: string;
  label?: string;
  type?: 'Text' | 'TextArea' | 'Password';
}

const baseCSS = css`
  box-sizing: border-box;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  margin-bottom: 5px;
  padding: 8px 10px;
  border: 1px solid ${gray5};
  border-radius: 3px;
  color: ${gray2};
  background-color: white;
  width: 100%;
  :focus {
    outline-color: ${gray5};
  }
  :disabled {
    background-color: ${gray6};
  }
`;
export const Field: React.FC<Props> = ({ name, label, type = 'Text' }) => {
  const { setValue, touched, validate, setTouched } = useContext(FormContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (setValue) {
      setValue(name, e.currentTarget.value);
    }
    if (touched[name]) {
      if (validate) {
        validate(name);
      }
    }
  };

  const handleBlur = () => {
    if (setTouched) {
      setTouched(name);
    }
    if (validate) {
      validate(name);
    }
  };
  return (
    <FormContext.Consumer>
      {({ values, errors }) => (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
          `}
        >
          {label && (
            <label
              css={css`
                font-weight: bold;
              `}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          {(type === 'Text' || type === 'Password') && (
            <input
              type={type.toLocaleLowerCase()}
              id={name}
              css={baseCSS}
              value={values[name] === undefined ? '' : values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          )}
          {type === 'TextArea' && (
            <textarea
              id={name}
              css={css`
                ${baseCSS};
                height: 100px;
              `}
              value={values[name] === undefined ? '' : values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          )}

          {errors[name] &&
            errors[name].length > 0 &&
            errors[name].map(error => (
              <div
                css={css`
                  font-size: 12px;
                  color: red;
                `}
                key={error}
              >
                {error}
              </div>
            ))}
        </div>
      )}
    </FormContext.Consumer>
  );
};
