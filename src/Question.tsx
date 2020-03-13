import React, { FC } from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { gray2, gray3 } from './styles';
import { QuestionData } from './QuestionsData';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
  <div
    css={css`
      padding: 10px 0;
    `}
  >
    <Link
      to={`questions/${data.questionId}`}
      css={css`
        padding: 10px 0;
        font-size: 19px;
        text-decoration: none;
        color: ${gray2};
      `}
    >
      {data.title}
    </Link>
    {showContent && (
      <div
        css={css`
          color: ${gray2};
          font-size: 15px;
          padding-bottom: 10px;
        `}
      >
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Asked by ${data.userName} on
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
