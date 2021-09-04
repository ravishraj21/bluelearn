import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Tilty from 'react-tilty';
export default ({ heading, links }) => {
	return (
			<SplideSlide className="slider">
          <div className="slider__heading">{heading}</div>
          <div className="slider__content">
            <Splide
              options={{
                rewind: true,
                direction: 'ttb',
                trimSpace: true,
                height: '25rem',
                // autoplay: true,
                updateOnMove: true,
                speed: 600,
              }}
              className="slider__vertical"
            >
              {links.map(({ href, title }) => {
                return (
                  <SplideSlide className="slider--content">
                    <a href={href} target="_blank">
                      {title}
                    </a>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
			</SplideSlide>
	);
};
