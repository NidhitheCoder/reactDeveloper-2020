import {takeLatest,delay,put } from 'redux-saga/effects';

export function* onIncreament(){
    yield console.log("I am incremented");
    yield delay(3000);
    yield put({type:'INCREMENT_FROM_SAGA'})
}

export function* increamentSaga() {
    // const incrementPayload = yield take('INCREMENT')
    //  if you need to pass anything to second argument then you can use like this

    yield takeLatest('INCREMENT',onIncreament);
}