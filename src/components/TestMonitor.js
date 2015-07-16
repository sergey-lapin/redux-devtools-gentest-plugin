import React, { Component, PropTypes } from 'react';
import { Begin, End } from './jsHelpers';
import { Describe } from './testComponents';
import ReactZeroClipboard  from 'react-zeroclipboard';
import PureComponent from 'react-pure-render/component';
import R from 'ramda';

export default class TestMonitor extends PureComponent {
    constructor(){
        super();
        this.state = {
            describeText : ''
        }
    }
    onDescribeNewText(text){
        this.setState({describeText:text})
    }
    render() {
        const { stagedActions, computedStates }= this.props;

        const countOfActionsAndStores = R.range(0, stagedActions.length);

        const items = R.map((index)=> {
                if (index === 0) {
                    return {
                        action: {
                            type: '@@INIT'
                        },
                        curState: {},
                        nextState: computedStates[index]
                    }
                }

                return {
                    action: stagedActions[index - 1],
                    curState: computedStates[index - 1],
                    nextState: computedStates[index]
                }
            },
            countOfActionsAndStores);

        return (
            <div>
                <Describe onNewText={this.onDescribeNewText.bind(this)} items={items}/>
                <br/>
                <div>
                    <p>Click the button to copy some text</p>
                    <ReactZeroClipboard text={this.state.describeText}>
                        <button style={{ textDecoration: 'underline', cursor: 'hand' }}>Copy to Buffer</button>
                    </ReactZeroClipboard>
                </div>
            </div>
        );
    }
}