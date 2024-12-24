import { call, put, takeLatest } from 'redux-saga/effects';
import { resumeApi } from '../../../shared/api/resumeApi.ts';
import {
    fetchResumesRequest,
    fetchResumesSuccess,
    fetchResumesFailure,
} from './resumeSlice';

function* fetchResumesSaga() {
    try {
        const response = yield call(resumeApi.fetchResumes);
        yield put(fetchResumesSuccess(response.data));
    } catch (error: any) {
        yield put(fetchResumesFailure(error.message || 'Ошибка загрузки резюме'));
    }
}

export default function* resumeSaga() {
    yield takeLatest(fetchResumesRequest.type, fetchResumesSaga);
}