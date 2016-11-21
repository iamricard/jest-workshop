import React from 'react'

const Component = ({ children, ...props }) =>
  <div className={finalClassName}>
    {children}
  </div>

Component.propTypes =
  { children: React.PropTypes.any.isRequired
  }

export default Component
