import React from 'react'
import PropTypes from 'prop-types'

const SelectOption = ({ value, label }) => {
  return (
    // eslint-disable-next-line
    <option value={value}>
      {label}
    </option>
  )
}

SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default SelectOption
