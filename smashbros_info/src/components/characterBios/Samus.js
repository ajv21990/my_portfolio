import React from 'react'
import NavBar from '../navBar/NavBar'

import SmashIcon from '../../images/Smash_Icon.png'
import SamusImage from '../../images/samus/Samus_Image.png'
import DarkSamus from '../../images/samus/DarkSamus_Image.png'
import DarkSamusFS from '../../images/samus/DarkSamusFS.gif'
import '../characterSelect/CharacterSelect.css'
import '../../images/mario/MarioCSS.css'


export default class Link extends React.Component {
    backToCharSelect = () => this.props.history.push("/character_select")

    render() {
        return (
            <div>
                <NavBar />
                <div className="SamusBG">
                    <h1>Samus</h1>
                    <img className="CharacterImage" src={SamusImage} alt="Samus" />
                    <p>With her Charge Shot, Missile and Bomb, Samus has three different projectiles to keep her opponents in check from a distance. When fully charged up, her Charge Shot is quite powerful. For her Final Smash, she launches a wide laser beam that can be moved up and down!</p>
                    <h3>Moveset</h3>
                    <p><span className="move">Neutral Special</span> Charge Shot - Charges up a projectile while on the ground or in midair. Can keep the charge after dodging or shielding,  </p>
                    <p><span className="move">Side Special</span> Missle - Launches a homing missile. Flickering rather than tilting the control stick launches a Super Missile. </p>
                    <p><span className="move">Up Special</span> Screw Attack	- Strikes opponents while spinning. Acts as a jump if used in midair. </p>
                    <p><span className="move">Down Special</span> Bomb - Hits opponents several times while spinning up into the air.</p>
                    <p><span className="move">Final Smash</span> Zero Laser - Samus unleashes a massive long-range beam. You can angle the beam up or down while firing. Fighters are drawn to the center, and the attack repeatedly hits any foes caught in its blast. </p>
                    <img className="CharacterFS" src={DarkSamusFS} alt="Dark Samus FS" />
                    <br />
                    <h1>Dark Samus</h1>
                    <img className="CharacterImage" src={DarkSamus} alt="Dark Samus" />
                    <p>Dark Samus joins the battle as Samus's echo fighter. With floatier movement, she's a little different from Samus--and she doesn't roll when dodging or jumping. If you look closely, you can see that her bombs and missiles look a little different, too.</p>
                    <button className="button mt-2" onClick={this.backToCharSelect} >
                        <img className="icon" src={SmashIcon} alt="icon" />
                        Back to Character Select</button>
                </div>
            </div>
        )
    }
}