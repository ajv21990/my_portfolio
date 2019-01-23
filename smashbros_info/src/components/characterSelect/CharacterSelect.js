import React from 'react'
import NavBar from '../navBar/NavBar'

//Pictures
import Mario from '../../images/mario/Mario_Icon.jpg'
import DK from '../../images/dk/dk.png'
import Link from '../../images/link/link_icon.png'
import Samus from '../../images/samus/Samus_Icon.png'
import Yoshi from '../../images/yoshi/Yoshi_Icon.png'
import Kirby from '../../images/kirby/Kirby_Icon.png'
import Fox from '../../images/fox/fox_Icon.png'
import Pikachu from '../../images/pikachu/Pika_Icon.png'
import Luigi from '../../images/luigi/luigi_Icon.png'
import Ness from '../../images/ness/Ness_Icon.png'
import CapFalc from '../../images/cptFalcon/CptFalcon_Icon.png'
import Jiggy from '../../images/jigglypuff/Jiggy_Icon.png'


//CSS Style Sheet
import '../characterSelect/CharacterSelect.css'
import '../../images/mario/MarioCSS.css'


export default class CharacterSelect extends React.Component {
    componentDidMount = () => window.scrollTo(0, 0)
    GoHome = evt => {
        evt.preventDefault();
        console.log("clicked")
    }


    gotoMario = () => this.props.history.push("/mario")
    gotoDK = () => this.props.history.push("/dk")
    gotoLink = () => this.props.history.push("/link")
    gotoSamus = () => this.props.history.push("/samus")
    gotoPikachu = () => this.props.history.push("/pikachu")


    render() {
        return (
            <div>
                <NavBar
                    handleClick={this.GoHome}
                />
                <div className="characterSelectBackground">
                    <h1 className="title">Select a Character</h1>
                    <div className="FirstRow">
                        <img src={Mario} alt="Mario Icon" onClick={this.gotoMario} className="CharacterSelect" />
                        <img src={DK} alt="DK Icon" onClick={this.gotoDK} className="CharacterSelect" />
                        <img src={Link} alt="Link Icon" onClick={this.gotoLink} className="CharacterSelect" />
                        <img src={Samus} alt="Samus Icon" onClick={this.gotoSamus} className="CharacterSelect" />
                        <img src={Yoshi} alt="Yoshi Icon" onClick={this.gotoYoshi} className="CharacterSelect" />
                        <img src={Kirby} alt="Kirby Icon" onClick={this.gotoKirby} className="CharacterSelect" />
                        <img src={Fox} alt="Fox Icon" onClick={this.gotoFox} className="CharacterSelect" />
                        <img src={Pikachu} alt="Pikachu Icon" onClick={this.gotoPikachu} className="CharacterSelect" />
                        <img src={Luigi} alt="Luigi Icon" onClick={this.gotoPikachu} className="CharacterSelect" />
                        <img src={Ness} alt="Ness Icon" onClick={this.gotoPikachu} className="CharacterSelect" />
                        <img src={CapFalc} alt="CapFalc Icon" onClick={this.gotoPikachu} className="CharacterSelect" />
                        <img src={Jiggy} alt="Jiggy Icon" onClick={this.gotoPikachu} className="CharacterSelect" />
                    </div>

                </div>
            </div>
        )
    }
}