import React from 'react';
import ReactDom from 'react-dom';

import Counter from './components/counter';


const element = <h1>Hello world!<Counter /></h1>;

ReactDom.render(element, document.getElementById('root'));