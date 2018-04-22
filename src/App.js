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

//http://linxtion.com/demo/react-image-gallery/
//https://github.com/Pau1fitz/react-slidez

  render() {
    const { config, layout } = this.props;
    console.log(config.initialState);
    console.log(layout.initialLayout);
    return (
      <main>
      <header class="flex-grid co_header fixed">
        <div class="sidebar leftside"></div>
        <div class="col center">
          <div class="mainTitle">Clever Orc</div>
          <div class="secondaryTitle">RPG Tools for Everyone</div>
        </div>
        <div class="sidebar rightside"></div>
      </header>

      <div class="flex-grid co_content">
        <div class="col leftside">Left Col</div>
        <div class="col maincontent">Main Content</div>
        <div class="col rightside">Right Col</div>
      </div>

      <footer class="flex-grid co_footer fixed">
        <div class="sidebar leftside"></div>
        <div class="col center">&copy; Copyright 2018 Clever Orc Games.</div>
        <div class="sidebar rightside"></div>
      </footer>
      </main>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {keyPressHandler})(App)
