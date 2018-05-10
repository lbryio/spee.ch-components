import { connect } from 'react-redux';
import { logOutChannel, checkForLoggedInChannel } from '../../actions/channel';
import View from './view';

const mapStateToProps = ({ channel, site, plugins }) => {
  console.log('custom components:', plugins.components);
  return {
    channelName    : channel.loggedInChannel.name,
    channelShortId : channel.loggedInChannel.shortId,
    channelLongId  : channel.loggedInChannel.longId,
    siteDescription: site.description,
    customLogo     : plugins.components.Logo,
  };
};

const mapDispatchToProps = {
  checkForLoggedInChannel,
  logOutChannel,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
