import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Router from './Router';

const App = hot(module)(() => <Router />);

ReactDOM.render(<App />, document.getElementById('root'));
