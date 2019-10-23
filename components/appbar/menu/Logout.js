import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from 'lib/auth/actions'

let LogoutButton = ({ logout }) => (
  <Button href="/" onClick={logout}>
    Logout
  </Button>
)

LogoutButton.propTypes = {
  logout: PropTypes.func,
}

const mapDispatchToProps = { logout }

LogoutButton = connect(
  null,
  mapDispatchToProps
)(LogoutButton)

export default LogoutButton
