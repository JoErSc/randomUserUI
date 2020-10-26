import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, setFilter }) => (
  <button
    onClick={() => setFilter()}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link
