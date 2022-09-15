import React from "react";
import NavElem from "./NavElem";

function NavBar(){
    let navElementsArray = [
        {href:'home', label:'home', link:'./img/home.svg'},
        {href:'chat', label:'chat', link:'./img/chat.svg'},
        {href:'contact', label:'contact', link:'img/person.svg'},
        {href:'notifications', label:'notifications', link:'img/bell.svg'},
        {href:'calendar', label:'calendar', link:'./img/calendar.svg'},
        {href:'settings', label:'settings', link:'./img/settings.svg'}        
    ]
    return(
        <nav className="left-navbar">
            {navElementsArray.map(({href, label, link})=>(
                <div className="nav-elem-div">
                    <NavElem href={href} label={label} link={link}/>
                </div>
            ))}
        </nav>
    )
    
}
export default NavBar;