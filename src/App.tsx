import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { HeaderWithRouter as Header } from './Header';
import { HomePage } from './HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './styles';

import { SearchPage } from './SearchPage';
import { QuestionPage } from './QuestionPage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';

const AskPage = lazy(() => import('./AskPage'));

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/ask">
            <Suspense
              fallback={
                <div
                  css={css`
                    font-size: 15px;
                    font-style: italic;
                  `}
                >
                  loading...
                </div>
              }
            >
              <AskPage />
            </Suspense>
          </Route>
          <Route path="/signin" component={SignInPage} />
          <Route path="/questions/:questionId" component={QuestionPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
