import React, { Component } from 'react';
import './App.css';
import './CleverOrc.css';
import './Nav.css';
import { connect } from 'react-redux'
import {keyPressHandler, slideItemSelectedHandler} from './action-creators'
import CleverCarousel from './components/CleverCarousel'
import CleverSlider from './components/CleverSlider'

class App extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubscribeItemSelected = this.handleSubscribeItemSelected.bind(this);
    this.handleAboutItemSelected = this.handleAboutItemSelected.bind(this);
  }

  handleKeyPress(e) {
    this.props.keyPressHandler(e);
  }

  handleSubscribeItemSelected(e) {
    this.props.slideItemSelectedHandler(e, 1);
  }

  handleAboutItemSelected(e) {
    this.props.slideItemSelectedHandler(e, 2);
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
        <li className=""><a href="http://monsters.cleverorc.com">Pathfinder Monster Finder</a></li>
        <li className=""><a href="http://www.monsteradvancer.com">Monster Advancer Tools</a></li>
        <li className=""><a href="#" onClick={this.handleSubscribeItemSelected}>Subscribe</a></li>
        <li className=""><a href="#" onClick={this.handleAboutItemSelected}>About</a></li>
      </ul>
    );
    const fullSizedNavBar = <nav className="nav navcenter lg-only">{menuItems}</nav>;
    const condensedNavBar = <nav className="nav navcenter sm-only">{menuItems}</nav>;
    const headerContent = (
      <div className="headerContent">
        {condensedNavBar}
        <div className="mainTitle">Clever Orc</div>
        <div className="secondaryTitle">RPG Tools for Everyone</div>
        {fullSizedNavBar}
      </div>
    );
    const footerContent = <div className="footerContent">&copy; Copyright 2018 Clever Orc Games.</div>;
    const mainContent = (
      <div className="mainContentBackground">
        <div className="mainContent centered">
          <CleverSlider {...this.props}></CleverSlider>
        </div>
      </div>
    );




    return (
      <main>
        <header>
          <div className="left"></div>
          <div className="right"></div>
          <div className="center">
              {headerContent}
          </div>
        </header>
        <section className="mainContentContainer">
          {mainContent}
        </section>
        <footer className="footer">
          <div className="left"></div>
          <div className="right"></div>
          <div className="center">
              {footerContent}
          </div>
        </footer>​
      </main>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {keyPressHandler, slideItemSelectedHandler})(App)
