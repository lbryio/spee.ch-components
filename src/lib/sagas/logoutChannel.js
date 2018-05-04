import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { CHANNEL_LOGIN_CHECK } from '../constants/channel_action_types';
import { checkForLoggedInChannelApi } from '../api/authApi.js';
import { updateSelectedChannel } from '../actions/publish';
import { updateLoggedInChannel } from '../actions/channel';

function * logoutChannelSaga () {
    let user;
    try {
      user = yield call(checkForLoggedInChannelApi);
    } catch (error) {
      console.log(error);
    }
    if (user) {
      const { channelName, shortChannelId, channelClaimId} = user;
      yield put(updateSelectedChannel(channelName));
      yield put (updateLoggedInChannel(channelName, shortChannelId, channelClaimId));
    }
}

export function * watchChannelLoginCheck () {
  yield takeLatest(CHANNEL_LOGIN_CHECK, logoutChannelSaga);
}
