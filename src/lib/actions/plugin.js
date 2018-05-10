import * as actions from '../constants/plugin_action_types';

export function updatePluginComponents (components) {
  return {
    type: actions.PLUGIN_COMPONENTS_UPDATE,
    data: components,
  };
}

export function updatePluginContainers (containers) {
  return {
    type: actions.PLUGIN_COMPONENTS_UPDATE,
    data: containers,
  };
}

export function updatePluginPages (pages) {
  return {
    type: actions.PLUGIN_COMPONENTS_UPDATE,
    data: pages,
  };
}
