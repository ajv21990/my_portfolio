import * as React from 'react';
import JobRange from '../../components/JobPostings/JobRange';
import apiExecute from '../../components/common/apiExecute'
import { ModalWindow } from '../../components/common/modal';
import ApplyModal from '../../components/JobPostings/ApplyModal';
import * as moment from 'moment';
import PerfectScrollbar from "react-perfect-scrollbar"

interface IJobLandingPageState {
    showModal: boolean,
    apply: Job[],
    jobsAppliedList: Job[],
    jobApplied: Applied,
    
}
interface Job {
    jobTitle: string,
    details: string,
    contactName: string,
    contactPhone: string,
    contactEmail: string,
    appliedId: number,
    requirements: string,
    zipCode: number,
    jobTypeId: number,
    appliedDate?: string,
    userBaseId: number,
    id: number
}
interface AppliedList {
    jobId: number,
    appliedDate: string,
    userBaseId: number
}
interface Applied {
    jobId: number,
    userBaseId: number,
}

export default class JobLandingPage extends React.Component<any, IJobLandingPageState> {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            apply: [],
            jobsAppliedList: [],
            jobApplied: {
                userBaseId: this.props.user.id,
                jobId: 0,
            },
        };
    }
    componentDidMount() {
        this.grabJobsAvailable()
    }

    grabJobsAvailable = () => {
        apiExecute("/api/user/jobapply/" + this.props.user.id, "GET", '')
            .then(response => {
                this.setState({
                    jobsAppliedList: response.items,
                    apply: response.items
                })
                this.FormatDate()
                
            })
            .catch(err => console.log(err))
    }
    applyForJob = id => {
        apiExecute("/api/admin/JobPostings/" + id, "GET", '')
            .then(response => {
                this.setState({
                    apply: response.items[0],
                    showModal: true
                })
                this.setState({
                    ...this.state,
                    jobApplied: {
                        ...this.state.jobApplied,
                        jobId: this.state.apply["id"]
                    }
                })
            })
            .catch(err => console.log(err))
    }
    sendApplyEmail = () => {
        this.setState({
            ...this.state,
            jobApplied: {
                ...this.state.jobApplied,
                jobId: this.state.apply["id"]
            }
        })
        this.onModalClose()
        this.AddJobToArray()
        this.sendEmail()

    }
    sendEmail = () => {
        apiExecute("/api/user/jobapply/" + this.props.user.id + "/" + this.state.apply["id"], "GET", '')
            .then(response => {
            })
            .catch(err => console.log(err))
    }
    AddJobToArray = () => {
        //Add Job Applied to Job Applied
        apiExecute("/api/user/jobapply", "POST", this.state.jobApplied)
            .then(response => {
                //Add newest job to Job list
                apiExecute("/api/user/jobapply/" + this.props.user.id, "GET", '')
                    .then(response => {
                        this.setState({
                            jobsAppliedList: response.items,
                        })
                        this.FormatDate()
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }
    FormatDate = () => {
        let newList = []
        for (let index in this.state.jobsAppliedList) {
            let nextIndex = parseInt(index, 10)
            nextIndex = nextIndex++
            //Format date if job was applied for
            if (this.state.jobsAppliedList[index].appliedId !== 0) {
                this.state.jobsAppliedList[index].appliedDate = moment(this.state.jobsAppliedList[index].appliedDate).format("MM/DD/YYYY")
                //Display jobs applied for and add to list
                if (this.state.jobsAppliedList[index].userBaseId == this.props.user.id){
                    this.state.jobsAppliedList[index].appliedDate = moment(this.state.jobsAppliedList[index].appliedDate).format("MM/DD/YYYY")
                    newList[index] = this.state.jobsAppliedList[index]
                } else {
                    this.state.jobsAppliedList[index].appliedDate = ""
                    newList[index] = this.state.jobsAppliedList[index]
                }
                //If job not applied for then "" it and add to list
            } else {
                this.state.jobsAppliedList[index].appliedDate = ""
                newList[index] = this.state.jobsAppliedList[index]
            }
        }

        this.setState({
            jobsAppliedList: newList
        })
        //Filter Duplicate jobs and keep current user job
        for (let index in newList) {
            let nextIndex = parseInt(index, 10)
            let currentIndex = parseInt(index, 10)
            let previousIndex = currentIndex - 1
            nextIndex = nextIndex + 1
            if ((nextIndex) == newList.length) {
                if ((newList[index].id == newList[previousIndex].id) && (this.props.user.id !== newList[index].userBaseId)) {                  
                    delete newList[index]
                } else {
                    this.setState({
                        jobsAppliedList: newList
                    })
                    return
                }
            }
            if ((newList[index].id == newList[nextIndex].id) && (this.props.user.id !== newList[index].userBaseId)) {             
                delete newList[index]
            } else {
                this.setState({
                    jobsAppliedList: newList
                })
            }
        }
    }

    onModalClose = () => {
        this.setState({
            showModal: false
        })
    }
    tenMileRange = () => {
        apiExecute("/api/user/jobapply/10/" + this.props.user.id, "GET", '')
            .then(response => {
                this.setState({
                    jobsAppliedList: response.items,
                    apply: response.items
                })
                this.FormatDate()
               
            })
            .catch(err => console.log(err))
    }
    twentyMileRange = () => {
        apiExecute("/api/user/jobapply/20/" + this.props.user.id, "GET", '')
            .then(response => {
                this.setState({
                    jobsAppliedList: response.items,
                    apply: response.items
                })
                this.FormatDate()
                
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="card" style={{padding: "0px"}}>
                <h6 className="mt-3 pl-3">Jobs Available:</h6>
                <PerfectScrollbar>
                    <div className="card-body" style={{ maxHeight: 410, padding: "0px"}}>
                        <table className="table table-striped table-bordered dataTable no-footer" role="grid" >
                            {this.state.jobsAppliedList.length === 0 || this.state.jobsAppliedList.map((item, index) => (
                                    <JobRange key={index}
                                
                                    jobsAppliedList={item}
                                    handleClickApply={this.applyForJob}
                                />
                                ))}
                        </table>

                    </div>
                </PerfectScrollbar>

                <div style={{ textAlign: "center",padding:"10px" }}>
                    <div>
                        <button type="submit" className="btn btn-sm waves-effect btn-primary" onClick={this.tenMileRange}>10 miles</button>
                        <button type="submit" className="btn btn-sm waves-effect btn-primary" style={{ marginLeft: "5px" }} onClick={this.twentyMileRange}>20 miles</button>
                        <button type="submit" className="btn btn-sm waves-effect btn-primary" style={{ marginLeft: "5px" }} onClick={this.grabJobsAvailable}>30 miles</button>
                    </div>
                </div>
                <ModalWindow
                    showModal={this.state.showModal}
                    onClose={this.onModalClose}
                >
                    <ApplyModal
                        state={this.state.apply}
                        onClickApplyForJob={this.sendApplyEmail}
                    />
                    <br />
                </ModalWindow>
            </div >
        )
    }
}

