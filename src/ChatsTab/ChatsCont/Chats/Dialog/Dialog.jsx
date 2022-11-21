import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Dialog.css"

function Dialog(props){
    useEffect(()=>{
        console.log(props.index)
        // console.log(loc)
    },[])
    return(
        <NavLink to={`${props.index}`} >
            <li className="dialog-li">
                <div className="dialog-cont">
                    <div className="dialog-user-info">
                        <img src={props.avatar} alt="avatar" className="dialog-avatar" />
                        <div className="dialog-nick-status-cont">
                            <h3 className="dialog-nickname">{props.nickname}</h3>
                            <p className="dialog-status">{props.status}</p>
                        </div>
                        <p className="dialog-last-online">{props.timeAgo}</p>
                    </div>
                <div className="dialog-msg-info">
                        <p className="dialog-msg">{props.msgText}</p>
                        {props.qtyMsg && <div className="dialog-qty-msg">{props.qtyMsg}</div>}
                </div>
                    
                </div>
            </li>
        </NavLink>
    )
}

export default Dialog;