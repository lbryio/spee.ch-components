import Request from '../utils/request';

export function getChannelData (host, name, id) {
  console.log('getting channel data for', host, name, id);
  if (!id) id = 'none';
  const url = `${host}/api/channel/data/${name}/${id}`;
  return Request(url);
};

export function getChannelClaims (host, name, longId, page) {
  if (!page) page = 1;
  const url = `${host}/api/channel/claims/${name}/${longId}/${page}`;
  return Request(url);
};
