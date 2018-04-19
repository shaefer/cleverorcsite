import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {keyPressHandler} from './action-creators'

class App extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.props.keyPressHandler(e);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { config, layout } = this.props;
    console.log(config.initialState);
    console.log(layout.initialLayout);
    return (
      <div className="flex-container">
        <div className="flex-item">
          One Area
        </div>
        <div className="flex-item">
          Two Area
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {keyPressHandler})(App)
