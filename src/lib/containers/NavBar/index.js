import { connect } from 'react-redux';
import { logOutOfChannel, checkForLoggedInChannel } from '../../actions/channel';
import View from './view';

const mapStateToProps = ({ channel, site }) => {
  return {
    channelName   : channel.loggedInChannel.name,
    channelShortId: channel.loggedInChannel.shortId,
    channelLongId : channel.loggedInChannel.longId,
    siteDescription: site.description,
  };
};

const mapDispatchToProps = () => {
  return {
    // onChannelLogout: () => {
    //   dispatch(updateLoggedInChannel(null, null, null));
    // },
    checkForLoggedInChannel,
    logOutOfChannel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
