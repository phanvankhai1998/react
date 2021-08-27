import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {

    // add a new property and call the counters
    state = {
        counters: [
            { id: 1, value: 3 },
            { id: 2, value: 0 },
            { id: 5, value: 0 },
            { id: 6, value: 0 },
        ]
    }

    render() {
        return (
            <div>
                {
                    this.state.counters.map(
                        counters => <Counter
                            key={counters.id}
                            value={counters.value}
                            CounId={counters.id}
                        >
                            <h3>Title</h3>
                        </Counter>
                    )
                }
            </div>
        );
    }
}


export default counters;