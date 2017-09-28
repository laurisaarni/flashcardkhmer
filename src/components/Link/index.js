import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className="filterLink">{children}</span>
  }

  return (
    // eslint-disable-next-line
    <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      className="filterLink"
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
