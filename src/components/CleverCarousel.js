import React, { Component } from 'react';
import TouchCarousel, {clamp} from 'react-touch-carousel'
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
import data from './Slides'

import './CleverCarousel.css'

const enableLoop = true;
const enableAutoplay = false;
const cardSize = 300
const cardPadCount = enableLoop ? 10 : 0
const carouselWidth = clamp(window.innerWidth, 0, 960)

function log (text) {
  console.log(text);
}

function CarouselContainer (props) {
  const {cursor, carouselState: {active, dragging}, ...rest} = props
  let current = -Math.round(cursor) % data.length
  while (current < 0) {
    current += data.length
  }
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  const isActive = active ? 'is-active: ' + active : "";
  const isDragging = dragging ? 'is-dragging: ' + dragging : "";
  const containerClass = "carousel-container " + isActive + " " + isDragging;
  return (
    <div className={containerClass}>
      <div className='carousel-track'
        style={{transform: `translate3d(${translateX}px, 0, 0)`}}
        {...rest}
      />

      <div className='carousel-pagination-wrapper'>
        <ol className='carousel-pagination'>
          {data.map((_, index) => (
            <li
              key={index}
              className={current === index ? 'current' : ''}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

const Container = touchWithMouseHOC(CarouselContainer)

class CleverCarousel extends Component {
    renderCard (index, modIndex) {
      const item = data[modIndex]
      return (
        <div
          key={index}
          className='carousel-card'
          onClick={() => log(`clicked card ${1 + modIndex}`)}
        >
          <div
            className='carousel-card-inner'
            style={{backgroundColor: item.background}}
          >
            <div className='carousel-title'>{item.title}</div>
            <div className='carousel-text'>{item.text}</div>
          </div>
        </div>
      )
    }
  
    render () {
      return (
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          cardPadCount={cardPadCount}
          loop={enableLoop}
          autoplay={enableAutoplay ? 2e3 : false}
          renderCard={this.renderCard}
          onRest={index => log(`rest at index ${index}`)}
          onDragStart={() => log('dragStart')}
          onDragEnd={() => log('dragEnd')}
          onDragCancel={() => log('dragCancel')}
        />
      )
    }
  }

  export default CleverCarousel