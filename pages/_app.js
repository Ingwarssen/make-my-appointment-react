import App from 'next/app'
import React from 'react'
import { Provider, connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import { setJwtToken } from '../lib/auth/actions'
import Cookies from 'utils/cookies'

import createStore from '../lib/store'

class MyApp extends App {
  componentDidMount() {
    const { setJwtToken, authToken } = this.props
    setJwtToken(authToken)

    // Remove the server-side injected CSS.
    // eslint-disable-next-line
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    const authToken = Cookies.getItem(ctx.req.headers.cookie, 'authToken')
    return { pageProps, authToken }
  }

  render() {
    const { Component, pageProps, store } = this.props
    //
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = { setJwtToken }

export default withRedux(createStore)(
  withReduxSaga(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(MyApp)
  )
)
