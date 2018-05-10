import { combineReducers } from 'redux';
import PublishReducer from './publish';
import ChannelReducer from './channel';
import ShowReducer from './show';
import SiteReducer from './site';
import ChannelCreateReducer from './channelCreate';
import Plugins from './plugins';

const customizedReducers = (siteConfig, viewsConfig) => {
  return combineReducers({
    channel      : ChannelReducer,
    channelCreate: ChannelCreateReducer,
    publish      : PublishReducer(siteConfig),
    show         : ShowReducer,
    site         : SiteReducer(siteConfig),
    plugins      : Plugins(viewsConfig),
  })
};

export default customizedReducers;
