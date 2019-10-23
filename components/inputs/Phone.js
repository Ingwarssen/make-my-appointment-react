import { useState } from 'react'
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}))

function TextMaskCustom(props) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
}

export default function FormattedInputs() {
  const classes = useStyles()
  const [values, setValues] = useState({
    textmask: '(  )    -    ',
  })

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    })
  }

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="formatted-text-mask-input">Phone number</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange('textmask')}
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </div>
  )
}
