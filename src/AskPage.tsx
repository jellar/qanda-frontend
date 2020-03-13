import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Page } from './Page';
import { Form, required, minLength, Values, SubmitResult } from './Form';
import { Field } from './Field';
import { PostQuestionData, QuestionData } from './QuestionsData';

import {
  postQuestionActionCreator,
  AppState,
  clearPostedQuestionActionCreator,
} from './Store';

interface Props {
  postQuestion: (question: PostQuestionData) => Promise<void>;
  postedQuestionResult?: QuestionData;
  clearPostedQuestion: () => void;
}

const AskPage: FC<Props> = ({
  postQuestion,
  postedQuestionResult,
  clearPostedQuestion,
}) => {
  useEffect(() => {
    return function cleanUp() {
      clearPostedQuestion();
    };
  }, [clearPostedQuestion]);

  const handleSubmit = (values: Values) => {
    postQuestion({
      title: values.title,
      content: values.content,
    });
  };

  let submitResult: SubmitResult | undefined;
  if (postedQuestionResult) {
    submitResult = { success: postedQuestionResult !== undefined };
  }

  return (
    <Page title="Ask a Question">
      <Form
        onSubmit={handleSubmit}
        submitCaption="Submit Your Question"
        validationRules={{
          title: [{ validator: required }, { validator: minLength, args: 10 }],
          content: [
            { validator: required },
            { validator: minLength, args: 50 },
          ],
        }}
        successMessage="Your question was successfully submitted"
        failureMessage="There was a problem with your question"
        submitResult={submitResult}
      >
        <Field name="title" label="Title" type="Text" />
        <Field name="content" label="Content" type="TextArea"></Field>
      </Form>
    </Page>
  );
};

const mapStateToProps = (store: AppState) => {
  return {
    postedQuestionResult: store.questions.postedResult,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    postQuestion: (question: PostQuestionData) =>
      dispatch(postQuestionActionCreator(question)),
    clearPostedQuestion: () => dispatch(clearPostedQuestionActionCreator()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AskPage);
