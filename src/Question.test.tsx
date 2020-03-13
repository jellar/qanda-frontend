import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Question } from './Question';
import { QuestionData } from './QuestionsData';
import { BrowserRouter } from 'react-router-dom';

test('When the question rendered, it should contain correct data', () => {
  const question: QuestionData = {
    questionId: 1,
    title: 'Title test',
    content: 'Content test',
    userName: 'User1',
    created: new Date(2020, 1, 1),
    answers: [],
  };

  const { getByText } = render(
    <BrowserRouter>
      <Question data={question}></Question>
    </BrowserRouter>,
  );

  const titleText = getByText('Title test');
  expect(titleText).not.toBeNull();

  const contentText = getByText('Content test');
  expect(contentText).not.toBeNull();

  const userText = getByText(/User1/);
  expect(userText).not.toBeNull();

  const dateText = getByText(/2020/);
  expect(dateText).not.toBeNull();

  afterEach(cleanup);
});
