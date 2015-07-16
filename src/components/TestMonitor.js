import React, { Component, PropTypes } from 'react';
import { Begin, End } from './jsHelpers';
import { Describe } from './testComponents';
import R from 'ramda';

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

export default class TestMonitor extends Component {
    onClick() {
        this.refs.describe.getText(copyToClipboard);
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
                <Describe ref="describe" items={items}/>
                <br/>
                <span onClick={this.onClick.bind(this)}
                      style={{ textDecoration: 'underline', cursor: 'hand' }}>
                    Copy to Buffer
                </span>
            </div>
        );
    }
}