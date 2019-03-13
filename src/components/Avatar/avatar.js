import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import img from '../../image/suzette.jpg'

const styles = {
  avatar: {
    margin: 5
  },
  bigAvatar: {
    margin: 10,
    width: 10,
    height: 10
  }
}

function ImageAvatars (props) {
  const { classes } = props
  return (
    <Grid container justify='center' alignItems='center'>
      <Avatar alt='Remy Sharp' src={img} className={classes.avatar} />
      {/* <Avatar alt='Remy Sharp' src={img} className={classes.bigAvatar} /> */}
    </Grid>
  )
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ImageAvatars)
