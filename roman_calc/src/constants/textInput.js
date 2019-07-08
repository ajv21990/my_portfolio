import React from 'react'

const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <input className="form-control"
            type={props.type}
            name={props.id}
            value={props.val}
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    </div>
)
export default TextInput