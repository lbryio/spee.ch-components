import { combineReducers } from 'redux';
import PublishReducer from './publish';
import ChannelReducer from './channel';
import ShowReducer from './show';
import SiteReducer from './site';
import ChannelCreateReducer from './channelCreate';
import Plugins from './plugins';

const customizedReducers = (siteConfig, customViews) => {
  return combineReducers({
    channel      : ChannelReducer,
    channelCreate: ChannelCreateReducer,
    publish      : PublishReducer(siteConfig),
    show         : ShowReducer,
    site         : SiteReducer(siteConfig),
    Plugins      : Plugins(customViews),
  })
};

export default customizedReducers;
