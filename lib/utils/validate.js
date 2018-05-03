"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateNoPublishErrors = exports.validateChannelSelection = void 0;

var validateChannelSelection = function validateChannelSelection(publishInChannel, selectedChannel, loggedInChannel) {
  if (publishInChannel && selectedChannel !== loggedInChannel.name) {
    throw new Error('Log in to a channel or select Anonymous');
  }
};

exports.validateChannelSelection = validateChannelSelection;

var validateNoPublishErrors = function validateNoPublishErrors(_ref) {
  var file = _ref.file,
      url = _ref.url,
      channel = _ref.channel;

  if (file || url || channel) {
    throw new Error('Fix the errors identified in red');
  }
};

exports.validateNoPublishErrors = validateNoPublishErrors;