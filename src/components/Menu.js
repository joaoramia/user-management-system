// Menu is used in the root of the app, being shown in the entire application

import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ id, name, description }) => (
    <div>
        <p><Link to="/home">Home</Link></p>
    </div>
)

export default Menu