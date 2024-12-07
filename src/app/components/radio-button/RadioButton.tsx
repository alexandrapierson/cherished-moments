import React from 'react'

const RadioButton = ({
  name,
  value,
  checked,
  onChange,
  label
}: {
  name: string
  value: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}) => (
  <label className={`radioItem`}>
    <input
      type='radio'
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
)

export default RadioButton
