import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ id, name, description }) => (
    <div>
        <p><Link to="/home">Home</Link></p>
    </div>
)

export default Menu