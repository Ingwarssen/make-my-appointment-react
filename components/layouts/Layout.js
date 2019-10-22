// core components
import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'components/AppBar'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    maxWidth: '1440px',
    background: '#F9FAFC',
    margin: '0 auto',
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar fixed />
      <div className="body-container">{children}</div>
      <div>footer</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
