import React, { Component } from 'react';

class C extends Component {

    handelIncrement = () => {
        console.log('Increment 3 clicked! NO bind this', this);
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('props', this.props);
        return (
            <React.Fragment>
                {this.props.children} @ {this.props.CounId}<br />

                <button onClick={this.handelIncrement} className="btn btn-primary">Increment</button>
                <button onClick={this.props.OnDelete} className="btn btn-danger btn-sm m-2">Delete</button>
                <button onClick={() => this.props.OnDelete(this.props.CounId)} className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
        )
    }
}
export default C;
