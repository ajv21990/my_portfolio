import React from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import '../../componentCSS/HomePage.css'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Name: "",
            dropdownOpen:false,
            modalOpen: false
        }
    }

    toggle = () =>{
        this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen}));
    }
    modalToggle = () =>{
        this.setState({modalOpen: !this.state.modalOpen})
    }

    Basic = () => console.log("Action")
    ChangePass = () => console.log("Action2")
    render(){
        return(
            <div>
                <div className="row">
                <div className="col-sm-3">
                 <h2>Welcome {this.state.Name}!</h2>   
                </div>
                <div className="col-sm-1 offset-7 mr-1">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle caret color="info">
                Account Settings
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.modalToggle}>Basic Info</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.ChangePass}>Change Password</DropdownItem>
                </DropdownMenu>
                </Dropdown>                     
                </div>
                </div>
            <h2 className="text-center mt-4">Item of the Day</h2>
            <div className="border imageContainer offset-4">
                <p>Picture PlaceHolder</p>
            </div>
            <button className="btn btn-success offset-4 mt-2">Start Shopping!</button>

            <Modal isOpen={this.state.modalOpen} toggle={this.modalToggle}>
            <ModalHeader toggle={this.modalToggle}>Basic Info</ModalHeader>
            <ModalBody>
                First Name:<br/>
                Last Name:<br/>
                Email:<br/>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger" onClick={this.modalToggle}>Close</button>
            </ModalFooter>
            </Modal>
            </div>
        )
    }
}