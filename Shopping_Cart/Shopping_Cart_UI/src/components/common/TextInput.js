import React from 'react'

const TextInput = (props) => (
    <React.Fragment>

        <label htmlFor={props.id}>{props.label}</label>

        <input className="form-control"
            type={props.type}
            name={props.id}
            value={props.val}
            onChange={props.handleChange}
        />
    </React.Fragment>
)
export default TextInput