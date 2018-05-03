import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import * as actions from '../constants/publish_action_types';
import { updateError } from '../actions/publish';
import { checkClaimAvailability } from '../api/assetApi';

function * updateClaimAvailability ({data}) {
    let isAvailable, message;
    try {
        ({ data: isAvailable, message } = yield call(checkClaimAvailability, data));
        console.log('isAvailable:', isAvailable, 'message:', message)
    } catch (error) {
        console.log('updateClaimAvailability error');
    }
    if (!isAvailable) {
        return yield put(updateError('url', message));
    }
    yield put(updateError('url', null));
}

export function * watchUpdateClaimAvailability () {
    yield takeLatest(actions.CLAIM_AVAILABILITY, updateClaimAvailability);
}
