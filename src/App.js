import React, { Component } from 'react';
import { connect } from 'react-redux'
import {keyPressHandler} from './action-creators'

import './CleverOrcNew.css';

import {monsterFinderContent, monsterSearchContent, dmScreenContent, monsterAdvancerContent, mailChimpForm, aboutContent} from './components/Content';
import {orcKingUrl} from './components/MonsterImages'
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
    console.log("Subscribe pressed")
    this.refs.cleverSlider.setSlide(2);
  }

  handleAboutItemSelected(e) {
    this.refs.cleverSlider.setSlide(3);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { config, layout } = this.props; //reducers
    const menuItems = (
      <ul>
        <li className=""><a href="http://monsters.cleverorc.com" target="_blank">Pathfinder Monster Finder</a></li>
        <li className=""><a href="http://monsters.cleverorc.com/search" target="_blank">Pathfinder Monster Search</a></li>
        <li className=""><a href="http://monsters.cleverorc.com/dmscreen" target="_blank">DM Screen</a></li>
        <li className=""><a href="http://www.monsteradvancer.com" target="_blank">Monster Advancer Tools</a></li>
        <li className=""><a href="#" onClick={this.handleSubscribeItemSelected}>Subscribe</a></li>
        <li className=""><a href="#" onClick={this.handleAboutItemSelected}>About/Privacy</a></li>
      </ul>
    );
    const fullSizedNavBar = <nav className="nav navcenter lg-only">{menuItems}</nav>;
    const condensedNavBar = <nav className="nav navcenter sm-only">{menuItems}</nav>;

    const headerContent = (
      <div className="headerContent">
        <div className="mainTitle">Clever Orc</div>
        <div className="secondaryTitle">RPG Tools for Everyone</div>
      </div>
    );
    const footerContent = <div className="footerContent">&copy; Copyright 2018 Clever Orc Games.</div>;
    const mainContent = (
      <div className="mainContentBackground">
        <div className="mainContent centered">
          <section className="cleverorcrow">
            <div className="cleverorccolumn cleverorctext">
              <h4>Pathfinder Monster Tools</h4>
              <ul>
                <li>Monster Finder</li>
                <li>Monster Search</li>
                <li>Monster Advancer</li>
                <li>DM Screen
                  <ul>
                    <li>Roll dice</li>
                    <li>Roll stats</li>
                    <li>Generate Random Monsters by CR</li>
                    <li>Random Charts</li>
                  </ul>
                </li>
              </ul>
              
            </div>
            <div className="cleverorccolumn orcKingImg"><img src={orcKingUrl}/></div>
          </section>
        </div>
      </div>
    );

    return (
      <main>
        <header className="cleverorc">
          <div className="center">
              {headerContent}
          </div>
        </header>
        <section className="mainContentContainer">
          {mainContent}
        </section>
        <footer className="cleverorc">
          <div className="center">
              {footerContent}
          </div>
        </footer>​
      </main>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {keyPressHandler})(App)
