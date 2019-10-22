import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { logout } from '../lib/auth/actions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Login = () => (
  <Button href="/signin" color="inherit">
    Login
  </Button>
)
const Logout = ({ logout }) => (
  <Button href="/" color="inherit" onClick={logout}>
    Logout
  </Button>
)

Logout.propTypes = {
  logout: PropTypes.func,
}

let ButtonAppBar = ({ jwtToken, logout }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button href="/" color="inherit">
              GFamily
            </Button>
          </Typography>
          {jwtToken ? <Logout logout={logout} /> : <Login />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  jwtToken: PropTypes.string,
  logout: PropTypes.func,
}

const mapStateToProps = state => {
  const { jwtToken } = state.auth
  return { jwtToken }
}

const mapDispatchToProps = { logout }

ButtonAppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAppBar)

export default ButtonAppBar
