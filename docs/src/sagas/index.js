import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import actions from '../actions';
import lipsum from 'lorem-ipsum';

function* simulateStories() {
  for (let i = 0; i < 10; i++) {
    yield delay(500 + (Math.random() * 1000));
    yield put(actions.addStory({
      id: `${Math.random()}`.substring(2),
      text: lipsum({ count: 3 }),
      likes: Math.floor(Math.random() * 10),
    }));
  }
}

export default function*() {
  yield* simulateStories();
  yield takeEvery('REFRESH', simulateStories);
}
