import React, { Component } from 'react';
import {Content, TestMonitor} from '../../../src';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import CounterApp from './CounterApp';
import * as reducers from '../reducers';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
    render() {
        return (
            <div>
                <Content>
                    <Provider store={store}>
                        {() => <CounterApp />}
                    </Provider>
                </Content>
                <DebugPanel top right bottom>
                    <DevTools store={store}
                              monitor={LogMonitor}/>
                </DebugPanel>
                <DebugPanel top left bottom>
                    <DevTools store={store}
                              monitor={TestMonitor}/>
                </DebugPanel>
            </div>
        );
    }
}
