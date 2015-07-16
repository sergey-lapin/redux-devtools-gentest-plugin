redux-devtools-gentest-plugin
=========================

<img src='http://dl1.joxi.net/drive/0010/3977/692105/150716/d25467a266.png' width='700'>

### Installation

npm i redux-devtools-gentest-plugin --save-dev

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

to export tests click **Copy To Buffer** button in the end of left panel.

check out todomvc/tests/generatedTests.js

this is exported tests

you can run it with

```
mocha --compilers js:babel/register generatedTests.js
```

### License

MIT
