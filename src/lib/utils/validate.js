export const validateChannelSelection = (publishInChannel, selectedChannel, loggedInChannel) => {
  if (publishInChannel && (selectedChannel !== loggedInChannel.name)) {
    throw new Error('Log in to a channel or select Anonymous');
  }
};

export const validateNoPublishErrors = ({file, url, channel}) => {
    if (file || url || channel) {
        throw new Error('Fix the errors identified in red');
    }
};
