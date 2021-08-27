import React, { Component } from 'react';
import C from './C';

class Cs extends Component {

    // add a new property and call the counters
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 6, value: 0 },
        ]
    };

    handleDelete = (Id) => {
        console.log('Delete', Id);
        const NewCounters = this.state.counters.filter(c => c.id !== Id);
        this.setState({ counters: NewCounters })
    }

    render() {
        return (
            <div>
                {
                    this.state.counters.map(counters =>
                        <C key={counters.id}
                            OnDelete={this.handleDelete}
                            value={counters.value}
                            CounId={counters.id}
                        >
                            <h3>This is Component Cs </h3>
                        </C>
                    )
                }
            </div>
        );
    }

}

export default Cs;