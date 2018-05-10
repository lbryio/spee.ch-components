"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(require("../constants/plugin_action_types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var customizedPluginReducer = function customizedPluginReducer(_ref) {
  var components = _ref.components,
      containers = _ref.containers,
      pages = _ref.pages;
  console.log('plugins:', components, containers, pages);
  var initialState = {
    components: components || false,
    containers: 'test',
    // containers || false,
    pages: pages || false
  };
  console.log('initial state:', initialState);
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    console.log('new action:', action);

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
        console.log('returning state:', state);
        return state;
    }
  };
};

var _default = customizedPluginReducer;
exports.default = _default;