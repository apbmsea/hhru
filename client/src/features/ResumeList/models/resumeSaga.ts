import { call, put, takeLatest } from 'redux-saga/effects';
import { resumeApi } from '../../../shared/api/resumeApi.ts'
import {
    fetchResumesStart,
    fetchResumesSuccess,
    fetchResumesFailure,
} from './resumeSlice.ts';

function* fetchResumesSaga(): Generator {
    try {
        const resumes = yield call(resumeApi.fetchResumes);
        yield put(fetchResumesSuccess(resumes));
    } catch (error: any) {
        yield put(fetchResumesFailure(error.message));
    }
}

export function* watchResumeRequests() {
    yield takeLatest(fetchResumesStart.type, fetchResumesSaga);
}
