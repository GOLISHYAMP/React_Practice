// import React from 'react'
// import PropTypes from 'prop-types'
const Header = ({name}:any) => {
  return (
    <div>Hello form {name}</div>
  )
}

Header.defaultProps = {
    name : "Shyam Goli"
}


export default Header