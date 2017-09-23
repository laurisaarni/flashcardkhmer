import React from 'react'
import FilterLink from '../../containers/FilterLink'
import './Footer.css'

const Footer = () => (
  <footer>
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">
        Still learning
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">
        Already learned
      </FilterLink>
    </p>
  </footer>
)

export default Footer
