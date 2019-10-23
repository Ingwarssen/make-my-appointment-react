// core components
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppBar from 'components/AppBar'
import AppFooter from 'components/AppFooter'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    margin: '0 auto',
  },
}))

let Layout = ({ children, jwtToken }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar fixed jwtToken={jwtToken} />
      <div className="body-container">{children}</div>
      <AppFooter />
    </div>
  )
}

const mapStateToProps = state => {
  const { jwtToken } = state.auth
  return { jwtToken }
}

Layout = connect(mapStateToProps)(Layout)

Layout.propTypes = {
  children: PropTypes.object,
  jwtToken: PropTypes.string,
}

export default Layout
