import React from 'react'
import '../landing/SmashLand.css'
import SmashLogo from '../../images/smashLogo/SmashLogo.png'
import SmashIcon from '../../images/Smash_Icon.png'

export default class LandingPage extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         images: [
    //             SmashLogo
    //         ]
    //     }
    // }

    EnterSite = () => {
        this.props.history.push("/character_select")
    }
    render() {
        return (
            <div className="SmashLand">
                <div>
                    <img className="logo" src={SmashLogo} alt="logo" />
                </div>
                <h3>The one stop site for learning about characters in Smash Brothers Ultimate</h3>
                <button className="button landBtn" onClick={this.EnterSite}>
                    <img className="icon" src={SmashIcon} alt="icon" />
                    Enter</button>
            </div>

        )
    }

}