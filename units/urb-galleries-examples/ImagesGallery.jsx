// @flow

import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'

const styles = theme => ({
  galleryRoot: {
    maxWidth: '100%',
  },
})

class ImagesGallery extends React.Component<any, any> {
  static contextTypes = {
    rbCtx: PropTypes.object,
  }

  render() {
    const { classes } = this.props
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalTitle: (
          <h3>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </h3>
        ),
        thumbnailTitle: 'thumb 1',
        description: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        ),
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
        originalTitle: 'Title 2',
        thumbnailTitle: 'thumb 2',
        description: 'Description 2',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
        originalTitle: 'Title 3',
        thumbnailTitle: 'thumb 3',
        description: 'Description 3',
      },
    ]

    return (
      <div className={classes.galleryRoot}>
        <ReactImageGallery
          thumbnailPosition="right"
          useBrowserFullscreen={false}
          showFullscreenButton={true}
          items={images}
          lazyLoad={true}
          showIndex={true}
          slideOnThumbnailHover={false}
          slideInterval={2000}
        />
      </div>
    )
  }
}

export default withStyles(styles)(ImagesGallery)
