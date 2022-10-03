import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import BtnLogOut from "./BtnLogOut";
import './LeftSideMenu.css'
function LeftSideMenu(){
    return(
        <div className="left-side-container">
            <UserInfo username={"Henry Jabbawockiez"} photo_link={"./img/profile_photo.svg"}/>
            <NavBar/>
            <BtnLogOut/>
        </div>
    )
}

export default LeftSideMenu;