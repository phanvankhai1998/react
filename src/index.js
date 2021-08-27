import React from 'react';
import ReactDom from 'react-dom';

import Counter from './components/counter';


const element = <h1>Hello world!</h1>;

ReactDom.render(<Counter />, document.getElementById('root'));