import { all } from 'redux-saga/effects';
import resumeSaga from '../../features/ResumeList/model/resumeSaga';

export default function* rootSaga() {
    yield all([
        resumeSaga(),
    ]);
}
