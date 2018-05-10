import * as actions from '../constants/plugin_action_types';

const customizedPluginReducer = ({components, containers, pages}) => {
  console.log('plugins:', components, containers, pages);
  const initialState = {
    components: components || false,
    containers: 'test', // containers || false,
    pages: pages || false,
  };
  console.log('initial state:', initialState);
  return (state = initialState, action) => {
    console.log('new action:', action);
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
        console.log('returning state:', state);
        return state;
    }
  }
};

export default customizedPluginReducer;
