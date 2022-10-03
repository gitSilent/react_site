import React from "react";
import NavElem from "./NavElem";
import { BrowserRouter, NavLink } from "react-router-dom";

function NavBar(){
    let navElementsArray = [
        {href:'home', label:'home', link:'./img/home.svg'},
        {href:'chat', label:'chat', link:'./img/chat.svg'},
        {href:'contact', label:'contact', link:'img/person.svg'},
        {href:'notifications', label:'notifications', link:'img/bell.svg'},
        {href:'calendar', label:'calendar', link:'./img/calendar.svg'},
        {href:'settings', label:'settings', link:'./img/settings.svg'}        
    ]
    return (
        <BrowserRouter> 
        <nav className="left-navbar">
            {navElementsArray.map(({href, label, link})=>(
                <div className="nav-elem-div">
                    <NavLink to={href}  >
                        <NavElem link={link} label={ label}/>
                    </NavLink>
                </div>
            ))}
            </nav>
        </BrowserRouter>
    )
    
}
export default NavBar;