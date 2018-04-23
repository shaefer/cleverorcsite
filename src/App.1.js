import React, { Component } from 'react';
import './App.css';
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
      <nav class="nav center lg-only">
        {menuItems}
      </nav>
    );
    const condensedNavBar = (
      <div class="flex-grid co_header fixed sm-only">
        <div class="col center nopadding">
          <nav class="nav center">
            {menuItems}
          </nav>
        </div>
      </div>
    );

    const slides = [
      <div>Main Content 1</div>,
      <div>Slide 2</div>,
      <div>Yet another slide</div>
    ];
    return (
      <main>
      <header class="flex-grid co_header fixed">
        <div class="sidebar leftside"></div>
        <div class="col center nopadding">
          <div class="mainTitle">Clever Orc</div>
          <div class="secondaryTitle">RPG Tools for Everyone</div>
          {fullSizedNavBar}
        </div>
        <div class="sidebar rightside"></div>
      </header>

     {condensedNavBar}
      
      <div class="flex-grid co_content">
        <div class="col leftside">Left Col</div>
        <div class="col maincontent nopadding">
          <CleverCarousel></CleverCarousel>
        </div>
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
