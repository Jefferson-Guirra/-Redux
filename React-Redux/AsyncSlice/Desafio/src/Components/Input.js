import React from 'react'
import styles from './Input.module.css'

const Input = ({
  type,
  id,
  label,
  setValue,
  value,
  onChange,
  onBlur,
  error
}) => {
  return (
    <div className={styles.component}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={styles.input}
        type={type}
        id={id}
        name={id}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Input
