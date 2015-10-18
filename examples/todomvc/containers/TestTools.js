import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import { TestMonitor } from 'redux-devtools-gentest-plugin/lib';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='J'
               changePositionKey='W'>
    <TestMonitor />
  </DockMonitor>
);
