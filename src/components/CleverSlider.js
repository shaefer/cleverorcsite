import React, {Component} from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './CleverSlider.css';

const mailChimpForm = (
    <div id="mc_embed_signup" className="">
        <div>Receive updates whenever we release new features or tools.</div>
        <form action="https://cleverorc.us18.list-manage.com/subscribe/post?u=06964e8aa58cfc6c9065f9801&amp;id=d1c2c14583" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
            <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                    <input type="email"  name="EMAIL" className="required email" id="mce-EMAIL"/>
                </div>
                <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">First Name </label>
                    <input type="text"  name="FNAME" className="" id="mce-FNAME"/>
                </div>
                <div className="mc-field-group">
                    <label htmlFor="mce-LNAME">Last Name </label>
                    <input type="text"  name="LNAME" className="" id="mce-LNAME"/>
                </div>
                <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                </div>
                <div style={{position: 'absolute', left: '-5000px', visibility: 'hidden'}} aria-hidden="true"><input type="text" name="b_06964e8aa58cfc6c9065f9801_d1c2c14583" tabIndex="-1" /></div>
                <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
            </div>
        </form>
    </div>
);
const GreenSlide = (title, content) => {
    return (
        <div>
            <div className="greenSlide" style={{backgroundColor: 'rgba(28,138,67,0.7)'}}>
                <div className="greenSlideTitle">{title}</div>
                <div className="greenSlideContent">{content}</div>
            </div>
        </div>
    );
}

const monsterSearchContent = (
    <div className="">
        <span>Easily search for Pathfinder Monsters by name and view their full stat blocks. Currently includes Bestiary 1-4.</span>
        <a href="http://monsters.cleverorc.com" className="link_button">Try Pathfinder Monster Search</a>
    </div>
    );
    const aboutContent = (
        <div>Clever Orc games is focused on delivering awesome gaming tools to players and gamemasters alike. We provide a robust offering of free tools and we operate by the Patreon support of our users and fans.</div>
    );
class CleverSlider extends Component {
    render() {
        const slideIndexToSet = this.props.config.slideIndex;
        console.log("SLIDE INDEX: " + slideIndexToSet)

        //Slide index isn't updating. We can address this by passing different props to re-render but then it will ignore subsequent clicks of the section link...even if we've moved off that link through normal use of the Slider. Re-rendering at each click is preferable but we can't get the render in the component to occur.
        return (
        <Slider slideIndex={slideIndexToSet} duration={1500}>
            {GreenSlide("Pathfinder Monster Search", monsterSearchContent)}
            {GreenSlide("Subscribe", mailChimpForm)}
            {GreenSlide("About", aboutContent)}
        </Slider>
        );
    }
}

export default CleverSlider