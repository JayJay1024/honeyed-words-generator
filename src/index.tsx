import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './Global.style';

function component() {
    const element = document.createElement('div');
    element.id = 'root';
    return element;
}

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.body.appendChild(component())
);
