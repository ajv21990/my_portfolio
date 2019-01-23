import React from 'react'
import NavBar from '../navBar/NavBar'
import MarioImage from '../../images/mario/Mario_Image.png'
import MarioFS from '../../images/mario/MarioFinalSmash.gif'
import SmashIcon from '../../images/Smash_Icon.png'
import '../characterSelect/CharacterSelect.css'



export default class Mario extends React.Component {
    backToCharSelect = () => this.props.history.push("/character_select")

    render() {
        return (
            <div>
                <NavBar />
                <div className="bG">
                    <h1>Mario</h1>
                    <img className="CharacterImage" src={MarioImage} alt="Mario" />
                    <p>Mario is an all-around fighter who uses his wide variety of techniques to respond to any situation. In Super Smash Bros. Ultimate, he shows up in his Wedding tux and his Builder outfit, and Cappy even makes an appearance!</p>
                    <h3>Moveset</h3>
                    <p><span className="move">Neutral Special</span> Fireball - Throws a fireball that bounces along the ground.</p>
                    <p><span className="move">Side Special</span> Cape - Whips out a cape to spin opponents around and reflect projectiles.</p>
                    <p><span className="move">Up Special</span> Super Jump Punch - Hits repeatedly with a rising punch.</p>
                    <p><span className="move">Down Special</span> F.L.U.D.D	 - Blasts opponents with water. Can charge and aim at an angle. </p>
                    <p><span className="move">Final Smash</span> Mario Finale - Mario unleashes a devastating torrent of fire in the direction he is facing. The attack covers a wide range and travels far, so it's best to fire this after you jump. </p>
                    <img className="CharacterFS" src={MarioFS} alt="MarioFS" />
                    <br />
                    <button className="button mt-2" onClick={this.backToCharSelect} >
                        <img className="icon" src={SmashIcon} alt="icon" />
                        Back to Character Select</button>
                </div>
            </div>
        )
    }
}