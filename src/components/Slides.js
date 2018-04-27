import React from 'react'

const mailChimpForm = (
<div id="mc_embed_signup" class="carousel-text">
    <form action="https://cleverorc.us18.list-manage.com/subscribe/post?u=06964e8aa58cfc6c9065f9801&amp;id=d1c2c14583" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
            </div>
            <div class="mc-field-group">
                <label for="mce-FNAME">First Name </label>
                <input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
            </div>
            <div class="mc-field-group">
                <label for="mce-LNAME">Last Name </label>
                <input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
            </div>
            <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style={{display:'none'}}></div>
                <div class="response" id="mce-success-response" style={{display:'none'}}></div>
            </div>
            <div style={{position: 'absolute', left: '-5000px', visibility: 'hidden'}} aria-hidden="true"><input type="text" name="b_06964e8aa58cfc6c9065f9801_d1c2c14583" tabindex="-1" value=""/></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
        </div>
    </form>
</div>
);
const slides = [
    {
      title: 'Pathfinder Monster Search',
      background: 'rgba(28,138,67,0.6)',
      jsx: (
      <div class="carousel-text">
        <span>Easily search for Pathfinder Monsters by name and view their full stat blocks. Currently includes Bestiary 1-4.</span>
        <a href="http://monsters.cleverorc.com" class="link_button">Try Pathfinder Monster Search</a>
      </div>
      )
    },
    {
        title: 'About Us',
        background: 'rgba(28,138,67,0.6)',
        text: `Clever Orc games is focused on delivering awesome gaming tools to players and gamemasters alike. We provide a robust offering of free tools and we operate by the Patreon support of our users and fans. `
    },
    {
        title: 'Subscribe',
        background: 'rgba(28,138,67,0.6)',
        jsx: mailChimpForm
    }
  ]
  
  export default slides