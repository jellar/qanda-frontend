import React, { useState, useEffect, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { PrimaryButton } from './styles';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { QuestionList } from './QuestionList';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage: FC<RouteComponentProps> = ({ history }) => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const doGetAnsweredQuestions = async () => {
      const unAnsweredQuestions = await getUnansweredQuestions();
      setQuestions(unAnsweredQuestions);
      setQuestionsLoading(false);
    };
    doGetAnsweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    history.push('/ask');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {/* <QuestionList data={getUnansweredQuestions()} /> */}
      {questionsLoading ? (
        <div
          css={css`
            font-size: 15px;
            font-style: italic;
          `}
        >
          {' '}
          loading...
        </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
