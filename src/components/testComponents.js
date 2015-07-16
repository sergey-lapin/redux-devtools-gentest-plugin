import React, { Component, PropTypes } from 'react';
import { Begin, End } from './jsHelpers';
import R from 'ramda';
import $ from 'jquery';

export class Expect extends Component {
    render() {
        var stateNextId = <span>{JSON.stringify(this.props.nextState)}</span>;
        var stateId = <span>{JSON.stringify(this.props.curState)}</span>;
        var action = <span>{JSON.stringify(this.props.action)}</span>;
        return (
            <span>
                    const curState = {stateId};
                    <br/>
                    const action = {action};
                    <br/>
                    const computedState = {stateNextId};
                    <br/>
                    expect(reducer(curState, action)).to.deep.equal(computedState);
                <br/>
            </span>
        );
    }
}

export class It extends Component {
    render() {
        var computedStateNextId = <span>check computedState_{this.props.id} evaluation</span>;
        return (
            <span>

                    it('{computedStateNextId}', () =><Begin/>
                <br/>
                <Expect {...this.props}/>
                <End/>);
            </span>
        );
    }
}

export class Describe extends Component {
    getText(cb) {
        var str = $(React.findDOMNode(this)).html();
        var regex = /<br .*?>/g;
        const res = $($.parseHTML(str.replace(regex, '\n'))).text();
        cb(res)
    }

    render() {
        const its = R.map((item)=> <span><It {...item}/><br/><br/></span>)(this.props.items);
        return (
            <span class="generated_tests_code">
                         describe('handleActions', () => <Begin/>
                     <br/>
                    <br/>
                {its}
                <br/>
                    <End/>);
                <br/>
            </span>
        );
    }
}