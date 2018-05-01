We started with [React App Template](https://github.com/shaefer/react-redux-template)

Struggled through trying to use a pre-established grid system. Finally abandoned all of that and just build basic 3 column layout with an underlying flexbox structure.

After that spent time trying to build a responsive menu that would get placed properly. Built this using just css and @media query to be properly responsive.

Went to find a basic mailing list service. Opted for MailChimp b/c of best price scaling and easily styled embeddable components

Next we went on the ultimate search for a Slider/Carousel component with the following features:
- Responsive and easily customizable via CSS and media queries
- Swipe support on mobile
- Slides need to support non-images (any type of component)
- Renders properly inside the existing layout

We tried the following
- react-touch-carousel (got most of the way but realized the work to get any additional features would be a lot of manual coding)
- react-coverflow (got most of the way before we realized that getting reasonable responsiveness would be difficult and vertical sizing was difficult with the built in design)
- react-slick (even basic setup was challenging...odd react errors and layout problems we didn't have with any other components)
- react-image-gallery (didn't get very far before realizing it expects and depends on all children being images)

We ended up with
- react-animated-slider (had everything but a built in function to set a specific slide, but that was easily added by exposing a function and using ref)

Went to find privacy policy...ended up using ibuena which was recommended by MailChimp and had a special MailChimp set of privacy categories.

Added uptime monitoring with uptimerobot. 50 free monitors at up to 5/min intervals with public dashboards and dns customization for free as well. Hooked in status.cleverorc.com
