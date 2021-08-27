import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    change() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Counter Component</h1>
                    <span> 1 {this.state.count} </span><br />
                    <span> 2 {this.change()} </span><br />
                    <button>Increment</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Counter;