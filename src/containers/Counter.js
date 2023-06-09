import React, { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/action/counter.action";
const mapStateToProps = state => {
    return {
        counter: state.Counter
    }

}

const mapDispatchToProps = dispatch => ({
    dispatch
})
class Counter extends Component {
    handleIncrement = () => {

        this.props.dispatch(increment())
    }
    handleDecrement = () => {

        this.props.dispatch(decrement())
    }

    render() {
        return (
            <div>
                <h2>Counter Value is{this.props.counter.counter} </h2>
                <button type="button" onClick={() => this.handleIncrement()}>Increment</button>
                <button type="button" onClick={() => this.handleDecrement()}>Decrement</button>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);