import React from 'react'
import NavBar from '../navBar/NavBar'
import DKFS from '../../images/dk/DKFS.gif'
import '../characterSelect/CharacterSelect.css'
import SmashIcon from '../../images/Smash_Icon.png'
import DKImage2 from '../../images/dk/DK_Image2.png'
import '../../images/mario/MarioCSS.css'

export default class DK extends React.Component {
    backToCharSelect = () => {
        this.props.history.push("/character_select")
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="DKBG">
                    <h1>Donkey Kong</h1>
                    <img className="CharacterImage" src={DKImage2} alt="DK" />
                    <p>His charged punch is one of the strongest attacks in the game! In Super Smash Bros. Ultimate, his Final Smash has been updated from Konga Beat to a flurry of punches!</p>
                    <h3>Moveset</h3>
                    <p><span className="move">Neutral Special</span> Giant Punch - Charges up a punch that can keep charging after dodging or shielding. </p>
                    <p><span className="move">Side Special</span> Headbutt - Buries opponents when they're hit on the ground. Can't be interrupted by weaker attacks. </p>
                    <p><span className="move">Up Special</span> Spinning Kong - Spins with a whirlwind of punches. Can Shift left or right while airborne and forward while grounded. </p>
                    <p><span className="move">Down Special</span> Hand Slap	 - Sends out shock waves by slapping the ground, sending foes into the air. Has a meteor effect while airborne.  </p>
                    <p><span className="move">Final Smash</span> Jungle Rush - Donkey Kong pummels opponents with a flurry of punches before launching them with a finishing uppercut. If the first hit doesnt make contact, the whole attack fails, so make sure to get that hit in.  </p>
                    <img className="CharacterFS" src={DKFS} alt="DKFS" />
                    <br />
                    <button className="button mt-2" onClick={this.backToCharSelect} >
                        <img className="icon" src={SmashIcon} alt="icon" />
                        Back to Character Select</button>
                </div>
            </div>
        )
    }
}