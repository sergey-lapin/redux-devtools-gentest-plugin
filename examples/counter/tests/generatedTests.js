import chai from "chai";
import { combineReducers } from 'redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const expect = chai.expect;

describe('handleActions', () => {

    it('check computedState_@@INIT_0 evaluation', () =>{
        const curState = {};
        const action = {"type":"@@INIT"};
        const nextState = {"counter":0};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_DECREMENT_COUNTER_1 evaluation', () =>{
        const curState = {"counter":0};
        const action = {"type":"DECREMENT_COUNTER"};
        const nextState = {"counter":-1};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_DECREMENT_COUNTER_2 evaluation', () =>{
        const curState = {"counter":-1};
        const action = {"type":"DECREMENT_COUNTER"};
        const nextState = {"counter":-2};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_DECREMENT_COUNTER_3 evaluation', () =>{
        const curState = {"counter":-2};
        const action = {"type":"DECREMENT_COUNTER"};
        const nextState = {"counter":-3};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_4 evaluation', () =>{
        const curState = {"counter":-3};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":-2};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_5 evaluation', () =>{
        const curState = {"counter":-2};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":-1};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_6 evaluation', () =>{
        const curState = {"counter":-1};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":0};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_7 evaluation', () =>{
        const curState = {"counter":0};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":1};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_8 evaluation', () =>{
        const curState = {"counter":1};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":2};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_9 evaluation', () =>{
        const curState = {"counter":2};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":3};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_DECREMENT_COUNTER_10 evaluation', () =>{
        const curState = {"counter":3};
        const action = {"type":"DECREMENT_COUNTER"};
        const nextState = {"counter":2};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_DECREMENT_COUNTER_11 evaluation', () =>{
        const curState = {"counter":2};
        const action = {"type":"DECREMENT_COUNTER"};
        const nextState = {"counter":1};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_DECREMENT_COUNTER_12 evaluation', () =>{
        const curState = {"counter":1};
        const action = {"type":"DECREMENT_COUNTER"};
        const nextState = {"counter":0};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_DECREMENT_COUNTER_13 evaluation', () =>{
        const curState = {"counter":0};
        const action = {"type":"DECREMENT_COUNTER"};
        const nextState = {"counter":-1};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_14 evaluation', () =>{
        const curState = {"counter":-1};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":0};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_15 evaluation', () =>{
        const curState = {"counter":0};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":1};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_16 evaluation', () =>{
        const curState = {"counter":1};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":2};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_17 evaluation', () =>{
        const curState = {"counter":2};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":3};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_INCREMENT_COUNTER_18 evaluation', () =>{
        const curState = {"counter":3};
        const action = {"type":"INCREMENT_COUNTER"};
        const nextState = {"counter":4};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });


});
