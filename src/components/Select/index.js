import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SelectOption from '../SelectOption'

let Select = ({ dispatch, selectOptions, onSelect, selectedValue }) => {
  return (

    // eslint-disable-next-line
    <select
      onChange={e => {
        e.preventDefault()
        onSelect({dispatch, test: 'test'})
      }}
    >
      {selectOptions.map(optionItem => (
        <SelectOption key={optionItem.id} value={optionItem.value} label={optionItem.label} />
      ))}
    </select>
  )
}

Select.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  selectOptions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

Select = connect()(Select)

export default Select
