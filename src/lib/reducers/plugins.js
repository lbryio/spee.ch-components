import * as actions from '../constants/plugin_action_types';

const customizedPluginReducer = ({containers, components, pages}) => {
  console.log('plugins:', containers, components, pages);
  let initialState = {
    components: containers || false,
    containers: components || false,
    pages: pages || false,
  };
  return (state = initialState, action) => {
    switch (action.type) {
      case actions.PLUGIN_COMPONENTS_UPDATE:
        return Object.assign({}, state, {
          components: action.data,
        });
      case actions.PLUGIN_CONTAINERS_UPDATE:
        return Object.assign({}, state, {
          containers: action.data,
        });
      case actions.PLUGIN_PAGES_UPDATE:
        return Object.assign({}, state, {
          pages: action.data,
        });
      default:
        return state;
    }
  }
};

export default customizedPluginReducer;
