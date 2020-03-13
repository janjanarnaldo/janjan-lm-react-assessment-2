import React from 'react';

export default function Dropdown(props) {
  const { disabled, options, onChange, _ref } = props;

  return <select className={`ui dropdown fluid ${disabled && 'disabled'}`} onChange={onChange} ref={_ref} disabled={disabled}>
    {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
  </select>
}
