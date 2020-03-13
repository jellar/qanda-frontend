import React, { FC } from 'react';
import { PageTitle } from './PageTitle';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface Props {
  title?: string;
}
export const Page: FC<Props> = ({ title, children }) => (
  <div
    css={css`
      margin: 50px auto 20px auto;
      max-width: 600px;
      padding: 30px 20px;
    `}
  >
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
