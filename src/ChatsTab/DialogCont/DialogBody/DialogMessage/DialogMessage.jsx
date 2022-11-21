import React from "react";
import './DialogMessage.css'

function DialogMessage({avatar,text,type}){

    return(
        <div className={`dialogMessageCont${type}`}>
            <img src={`./img/users/${avatar}`} alt="" className={avatar}/>
            <div className={`textCont${type }`}>
                <p>{text}</p>
            </div>
            <div className="more">
                <img src="./img/dialog_icons/more_horizontal.svg" alt="" />
            </div>
        </div>
    )
}

export default DialogMessage;