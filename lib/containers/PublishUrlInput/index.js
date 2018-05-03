"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _publish = require("../../actions/publish");

var _reactRedux = require("react-redux");

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var channel = _ref.channel,
      publish = _ref.publish;
  return {
    loggedInChannelName: channel.loggedInChannel.name,
    loggedInChannelShortId: channel.loggedInChannel.shortId,
    fileName: publish.file.name,
    publishInChannel: publish.publishInChannel,
    selectedChannel: publish.selectedChannel,
    claim: publish.claim,
    urlError: publish.error.url
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClaimInput: function onClaimInput(value) {
      dispatch((0, _publish.updateClaim)(value));

      if (value) {
        dispatch((0, _publish.validateClaim)(value));
      } else {
        dispatch((0, _publish.updateError)('url', 'Choose a custom url'));
      }
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view.default);

exports.default = _default;