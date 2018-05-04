import { connect } from 'react-redux';
import View from './view';
import {
  updateChannelAvailability,
  updateChannelCreateName,
  updateChannelCreatePassword,
  createChannel
} from '../../actions/channelCreate';

const mapStateToProps = ({channelCreate: {name, password, error, status }}) => {
  return {
    name,
    password,
    error,
    status,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onNameInput: (value) => {
      if (!value) {
        return dispatch(updateChannelCreateName('error', 'Please enter a channel name'))
      }
      dispatch(updateChannelCreateName('value', value));
      dispatch(updateChannelAvailability(value));
    },
    onPasswordInput: (value) => {
      if (!value){
        return dispatch(updateChannelCreatePassword('error', 'Please enter a password'))
      }
      dispatch(updateChannelCreatePassword('value', value));
      dispatch(updateChannelCreatePassword('error', null));
    },
    onSubmit: () => {
      dispatch(createChannel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
