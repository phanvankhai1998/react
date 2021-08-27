import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 30
    }

    state = {
        // count: 0,
        count: this.props.value,
        // imgUrl: 'https://picsum.photos/258',
        tags: []
    };

    change() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }

    GetClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    // RenderTags() {
    //     if (this.state.tags.length === 0)
    //         return <p>they are no tags</p>;
    //     return <ul>
    //         {
    //             this.state.tags.map(
    //                 tag => <li key={tag}>{tag}</li>
    //             )
    //         }
    //     </ul>
    // }

    // constructor() {
    //     super();
    //     this.handelIncrement = this.handelIncrement.bind(this)
    //     //console.log("Constructor", this)
    // }

    // handelIncrement() {
    //     console.log('Increment clicked!', this);
    // }

    // handelIncrement2(arg) {
    //     console.log('Increment 2 clicked!', arg);
    // }

    handelIncrement3 = () => {
        console.log('Increment 3 clicked! NO bind this', this);
        //this.state.count++;     // ERROR => Do not mutate state directly. Use setState().
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        console.log('props', this.props);

        return (
            <React.Fragment>
                <div>
                    <h3>Counter Component</h3>
                    {this.props.children} @ {this.props.CounId}
                    {/* <img src="{this.state.imgUrl}" alt="" /><br />
                <span style={this.styles} className={this.GetClass()}> 1 {this.state.count} </span><br /> */}
                    <span> 2 {this.change()} </span><br />
                    {/* <button onClick={this.handelIncrement} >Increment 1</button>
                <button onClick={() => { this.handelIncrement2({ id: 1 }) }} >Increment 2</button> */}
                    <button onClick={this.handelIncrement3} className="btn btn-primary">Increment 3</button>

                    <h4>Reader list</h4>

                    {
                        this.state.tags.length === 0 ?
                            <p>thay are no tags</p> :
                            <ul>
                                {
                                    this.state.tags.map(
                                        tag => <li key={tag}>{tag}</li>
                                    )
                                }
                            </ul>
                    }

                </div>
            </React.Fragment>
        )
    }
}

export default Counter;