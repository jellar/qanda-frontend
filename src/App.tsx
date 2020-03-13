import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { configureStore } from './Store';
import { HeaderWithRouter as Header } from './Header';
import HomePage from './HomePage';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './styles';

import { SearchPage } from './SearchPage';
import { QuestionPage } from './QuestionPage';
import { SignInPage } from './SignInPage';
import { SignOutPage } from './SignOutPage';
import { NotFoundPage } from './NotFoundPage';
import { AuthProvider } from './Auth';
import { AuthorizedPage } from './AuthorizedPage';

const AskPage = lazy(() => import('./AskPage'));
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
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
                  <AuthorizedPage>
                    <AskPage />
                  </AuthorizedPage>
                </Suspense>
              </Route>
              <Route
                path="/signin"
                render={() => <SignInPage action="signin"></SignInPage>}
              />
              <Route
                path="/signin-callback"
                render={() => (
                  <SignInPage action="signin-callback"></SignInPage>
                )}
              />
              <Route
                path="/signout"
                render={() => <SignOutPage action="signout"></SignOutPage>}
              />
              <Route
                path="/signout-callback"
                render={() => (
                  <SignOutPage action="signout-callback"></SignOutPage>
                )}
              />
              <Route path="/questions/:questionId" component={QuestionPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
