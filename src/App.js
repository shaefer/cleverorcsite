import React, { Component } from 'react';
import { connect } from 'react-redux'
import {keyPressHandler} from './action-creators'

import './CleverOrcNew.css';

import {monsterFinderContent, monsterSearchContent, dmScreenContent, monsterAdvancerContent, mailChimpForm, aboutContent, footerContent, artistCredits} from './components/Content';
import {orcKingUrl, phoenixUrl} from './components/MonsterImages'
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
    const mainContent = (
      <div className="mainContentBackground">
        <div className="mainContent centered">
          <section>
          <a href="https://www.patreon.com/bePatron?c=1882197" data-patreon-widget-type="become-patron-button"><img src="/images/become_a_patron_button.png"/></a>
          </section>
          <section className="cleverorcrow cleverorcfirstrow">
            <p className="cleverorccolumn cleverorctext toolList">
            <div className="cleverorcfloat"><img src={orcKingUrl}/></div>
              <h4 className="toolListHeader">Tools for The Pathfinder Roleplaying Game and 3.5</h4>
              <ul>
                <li><img src="/images/external_link_icon.png" className="icon16"/><a href="https://monsters.cleverorc.com">Monster Finder</a>
                  <ul>
                    <li>Find monsters by name and view full statblocks.</li>
                  </ul>
                </li>
                <li><img src="/images/external_link_icon.png" className="icon16"/><a href="https://monsters.cleverorc.com/search">Monster Search</a>
                  <ul>
                    <li>Search for all monsters that have a given CR, Ability Score, or Environment</li>
                  </ul>
                </li>
                <li><img src="/images/external_link_icon.png" className="icon16"/><a href="https://monsters.cleverorc.com/dmscreen">DM Screen</a>
                  <ul>
                    <li>Build a bunch of buttons to generate all the things!</li>
                      <ul>
                        <li>Roll dice and stats</li>
                        <li>Generate Groups of Monsters by CR or CR Range (with button to get stat blocks)</li>
                        <li>Roll on over 15 different Random Charts (straight from DMG)</li>
                        <li>Generate Tavern Names</li>
                      </ul>
                  </ul>
                </li>
                <li><img src="/images/external_link_icon.png" className="icon16"/><a href="https://monsters.cleverorc.com/dungeongraph/8">Dungeon Graph</a>
                  <ul>
                    <li>Generate a random dungeon layout of up to 50 rooms and types.</li>
                  </ul>
                </li>
                <li><img src="/images/external_link_icon.png" className="icon16"/><a href="https://monsters.cleverorc.com/monsteradvancer">Monster Advancer v2 (3.5)</a>
                  <ul>
                    <li>Customize 3.5 monsters. Adjust templates, classes, stats, hit dice, and size.</li>
                  </ul>
                </li>
                <li><img src="/images/external_link_icon.png" className="icon16"/><a href="http://www.monsteradvancer.com">Monster Advancer</a>
                  <ul>
                    <li>Older tools -> monster advancement, encounter and treasure generation (Some 3.5, some Pathfinder)</li>
                  </ul>
                </li>
              </ul>
            </p>
          </section>
          <section className="cleverorcrow joinrow">
            <div className="cleverorccolumn phoenixImg cleverorcimage"><img src={phoenixUrl}/></div>
            <div className="cleverorccolumn cleverorctext">
              <h4>Join our community</h4>
              {mailChimpForm}
            </div>
          </section>
          <section className="cleverorcrow">
            <div className="cleverorccolumn cleverorctext creditSection">
              {artistCredits}
            </div>
          </section>
        </div>
      </div>
    );

    return (
      <main className="cleverorc">
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
