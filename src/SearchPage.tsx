import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page } from './Page';
import { searchQuestions, QuestionData } from './QuestionsData';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { QuestionList } from './QuestionList';

export const SearchPage: FC<RouteComponentProps> = ({ location }) => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('criteria') || '';

  useEffect(() => {
    const doGetSearchQuestions = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      setQuestions(foundResults);
    };
    doGetSearchQuestions(search);
  }, [search]);

  return (
    <Page title="Search">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
