import React from 'react'
import {Link} from 'react-router-dom'
import Slide from './Slide'

export default function Navbar() {
    return (
        <div className="Navbar Container">
            <div className="navbar-contain">
                <div className="navbar-logo">
                    <h2>Tonnam Shop</h2>
                </div>
                <div className="navbar-header">
                    <Link rel="stylesheet" to="/Home"><p>หน้าแรก</p></Link>
                    <Link rel="stylesheet" to="Login"><p>ลงชื่อเข้าใช้</p></Link>
                    <Link rel="stylesheet" to="/About"><p>เกี่ยวกับเรา</p></Link>
                    <Link rel="stylesheet" to="/Contact"><p>ติดต่อเรา</p></Link>
                </div>
            </div>
            <div className="nav-slide">
                <Slide />
            </div>
        </div>
    )
}
