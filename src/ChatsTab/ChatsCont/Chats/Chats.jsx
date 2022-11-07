import React from "react";
import Dialog from "./Dialog";

function Chats(){
    let chatsArray = [
        {avatar:'./img/users/luy_robin.svg',nickname:'Luy Robin', status:'writing...', msgText: 'text in the message', qtyMsg:2, timeAgo:'1 minute ago'},
        {avatar:'./img/users/jared_sunn.svg',nickname:'Jared Sunn', status:'recording voice message', msgText: 'text in the message', qtyMsg:1, timeAgo:'1 minute ago'},
        {avatar:'./img/users/nika_jerrardo.svg',nickname:'Nika Jerrardo', status:'last online 5 hours ago', msgText: 'text in the message', qtyMsg:'', timeAgo:'3 days ago'},
        {avatar:'./img/users/david_amrosa.svg',nickname:'David Amrosa', status:'last online 5 hours ago', msgText: 'text in the message', qtyMsg:'', timeAgo:'3 days ago'},
        {avatar:'./img/users/luy_robin.svg',nickname:'David Amrosa', status:'last online 5 hours ago', msgText: 'text in the message', qtyMsg:'', timeAgo:'3 days ago'}
    ]
    
    
    return(
        <ul className="chats-list">
            {
                chatsArray.map((props,index)=>(
                    <Dialog avatar={props.avatar} nickname={props.nickname} status={props.status} msgText={props.msgText} qtyMsg={props.qtyMsg} timeAgo={props.timeAgo} index={index}/>
                ))
            }
        </ul>
        
    )
}

export default Chats;