// Menu is used in the root of the app, being shown in the entire application

import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ id, name, description }) => (
    <div className="top-nav fixed-top">
        <Link to="/home">Home</Link>
    </div>
)

export default Menu