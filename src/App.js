import React, { Component } from 'react';
import './App.css';
import './CleverOrc.css';
import './Nav.css';
import { connect } from 'react-redux'
import {keyPressHandler} from './action-creators'
import CleverCarousel from './components/CleverCarousel'

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

//http://linxtion.com/demo/react-image-gallery/ Just geared toward images
//https://github.com/Pau1fitz/react-slidez errors on basic setup. No community.
//https://www.npmjs.com/package/react-touch-carousel


//Layout
//https://stackoverflow.com/questions/12489909/how-to-have-a-3-column-layout-with-fixed-left-right-fluid-middle-and-fixed-foot

  render() {
    const { config, layout } = this.props;
    console.log(config.initialState);
    console.log(layout.initialLayout);
    const menuItems = (
      <ul>
        <li class=""><a href="http://monsters.cleverorc.com">Pathfinder Monster Finder</a></li>
        <li class=""><a href="http://www.monsteradvancer.com">Monster Advancer Tools</a></li>
        <li class=""><a href="#">Contact</a></li>
        <li class=""><a href="#">About</a></li>
      </ul>
    );
    const fullSizedNavBar = (
      <nav class="nav navcenter lg-only">
        {menuItems}
      </nav>
    );
    const condensedNavBar = (
      <nav class="nav navcenter sm-only">
        {menuItems}
      </nav>
    );
    const headerContent = (
      <div class="headerContent">
        {condensedNavBar}
        <div class="mainTitle">Clever Orc</div>
        <div class="secondaryTitle">RPG Tools for Everyone</div>
        {fullSizedNavBar}
      </div>
    );
    const footerContent = (
      <div class="footerContent">&copy; Copyright 2018 Clever Orc Games.</div>
    );
    const mainContent = (
      <div class="mainContentBackground">
        <div class="mainContent centered">
          <CleverCarousel></CleverCarousel>
        </div>
      </div>
    );




    return (
      <main>
        <header>
          <div class="left"></div>
          <div class="right"></div>
          <div class="center">
              {headerContent}
          </div>
        </header>
        <section class="mainContentContainer">
          {mainContent}
        </section>
        <footer class="footer">
          <div class="left"></div>
          <div class="right"></div>
          <div class="center">
              {footerContent}
          </div>
        </footer>​
      </main>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {keyPressHandler})(App)
