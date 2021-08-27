import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 30
    }

    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/258'
    };

    change() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }

    GetClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    render() {
        return (
            <React.Fragment>
                <h3>Counter Component</h3>
                <img src="{this.state.imgUrl}" alt="" /><br />
                <span style={this.styles} className={this.GetClass()}> 1 {this.state.count} </span><br />
                <span> 2 {this.change()} </span><br />
                <button>Increment</button>
            </React.Fragment>
        )
    }
}

export default Counter;