import React, { Component } from 'react';
import Cs from './components/Cs';
import Nav from './components/nav';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <Cs />
            </React.Fragment>
        );
    }
}

export default App;