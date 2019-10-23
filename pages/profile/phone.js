import Phone from 'components/inputs/Phone'
import Layout from 'components/layouts/Layout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '-webkit-fill-available',
    margin: '50px',
    justifyContent: 'center',
  },
}))

const PhoneInputForm = () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.container}>
        <Phone />
      </div>
    </Layout>
  )
}

export default PhoneInputForm
