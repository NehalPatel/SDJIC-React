import { Component } from "react";

class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
    }
    state = { count: 0 }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        return (
            <>
                <h3>Class Component Demo</h3>
                <button className="btn btn-primary" onClick={this.decrementCount}>-</button>
                &nbsp;&nbsp;<b>{this.state.count}</b>&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={this.incrementCount}>+</button>
            </>
        );
    }
}

export default ClassComponentDemo;