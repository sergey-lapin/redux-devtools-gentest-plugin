redux-devtools-gentest-plugin
=========================
[![npm version](https://badge.fury.io/js/redux-devtools-gentest-plugin.svg)](http://badge.fury.io/js/redux-devtools-gentest-plugin)

<img src='http://dl1.joxi.net/drive/0010/3977/692105/150716/d25467a266.png' width='700'>

### [DEMO](http://lapanoid.github.io/redux-devtools-gentest-plugin)

### Installation
```
npm i redux-devtools-gentest-plugin --save-dev
```
### Usage

To use it with redux-devtools in your project you only need to add  
```
  import {TestMonitor} from 'redux-devtools-gentest-plugin';
  ...
   <DebugPanel top left bottom>
        <DevTools store={store}
                    monitor={TestMonitor}/>
    </DebugPanel>
```
(look at */todomvc/containers/App.js file)

to export tests click **Copy To Buffer** button in the end of left panel.

generated tests are a little bit specific for now they look for reducers in upper directory
```
import * as reducers from '../reducers';
```

### Running Examples

You can do this:

```
git clone https://github.com/lapanoid/redux-devtools-gentest-plugin.git
cd redux-devtools
npm install

cd examples/counter
OR
cd examples/todomvc
npm install
npm start
open http://localhost:3000
```

check out exported tests here 
```
todomvc/tests/generatedTests.js
```

you can run it with

```
mocha --compilers js:babel/register generatedTests.js
```

### License

MIT
