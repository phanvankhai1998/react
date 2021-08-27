import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/258'
    };

    change() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }

    render() {
        return (
            <React.Fragment>
                <h3>Counter Component</h3>
                <img src="{this.state.imgUrl}" alt="" /><br />
                <span className="badge badge-primary m-2"> 1 {this.state.count} </span><br />
                <span> 2 {this.change()} </span><br />
                <button>Increment</button>
            </React.Fragment>
        )
    }
}

export default Counter;