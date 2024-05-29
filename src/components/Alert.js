import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show w-30 position-absolute top-40 start-50 translate-middle`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}

export default Alert
