import React from 'react'

const privacyScript = (function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src = "//cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);

const privacyPolicy = (
    <div>
        <a href="//www.iubenda.com/privacy-policy/70193923" class="iubenda-white iubenda-embed" title="Privacy Policy">Privacy Policy</a><script type="text/javascript">{privacyScript}</script>
    </div>
);

export const inlinePrivacyPolicy = (
    <span>
        <a href="//www.iubenda.com/privacy-policy/70193923" class="iubenda-white iubenda-embed" title="Privacy Policy">Privacy Policy</a><script type="text/javascript">{privacyScript}</script>
    </span>
);

export default privacyPolicy;