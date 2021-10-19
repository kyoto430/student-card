import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ label, type, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }
  return (
    <div className="mb-3">
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <div>
        <input
          type={type}
          id={name}
          value={value}
          name={name}
          onChange={onChange}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

export default Field
