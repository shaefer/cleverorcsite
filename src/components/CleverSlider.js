import React, {Component} from 'react'
//import Slider from 'react-animated-slider';
import Slider from './AnimatedSlider' //overridden version of react-animated-slider...depends on react-animated-slider being installed.

import 'react-animated-slider/build/horizontal.css';
import './CleverSlider.css';
import {monsterFinderContent, monsterSearchContent, dmScreenContent, monsterAdvancerContent, mailChimpForm, aboutContent} from './Content';

const GreenSlide = (title, content) => {
    return (
        <div key={title}>
            <div className="greenSlide" style={{backgroundColor: 'rgba(28,138,67,0.7)'}}>
                <div className="greenSlideTitle">{title}</div>
                <div className="greenSlideContent">{content}</div>
            </div>
        </div>
    );
}

class CleverSlider extends Component {

    setSlide(index) {
        this.refs.sliderComponent.setSlide(index);
    }
    
    render() {
        let slides = [
            GreenSlide("Pathfinder Monster Finder", monsterFinderContent),
            GreenSlide("Pathfinder Monster Search", monsterSearchContent),
            GreenSlide("DM Screen", dmScreenContent),
            GreenSlide("Monster Advancer Tools (original)", monsterAdvancerContent),
            GreenSlide("Subscribe", mailChimpForm),
            GreenSlide("About", aboutContent)
        ];

        return (
        <Slider ref="sliderComponent">
            {slides.map(slide => slide)}
        </Slider>
        );
    }
}

export default CleverSlider