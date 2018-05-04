import Request from '../utils/request';

export function checkForLoggedInChannelApi () {
  const url = `/user`;
  const params = {credentials: 'include'};
  return Request(url, params);
}
