import React from 'react'
import TextInput from '../common/TextInputs'


const RegisterForm = props => (
    <div>
        <form>
            <div className="form-group">
                <TextInput label="First Name" id="firstName" type="text" val={props.state.firstName} handleChange={props.handleChange} />
            </div>

            <div className="form-group">
                <TextInput label="Last Name" id="lastName" type="text" val={props.state.lastName} handleChange={props.handleChange} />

            </div>
            <div className="form-group">
                <TextInput label="Email" id="email" type="text" val={props.state.email} handleChange={props.handleChange} />

            </div>
            <div className="form-group">
                <TextInput label="Password" id="password" type="password" val={props.state.password} handleChange={props.handleChange} />

            </div>
            <div className="form-group">
                <TextInput label="Confirm Password" id="passwordConfirm" type="password" val={props.state.passwordConfirm} handleChange={props.handleChange} />
            </div>
            <br />
            <div className="form-group">
                <button disabled={!props.state.formValid} type="submit" onClick={props.handleClick} className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
)

export default RegisterForm