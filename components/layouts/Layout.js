// core components

import PropTypes from 'prop-types'
import AppBar from 'components/appbar/AppBar'
import AppFooter from 'components/AppFooter'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    margin: '0 auto',
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar fixed />
      <div className="body-container">{children}</div>
      <AppFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
