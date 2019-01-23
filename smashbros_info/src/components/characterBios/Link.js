import React from 'react'
import NavBar from '../navBar/NavBar'
import LinkImage from '../../images/link/Link_Image.png'
import SmashIcon from '../../images/Smash_Icon.png'
import LinkArrow from '../../images/link/Link_Arrow.gif'

import '../characterSelect/CharacterSelect.css'
import '../../images/mario/MarioCSS.css'

export default class Link extends React.Component {
    backToCharSelect = () => this.props.history.push("/character_select")

    render() {
        return (
            <div>
                <NavBar />
                <div className="LinkBG">
                    <h1>Link</h1>
                    <img className="CharacterImage" src={LinkImage} alt="Link" />
                    <p>Link has been redesigned to match his appearance in The Legend of Zelda: Breath of the Wild. He can now pick up arrows he's fired, and his bombs have been upgraded to remote bombs, so you can set them off when the timing is just right!</p>
                    <h3>Moveset</h3>
                    <p><span className="move">Neutral Special</span> Bow and Arrows - Shoots an arrow — two at once if one is picked up off the ground. Can be charged by holding the button. </p>
                    <p><span className="move">Side Special</span> Boomerang - Throws a boomerang diagonally. The control stick can be flicked for extra power and distance.  </p>
                    <p><span className="move">Up Special</span> Spin Attack	- Strikes opponents while spinning. Acts as a jump if used in midair. </p>
                    <p><span className="move">Down Special</span> Remote Bomb - Creates a remote bomb with the Sheikah Slate. Down special again detonates it.   </p>
                    <p><span className="move">Final Smash</span> Ancient Bow and Arrow - Link shoots an Ancient Arrow that flies straight ahead, If the arrow hits an opponent or the terrain, it explodes. You can only hit one fighter, but the explosion also launched nearby opponents.</p>
                    <img className="CharacterFS" src={LinkArrow} alt="Link Arrow" />
                    <br />
                    <button className="button mt-2" onClick={this.backToCharSelect} >
                        <img className="icon" src={SmashIcon} alt="icon" />
                        Back to Character Select</button>
                </div>
            </div>
        )
    }
}