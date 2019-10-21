// core components
import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'components/AppBar'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    maxWidth: '1440px',
    background: '#F9FAFC',
    margin: '0 auto',
  },
}))

let Layout = ({ children, jwtToken }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar fixed jwtToken={jwtToken} />
      <div className="body-container">{children}</div>
      <div>footer</div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('my state', state)
  const { jwtToken } = state.auth
  return { jwtToken }
}

Layout = connect(mapStateToProps)(Layout)

Layout.propTypes = {
  children: PropTypes.object,
  jwtToken: PropTypes.string,
}

export default Layout
