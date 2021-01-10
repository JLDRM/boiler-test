import { call, put, takeEvery } from 'redux-saga/effects';

import { getSongsBySearchTerm } from '../../services/itunesApi.service';
import { ItuneSearchResponse } from '../../models/itunesApi.models';

// TODO: find how to handle action types 
function* fetchSongsData(action: { type: 'songs/requested', payload: string; }) {
  try {
    const { data }: { data: ItuneSearchResponse; } = yield call(getSongsBySearchTerm, action.payload);
    yield put({ type: "songs/succeed", payload: data });
  } catch (error) {
    yield put({ type: "songs/failed", payload: error });
  }
}


export function* songsRequested() {
  yield takeEvery('songs/requested', fetchSongsData);
}