import React from "react";

function Dialog(props){
    return(
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
    )
}

export default Dialog;