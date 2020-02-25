import React from 'react';
import { Page } from './Page';
import { Form, required, minLength, Values } from './Form';
import { Field } from './Field';
import { postQuestion } from './QuestionsData';

export const AskPage = () => {
  const handleSubmit = async (values: Values) => {
    const question = await postQuestion({
      title: values.title,
      content: values.content,
      userName: 'Fred',
      created: new Date(),
    });
    return { success: question ? true : false };
  };
  return (
    <Page title="Ask Page">
      <Form
        onSubmit={handleSubmit}
        submitCaption="Ask a question"
        validationRules={{
          title: [{ validator: required }, { validator: minLength, args: 10 }],
          content: [
            { validator: required },
            { validator: minLength, args: 50 },
          ],
        }}
        successMessage="Your question was successfully submitted"
        failureMessage="There was a problem with your question"
      >
        <Field name="title" label="Title" type="Text" />
        <Field name="content" label="Content" type="TextArea"></Field>
      </Form>
    </Page>
  );
};

export default AskPage;
