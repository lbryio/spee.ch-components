"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _view = _interopRequireDefault(require("./view"));

var _channelCreate = require("../../actions/channelCreate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$channelCreate = _ref.channelCreate,
      name = _ref$channelCreate.name,
      password = _ref$channelCreate.password,
      error = _ref$channelCreate.error,
      status = _ref$channelCreate.status;
  return {
    name: name,
    password: password,
    error: error,
    status: status
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onNameInput: function onNameInput(value) {
      if (!value) {
        return dispatch((0, _channelCreate.updateChannelCreateName)('error', 'Please enter a channel name'));
      }

      dispatch((0, _channelCreate.updateChannelCreateName)('value', value));
      dispatch((0, _channelCreate.updateChannelAvailability)(value));
    },
    onPasswordInput: function onPasswordInput(value) {
      if (!value) {
        return dispatch((0, _channelCreate.updateChannelCreatePassword)('error', 'Please enter a password'));
      }

      dispatch((0, _channelCreate.updateChannelCreatePassword)('value', value));
      dispatch((0, _channelCreate.updateChannelCreatePassword)('error', null));
    },
    onSubmit: function onSubmit() {
      dispatch((0, _channelCreate.createChannel)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view.default);

exports.default = _default;