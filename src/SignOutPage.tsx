import React, { FC } from 'react';
import { Page } from './Page';
import { StatusText } from './styles';
import { useAuth } from './Auth';

type signOutAction = 'signout' | 'signout-callback';

interface Props {
  action: signOutAction;
}

export const SignOutPage: FC<Props> = ({ action }) => {
  let message = 'Signing out ...';
  const { signOut } = useAuth();
  switch (action) {
    case 'signout':
      signOut();
      break;
    case 'signout-callback':
      message = 'You successfully signed out!';
      break;
  }
  return (
    <Page title="Sign Out">
      <StatusText>{message}</StatusText>
    </Page>
  );
};
