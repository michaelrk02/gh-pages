import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import './styles/App.css';

window.addEventListener('load', function() {
    ReactDOM.render(<App />, document.getElementById('app'));
});

