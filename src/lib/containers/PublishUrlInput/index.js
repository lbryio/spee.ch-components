import {updateClaim, updateError, validateClaim} from '../../actions/publish';
import {connect} from 'react-redux';
import View from './view';

const mapStateToProps = ({ channel, publish }) => {
  return {
    loggedInChannelName   : channel.loggedInChannel.name,
    loggedInChannelShortId: channel.loggedInChannel.shortId,
    fileName              : publish.file.name,
    publishInChannel      : publish.publishInChannel,
    selectedChannel       : publish.selectedChannel,
    claim                 : publish.claim,
    urlError              : publish.error.url,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClaimInput: (value) => {
      dispatch(updateClaim(value));
      if (value) {
          dispatch(validateClaim(value));
      } else {
          dispatch(updateError('url', 'Choose a custom url'));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
