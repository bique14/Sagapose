import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { buttonActions } from './state/button/actions'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      count,
    } = this.props
    return (
      <div className="App">
        <button onClick={onIncrement}>increase</button>
        <button onClick={onDecrement}>decrease</button>
        <h1>{count}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.button.count
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      dispatch(buttonActions.increaseValue())
    },
    onDecrement: () => {
      dispatch(buttonActions.decreaseValue())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
