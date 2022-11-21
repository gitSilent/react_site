import React from "react";
import NavElem from "./NavElem";
import { BrowserRouter, NavLink } from "react-router-dom";
import styles from'./NavBar.module.css'

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
        <nav className={styles.left_navbar}>
          {navElementsArray.map(({ href, label, link }) => (
            <div className={styles.nav_elem_div}>
              <NavLink to={href} >
                <NavElem link={link} label={label}/>
              </NavLink>
            </div>
          ))}
        </nav>
    );
    
}
export default NavBar;