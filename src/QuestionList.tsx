import React, { FC } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { gray5, accent2 } from './styles';
import { QuestionData } from './QuestionsData';
import { Question } from './Question';

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList: FC<Props> = ({ data, renderItem }) => {
  return (
    <ul
      css={css`
        list-style: none;
        margin: 10px 0 0 0;
        padding: 0 20px;
        background-color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-top: 3px solid ${accent2};
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
      `}
    >
      {data.map(question => (
        <li
          key={question.questionId}
          css={css`
            border-top: 1px solid ${gray5};
            :first-of-type {
              border-top: none;
            }
          `}
        >
          {renderItem ? renderItem(question) : <Question data={question} />}
        </li>
      ))}
    </ul>
  );
};
