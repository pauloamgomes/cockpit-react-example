import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Slider from 'react-slick';
import { grey600 } from 'material-ui/styles/colors';
import { Grid } from 'react-flexbox-grid';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getImageUrl } from '../../utils';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  lazyLoad: true,
  responsive: [
    { breakpoint: 400, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
  ],
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: 200,
    minHeight: 200,
    marginTop: 40,
    marginBottom: 30,
  },
  images: {
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    margin: 0,
    padding: 5,
  },
  details: {
    color: grey600,
    fontSize: 15,
    paddingBottom: 20,
  },
  link: {
    cursor: 'pointer',
  },
};

const Carousel = props => {
  return (
    <Grid>
      <div style={styles.container}>
        <h2 style={styles.title}>{props.title}</h2>
        <div style={styles.images}>
          {props.images &&
            props.images.length && (
              <Slider {...settings}>
                {props.images.map((image, idx) => (
                  <div key={`image-${idx}`}>
                    <div>
                      <Avatar src={getImageUrl(image.path)} width={72} />
                    </div>
                    <h4 style={styles.title}>{image.meta.title}</h4>
                    <div style={styles.details}>{image.meta.details}</div>
                  </div>
                ))}
              </Slider>
            )}
        </div>
      </div>
    </Grid>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  images: PropTypes.array,
};

export default Carousel;
