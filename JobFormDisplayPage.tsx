import * as React from 'react'
import JobPostForm from './JobPostForm'
import apiExecute from "../common/apiExecute"
import JobDisplay from "../JobPostings/DisplayJobComponent"
import { Editor } from 'draft-js';
import JobTypeDisplay from './JobTypeModal'
import { ModalWindow } from '../common/modal';
import * as moment from 'moment';
import { DropDownList } from '../common/form/'
import { Card } from '../common/card'
import {connect} from 'react-redux'
import { RouteComponentProps } from 'react-router';


interface JobDisplayState {
    form: JobForm,
    list: JobList[],
    options: DropDown[]
}

const mapStateToProps = (state) => ({
    user: state.user
})

interface IJobPostsProps extends RouteComponentProps<{}> {
    user: any
}

interface JobList {
    jobTitle: string,
    typeName: string,
    createdDate: string,
    requirements: string,
    details: string,
    contactName: string,
    contactPhone: string,
    contactEmail: string,
    id: number,
    zipCode:number
}

interface JobForm {
    jobTypeId: number,
    organizationId: number,
    createdByUserBaseId: number,
    jobTitle: string,
    requirements: string,
    details: string,
    contactName: string,
    contactPhone: string,
    contactEmail: string
    modifiedByUserBaseId: number,
    id: number,
    typeName: string,
    zipCode: number,
    showModal: boolean
}

interface DropDown {
    value: number,
    text: string
}


class JobFormDisplay extends React.Component<IJobPostsProps, JobDisplayState>{

