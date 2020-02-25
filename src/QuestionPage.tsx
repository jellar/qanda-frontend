import React, { FC, Fragment, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page } from './Page';
import { QuestionData, getQuestion, postAnswer } from './QuestionsData';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { gray3, gray6 } from './styles';
import { AnswerList } from './AnswerList';
import { Form, required, minLength, Values } from './Form';
import { Field } from './Field';
interface RouterParams {
  questionId: string;
}
export const QuestionPage: FC<RouteComponentProps<RouterParams>> = ({
  match,
}) => {
  const [question, setQuestion] = useState<QuestionData | null>(null);

  useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
      const question = await getQuestion(questionId);
      setQuestion(question);
    };
    if (match.params.questionId) {
      const questionId = Number(match.params.questionId);
      doGetQuestion(questionId);
    }
  }, [match.params.questionId]);

  const handleSubmit = async (values: Values) => {
    const result = await postAnswer({
      questionId: question!.questionId,
      content: values.content,
      userName: 'Fred',
      created: new Date(),
    });
    return { success: result ? true : false };
  };

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0px 5px;
          `}
        >
          {question === null ? '' : question.title}
        </div>
        {question !== null && (
          <Fragment>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
              `}
            >
              {question.content}
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
              `}
            >
              {`Asked by ${question.userName} on
  ${question.created.toLocaleDateString()}
  ${question.created.toLocaleTimeString()}`}
            </div>
            <AnswerList answers={question.answers}></AnswerList>
            <Form
              submitCaption="Submit Your Answer"
              validationRules={{
                content: [
                  { validator: required },
                  { validator: minLength, args: 50 },
                ],
              }}
              onSubmit={handleSubmit}
              failureMessage="There was a problem with your answer"
              successMessage="Your answer was successfully submitted."
            >
              <Field name="content" label="Your Answer" type="TextArea" />
            </Form>
          </Fragment>
        )}
      </div>
    </Page>
  );
};
