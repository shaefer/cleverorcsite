import React from 'react'

import privacyPolicy, {inlinePrivacyPolicy} from '../models/PrivacyPolicy'

export const mailChimpForm = (
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

export const monsterFinderContent = (
    <div className="">
        <span>Easily search for Pathfinder Monsters by name and view their full stat blocks. Includes Bestiary 1-4.</span>
        <a href="http://monsters.cleverorc.com" className="link_button" target="_blank">Try Pathfinder Monster Finder</a>
    </div>
);
export const monsterSearchContent = (
    <div className="">
        <span>Search for Pathfinder Monsters by Challenge Rating, Strength, Armor Class, or Environment. Includes Bestiary 1-4.</span>
        <a href="http://monsters.cleverorc.com/search" className="link_button" target="_blank">Try Pathfinder Monster Search</a>
    </div>
);
export const dmScreenContent = (
    <div className="">
        <span>Roll Dice, stats, Generate random monster by CR, or roll on a number of random charts (NPC Characteristics, dungeon entrances, Plot Twists, etc.)</span>
        <a href="http://monsters.cleverorc.com/dmscreen" className="link_button" target="_blank">Try DMScreen</a>
    </div>
);
export const monsterAdvancerContent = (
    <div className="">
        <div>All the original Monster Advancer Tools.</div> 
        <ul>
            <li>Monster Advancement for 3.5</li>
            <li>Treasure Generator</li>
            <li>Random Encounter Generator</li>
            <li>Random Encounter Chart Generator</li>
        </ul>
        <a href="http://www.monsteradvancer.com" className="link_button" target="_blank">Visit Monster Advancer</a>
    </div>
);

export const footerContent = (
    <div className="footerContent">
        <div>
            <div>&copy;2018 Clever Orc Games, &copy;2009-2018 Monster Advancer</div>
            <a href="https://monsters.cleverorc.com/copyright">Copyrights and Trademarks</a>
            <span> | </span>
            <a href="https://status.cleverorc.com">Status Page</a>
            <span> | </span>
            {inlinePrivacyPolicy}
        </div>
    </div>
);