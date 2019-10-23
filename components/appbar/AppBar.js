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
import Menu from './menu/Menu'

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

let ButtonAppBar = ({ jwtToken }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Button href="/" color="inherit">
              GFamily
            </Button>
          </Typography>
          {jwtToken ? <Menu /> : <Login />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  jwtToken: PropTypes.string,
}

const mapStateToProps = state => {
  const { jwtToken } = state.auth
  return { jwtToken }
}

ButtonAppBar = connect(mapStateToProps)(ButtonAppBar)

export default ButtonAppBar
