import React from "react";

function UserInfo({username, photo_link}){
    
    return(
        <div className="user-info">
            <img src={photo_link} alt="profile_photo" className="profile_photo" />
            <p className="user-info-username">{username}</p>
        </div>
    )
}

export default UserInfo;