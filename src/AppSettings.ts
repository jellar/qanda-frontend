export const server = 'https://localhost:5001';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-z90w33i9.eu.auth0.com',
  client_id: 'N763pKjU757xWAeGMh85bpQSBdkumHzC',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
