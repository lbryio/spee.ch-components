"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePluginComponents = updatePluginComponents;
exports.updatePluginContainers = updatePluginContainers;
exports.updatePluginPages = updatePluginPages;

var actions = _interopRequireWildcard(require("../constants/plugin_action_types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function updatePluginComponents(components) {
  return {
    type: actions.PLUGIN_COMPONENTS_UPDATE,
    data: components
  };
}

function updatePluginContainers(containers) {
  return {
    type: actions.PLUGIN_COMPONENTS_UPDATE,
    data: containers
  };
}

function updatePluginPages(pages) {
  return {
    type: actions.PLUGIN_COMPONENTS_UPDATE,
    data: pages
  };
}