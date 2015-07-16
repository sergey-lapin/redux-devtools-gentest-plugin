import chai from "chai";
import reducer from "../reducerForTests";
const expect = chai.expect;
describe('handleActions', () => {

    it('check computedState_0 evaluation', () =>{
        const curState = {};
        const action = {"type":"@@INIT"};
        const nextState = {"todos":[{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_1 evaluation', () =>{
        const curState = {"todos":[{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"1"};
        const nextState = {"todos":[{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_2 evaluation', () =>{
        const curState = {"todos":[{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"2"};
        const nextState = {"todos":[{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_3 evaluation', () =>{
        const curState = {"todos":[{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"3"};
        const nextState = {"todos":[{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_4 evaluation', () =>{
        const curState = {"todos":[{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"4"};
        const nextState = {"todos":[{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_5 evaluation', () =>{
        const curState = {"todos":[{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"5"};
        const nextState = {"todos":[{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_6 evaluation', () =>{
        const curState = {"todos":[{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"6"};
        const nextState = {"todos":[{"id":6,"marked":false,"text":"6"},{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_7 evaluation', () =>{
        const curState = {"todos":[{"id":6,"marked":false,"text":"6"},{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"7"};
        const nextState = {"todos":[{"id":7,"marked":false,"text":"7"},{"id":6,"marked":false,"text":"6"},{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_8 evaluation', () =>{
        const curState = {"todos":[{"id":7,"marked":false,"text":"7"},{"id":6,"marked":false,"text":"6"},{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"ADD_TODO","text":"8"};
        const nextState = {"todos":[{"id":8,"marked":false,"text":"8"},{"id":7,"marked":false,"text":"7"},{"id":6,"marked":false,"text":"6"},{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_9 evaluation', () =>{
        const curState = {"todos":[{"id":8,"marked":false,"text":"8"},{"id":7,"marked":false,"text":"7"},{"id":6,"marked":false,"text":"6"},{"id":5,"marked":false,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"MARK_TODO","id":5};
        const nextState = {"todos":[{"id":8,"marked":false,"text":"8"},{"id":7,"marked":false,"text":"7"},{"id":6,"marked":false,"text":"6"},{"id":5,"marked":true,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_10 evaluation', () =>{
        const curState = {"todos":[{"id":8,"marked":false,"text":"8"},{"id":7,"marked":false,"text":"7"},{"id":6,"marked":false,"text":"6"},{"id":5,"marked":true,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"MARK_TODO","id":6};
        const nextState = {"todos":[{"id":8,"marked":false,"text":"8"},{"id":7,"marked":false,"text":"7"},{"id":6,"marked":true,"text":"6"},{"id":5,"marked":true,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });

    it('check computedState_11 evaluation', () =>{
        const curState = {"todos":[{"id":8,"marked":false,"text":"8"},{"id":7,"marked":false,"text":"7"},{"id":6,"marked":true,"text":"6"},{"id":5,"marked":true,"text":"5"},{"id":4,"marked":false,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const action = {"type":"MARK_TODO","id":4};
        const nextState = {"todos":[{"id":8,"marked":false,"text":"8"},{"id":7,"marked":false,"text":"7"},{"id":6,"marked":true,"text":"6"},{"id":5,"marked":true,"text":"5"},{"id":4,"marked":true,"text":"4"},{"id":3,"marked":false,"text":"3"},{"id":2,"marked":false,"text":"2"},{"id":1,"marked":false,"text":"1"},{"text":"Use Redux","marked":false,"id":0}]};
        const computedNextState = reducer(curState, action);
        expect(computedNextState).to.deep.equal(nextState);
    });


});
