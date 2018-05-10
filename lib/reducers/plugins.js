"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(require("../constants/plugin_action_types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var customizedPluginReducer = function customizedPluginReducer(_ref) {
  var containers = _ref.containers,
      components = _ref.components,
      pages = _ref.pages;
  var initialState = {
    components: containers || {},
    containers: components || {},
    pages: pages || {}
  };
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case actions.PLUGIN_COMPONENTS_UPDATE:
        return Object.assign({}, state, {
          components: action.data
        });

      case actions.PLUGIN_CONTAINERS_UPDATE:
        return Object.assign({}, state, {
          containers: action.data
        });

      case actions.PLUGIN_PAGES_UPDATE:
        return Object.assign({}, state, {
          pages: action.data
        });

      default:
        return state;
    }
  };
};

var _default = customizedPluginReducer;
exports.default = _default;