    constructor(props) {
        super(props)
        this.state = {
            form: {               
                jobTypeId: 0,
                organizationId: 0,
                createdByUserBaseId: 0,
                jobTitle: '',
                requirements: '',
                details: '',
                contactName: '',
                contactPhone: '',
                contactEmail: '',
                modifiedByUserBaseId: 0,
                id: 0,
                typeName: '',
                zipCode: 0,
                showModal: false
            },
            list: [],
            options: [
                {
                    value: 0,
                    text: 'Select an Option'
                },
                {
                    value: 1,
                    text: 'General Labor'
                },
                {
                    value: 2,
                    text: 'Human Resources'
                },
                {
                    value: 3,
                    text: 'Accounting'
                },
                {
                    value: 4,
                    text: "Customer Service"
                },
                {
                    value: 7,
                    text: "Nursing"
                },
                {
                    value: 8,
                    text: "Office"
                },
                {
                    value: 9,
                    text: "Cleaners"
                },
                {
                    value: 10,
                    text: "Maintenence"
                },
                {
                    value: 11,
                    text: "Security"
                },
                {
                    value: 12,
                    text: "Food"
                },
                {
                    value: 13,
                    text: "Other"
                }
            ]
        }
    }
    onChange = (name,value) => {
        const key = name
        const val = value
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [key]: val   
            }                  
        })       
    }
    componentDidMount() {
        //Get all job postings
        window.scrollTo(0, 0);
        apiExecute("/api/admin/JobPostings/Org/" + this.props.user.orgId, "GET", '') 
            .then(response => {
                this.setState({
                    list: response.items
                })
            })
            .catch(err => console.log(err))
        
    }
    onClickSubmitJob = evt => {
        evt.preventDefault()       
        this.state.form.id === 0 
            ? apiExecute("/api/admin/JobPostings", "POST", this.state.form).then(response => {                 
                    this.setState({
                        form: {
                            jobTypeId: 0,
                            organizationId: 0,
                            createdByUserBaseId: 0,
                            jobTitle: '',
                            requirements: '',
                            details: '',
                            contactName: '',
                            contactPhone: '',
                            contactEmail: '',
                            modifiedByUserBaseId: 0,
                            id: 0,
                            typeName: '',
                            zipCode: 0,
                            showModal: false
                        }
                    })                 
                apiExecute("/api/admin/JobPostings/Org/" + this.props.user.orgId, "GET", '')
                        .then(response => {
                            this.setState({
                                list: response.items
                            })
                        })
                        .catch(err => console.log(err))
                }).catch(err => console.log(err))
            : apiExecute("/api/admin/JobPostings/" + this.state.form.id, "PUT", this.state.form).then(response => {
                    this.setState({
                        form: {
                            jobTypeId: 0,
                            organizationId: 0,
                            createdByUserBaseId: 0,
                            jobTitle: '',
                            requirements: '',
                            details: '',
                            contactName: '',
                            contactPhone: '',
                            contactEmail: '',
                            modifiedByUserBaseId: 0,
                            id: 0,
                            typeName: '',
                            zipCode: 0,
                            showModal: false
                        }
                    })
                apiExecute("/api/admin/JobPostings/Org/" + this.props.user.orgId, "GET", '')
                        .then(response => {
                            this.setState({
                                list: response.items
                            })
                        })
                        .catch(err => console.log(err))    
                }).catch(err => console.log(err))   
    }
    handleEditClick = id => {
        apiExecute("/api/admin/JobPostings/" + id, "GET", '')
            .then(response => {
                this.setState({
                    form: response.items[0]
                })
                this.setState({
                    ...this.state,
                    form: {
                        ...this.state.form,
                        showModal: true
                    }
                })
            })
            .catch(err => console.log(err))
    }
    handleDeleteClick = id => {
        apiExecute("/api/user/jobapply/job/" + id, "DELETE", '')
            .then(response => {
                apiExecute("/api/admin/JobPostings/" + id, "DELETE", '')
                    .then(response => {
                        apiExecute("/api/admin/JobPostings/Org/" + this.props.user.orgId, "GET", '')
                            .then(response => {
                                this.setState({
                                    list: response.items
                                })
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    showJobTypes = evt => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                showModal: true
            }
        })
    }
    onModalClose = () => {
        //On modal close reset form
        this.setState({
            form: {
                jobTypeId: 0,
                organizationId: 0,
                createdByUserBaseId: 0,
                jobTitle: '',
                requirements: '',
                details: '',
                contactName: '',
                contactPhone: '',
                contactEmail: '',
                modifiedByUserBaseId: 0,
                id: 0,
                typeName: '',
                zipCode: 0,
                showModal: false
            }
        })
    }
    render() {
        return (
            <div className="container">
                <h2>Job Posts</h2>
                <button type="button" className="btn btn-secondary waves-effect mb-3" onClick={this.showJobTypes}>Create New Job</button>
                <div className="card mb-4" style={{ maxHeight: 500, overflowY: "scroll" }}>
                        <table className="table table-striped table-bordered dataTable no-footer" style={{ fontSize: '13px' }} role="grid">
                            <thead className="text-center">
                                <tr>
                                    <th>Job Title</th>
                                    <th>Date Created</th>
                                    <th>Contact Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>ZipCode</th>
                                    <th>Filled Job</th>
                                    <th>Edit Job</th>
                                </tr>
                        </thead>
                        
                        {this.state.list.length === 0 || this.state.list.map((item, index) => (
                            
                            <JobDisplay key={index}
                                list={item}
                                handleClickEdit={this.handleEditClick}
                                handleClickDelete={this.handleDeleteClick}
                            />
                            ))}
                        </table>
                        </div>
                
                <ModalWindow
                    showModal={this.state.form.showModal}
                    onClose={this.onModalClose}
                    maxHeight={500}                                
            >                    
                    <div>
                        <h2 className="text-center">Job Post</h2>
                        <DropDownList
                            options={this.state.options}
                            selectedValue={this.state.form.jobTypeId}
                            onChange={this.onChange}
                            name="jobTypeId"
                            label="Job Types"
                        />
                        <JobPostForm
                            state={this.state.form}
                            onChange={this.onChange}
                            onClickSubmitJob={this.onClickSubmitJob}
                        />
                    </div>
                    <br />
                </ModalWindow>
            </div>
        )
    }
}
export default connect(mapStateToProps)(JobFormDisplay)