import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from '../src/components/landing/LandingPage'
import CharacterSelect from '../src/components/characterSelect/CharacterSelect'
import Mario from '../src/components/characterBios/Mario'
import DK from '../src/components/characterBios/DK'
import Link from '../src/components/characterBios/Link'
import Samus from '../src/components/characterBios/Samus'
import Chat from '../src/components/chatPage/ChatApp'

export default class Navagation extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/character_select" component={CharacterSelect} />
                    <Route exact path='/mario' component={Mario} />
                    <Route exact path='/dk' component={DK} />
                    <Route exact path='/link' component={Link} />
                    <Route exact path='/samus' component={Samus} />
                    <Route exact path='/chat' component={Chat} />

                </div>
            </Router>

        )
    }
}