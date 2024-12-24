import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga.ts';
import resumeReducer from '../../features/ResumeList/model/resumeSlice.ts';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        resume: resumeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
