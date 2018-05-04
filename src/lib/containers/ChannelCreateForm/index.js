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
        dispatch(updateChannelCreateName('error', 'Please enter a channel name'))
      } else {
        dispatch(updateChannelAvailability(value));
      }
      dispatch(updateChannelCreateName('value', value));
    },
    onPasswordInput: (value) => {
      if (!value){
        dispatch(updateChannelCreatePassword('error', 'Please enter a password'))
      } else {
        dispatch(updateChannelCreatePassword('error', null));
      }
      dispatch(updateChannelCreatePassword('value', value));
    },
    onSubmit: () => {
      dispatch(createChannel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
