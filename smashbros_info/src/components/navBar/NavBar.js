import React from 'react'
import '../characterSelect/CharacterSelect.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => (
    <div className="navbarDropdown">
        <button type="submit" className="dropBtn" >
            <span className="SmashBtn">Smash Menu</span>
        </button>
        <div className="dropContent">
            <Link to="/character_select">Character Select</Link>
            <a href="https://github.com/ajv21990/my_portfolio" target="_blank" rel="noopener noreferrer">My Work</a>
        </div>
    </div>
)
export default Navbar