import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Slide from './Slide'
import { GoThreeBars } from "react-icons/go";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [IsClick, setIsClick] = useState(false)
    return (
        <div className="Navbar Container">
            <div className="navbar-contain">
                
                <div className="navbar-logo">
                    <h2>Tonnam Shop</h2>
                </div>

                <div className={`navbar-header-xs ${showNav && "active"}`}>
                    <div className={IsClick === 1 && "actives"} onClick={()=> setIsClick(1)}><Link rel="stylesheet" to="/Home"><p>หน้าแรก</p></Link></div>
                    <div className={IsClick === 2 && "actives"} onClick={()=> setIsClick(2)}><Link rel="stylesheet" to="/Login"><p>ลงชื่อเข้าใช้</p></Link></div>
                    <div className={IsClick === 3 && "actives"} onClick={()=> setIsClick(3)}><Link rel="stylesheet" to="/About"><p>เกี่ยวกับเรา</p></Link></div>
                    <div className={IsClick === 4 && "actives"} onClick={()=> setIsClick(4)}><Link rel="stylesheet" to="/Contact"><p>ติดต่อเรา</p></Link></div>
                </div>

                <div className="navbar-header">
                    <Link rel="stylesheet" to="/Home"><p>หน้าแรก</p></Link>
                    <Link rel="stylesheet" to="/Login"><p>ลงชื่อเข้าใช้</p></Link>
                    <Link rel="stylesheet" to="/About"><p>เกี่ยวกับเรา</p></Link>
                    <Link rel="stylesheet" to="/Contact"><p>ติดต่อเรา</p></Link>
                </div>

                <div className="hamburger">
                    <GoThreeBars className="icon-burger" onClick={()=> showNav ? setShowNav(false) : setShowNav(true)}/>
                </div>

            </div>
            <div className="nav-slide">
                <Slide />
            </div>
        </div>
    )
}
