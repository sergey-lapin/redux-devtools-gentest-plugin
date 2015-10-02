import React, { Component, PropTypes } from 'react';
import { Begin, End } from './jsHelpers';
import { Describe } from './testComponents';
import ReactZeroClipboard  from 'react-zeroclipboard';
import PureComponent from 'react-pure-render/component';
import R from 'ramda';

export default class TestMonitor extends PureComponent {
  constructor() {
    super();
    this.state = {
      describeText: ''
    }
  }

  onDescribeNewText(text) {
    this.setState({describeText: text})
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
            nextState: computedStates[0].state,
            index: index
          }
        }

        return {
          index: index,
          action: stagedActions[index],
          curState: computedStates[index - 1].state,
          nextState: computedStates[index].state
        }
      },
      countOfActionsAndStores);

    return (
      <div style={{
    position: 'relative',
    overflowY: 'hidden',
    width: '100%',
    height: '100%',
    minWidth: 300,
    backgroundColor: '#2A2F3A'}}>
        <div style={{position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    overflowX: 'hidden',
    overflowY: 'auto'}}>
          <Describe onNewText={this.onDescribeNewText.bind(this)} items={items}/>
          <br/>

          <div>
            <p>Click the button to copy some text</p>
            <ReactZeroClipboard text={this.state.describeText}>
              <button style={{ textDecoration: 'underline', cursor: 'hand' }}>Copy to Buffer</button>
            </ReactZeroClipboard>
          </div>
        </div>
      </div>
    );
  }
}