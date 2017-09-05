// @flow

import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'

const styles = theme => ({
  galleryRoot: {
    maxWidth: '100%',
  },
})

class ProductsGallery extends React.Component<any, any> {
  static contextTypes = {
    rbCtx: PropTypes.object,
  }

  render() {
    const { classes } = this.props

    let settings = {
      dots: false,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
      speed: 1200,
      autoplay: true,
      autoplaySpeed: 5000,
    }

    return (
      <div className={classes.galleryRoot}>
        <Slider {...settings}>
          <div>
            <img
              alt=""
              src="http://res.cloudinary.com/df0hinrzw/image/upload/c_scale,h_600/v1490916716/backgrounds/tianjin-2185510_1920.jpg"
            />
          </div>
          <div>
            <img
              alt=""
              src="http://res.cloudinary.com/df0hinrzw/image/upload/c_scale,h_600/v1490916716/backgrounds/tianjin-2185510_1920.jpg"
            />
          </div>
          <div>
            <img
              alt=""
              src="http://res.cloudinary.com/df0hinrzw/image/upload/c_scale,h_600/v1490916716/backgrounds/tianjin-2185510_1920.jpg"
            />
          </div>
        </Slider>
      </div>
    )
  }
}

export default withStyles(styles)(ProductsGallery)
