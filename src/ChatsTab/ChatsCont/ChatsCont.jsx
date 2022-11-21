import React from "react";
import ChatsHeader from "./ChatsHeader";
import ChatsInput from "./ChatsInput";
import Chats from "./Chats/Chats";
import './ChatsCont.css'
function ChatsCont({location, setLocation}){
    return(
        <div className="chats-cont">
            <ChatsHeader/>
            <ChatsInput/>
            <Chats/>
        </div>
        
    )
}

export default ChatsCont;