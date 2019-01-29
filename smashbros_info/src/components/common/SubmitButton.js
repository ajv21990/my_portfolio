import React from "react";

const SubmitButton = props => (
    <div>
        <button
            type="button"
            className={props.className}
            style={props.style}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    </div>
);
export default SubmitButton;