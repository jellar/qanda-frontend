import React, { FC } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { gray5 } from './styles';
import { AnswerData } from './QuestionsData';
import { Answer } from './Answer';

interface Props {
  answers: AnswerData[];
}

export const AnswerList: FC<Props> = ({ answers }) => (
  <ul
    css={css`
      margin: 10px 0 0 0;
      list-style: none;
      padding: 0;
    `}
  >
    {answers.map(answer => (
      <li
        css={css`
          border-top: 1px solid ${gray5};
        `}
      >
        <Answer answer={answer}></Answer>
      </li>
    ))}
  </ul>
);
