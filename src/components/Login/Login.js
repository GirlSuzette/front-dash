import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from 'react-router-dom'
import './login.css'

const styles = theme => ({
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

class Login extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <React.Fragment>
        <div className='thislogin'>
          <div className='expensesContainer'>
            <div className='container ContLogin'>
              <div className='container' id='registration-form'>
                <div className='frm'>
                  <div className='avatarIcon'>
                    <Avatar className={classes.avatar}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                      Sign in
                    </Typography>
                  </div>
                  <form>
                    <div className='form-group'>
                      <TextField
                        required
                        name='email'
                        label='Email'
                        fullWidth
                      />
                    </div>
                    <div className='form-group'>
                      <TextField
                        required
                        name='password'
                        type='password'
                        label='Password'
                        fullWidth
                      />
                    </div>
                    <div className='form-group btn'>
                      <Button type='submit' value='Login' variant='contained'>
                        Login
                      </Button>
                    </div>
                    <div className='signupContainer'>
                      <p>
                        Don't have account yet?
                        <Link className='signupLink' to='#'>
                          <br /> Sign up now!
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Login)
