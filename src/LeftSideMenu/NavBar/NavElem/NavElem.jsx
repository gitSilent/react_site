import React from "react";
// import './NavElem.css'
function NavElem({href, label, link}){
    console.log(href, label, link)
    return(
        <a href={href} className="nav-elem">
            <img src={link} alt="label" />
            <p>{label}</p>
        </a>
        // <a href=""></a>
    )
}

export default NavElem;