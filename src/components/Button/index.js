import PropTypes from 'prop-types'
import React from 'react'

import { Click } from './style'

export function ClickButton({ children, ...rest }) {
  return <Click {...rest}>{children}</Click>
}
ClickButton.propTypes = {
  children: PropTypes.string
}
