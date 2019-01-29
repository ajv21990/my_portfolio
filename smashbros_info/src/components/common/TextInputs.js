import React from "react";

const TextInput = props => (
    <div>
        <div>
            <label htmlFor={props.id}>{props.label}:</label>
        </div>

        <input
            className="form-control"
            name={props.id}
            type={props.type}
            value={props.val}
            onChange={props.handleChange}
        />
    </div>
);
export default TextInput