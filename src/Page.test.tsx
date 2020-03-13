import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Page } from './Page';

test('When the Page component rendered, it should contain the correct title and content', () => {
  const { getByText } = render(
    <Page title="Title test">
      <span>Content test</span>
    </Page>,
  );

  const title = getByText('Title test');
  expect(title).not.toBeNull();

  const content = getByText('Content test');
  expect(content).not.toBeNull();

  afterEach(cleanup);
});
