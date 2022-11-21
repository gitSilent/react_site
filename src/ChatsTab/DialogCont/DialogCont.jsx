import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DialogBody from "./DialogBody";
import styles from './DialogCont.module.css' 
import DialogHeader from "./DialogHeader";
import DialogInput from "./DialogInput";

function DialogCont(props){
    let location = useLocation();
    let dialogsDb = [
        {
            avatar: "luy_robin.svg",
            nickname: "Luy Robin",
            status: "writing...",
            messages:[{type: "In", text:"just text in luy's message"},
            {type:"Out", text:"just out going meessage"},
            {type:"Out", text:"test message"}    
        ]
        },
        {
            avatar: "jared_sunn.svg",
            nickname: "Jared sunn",
            status: "recording voice message...",
            messages:[{type: "In", text:"just text in jared's message"},
            {type:"Out", text:"just out going meessage"},
            {type:"In", text:"incoming message"}]
        },
        {
            avatar: "nika_jerrado.svg",
            nickname: "Nika Jerrado",
            status: "last online 5 hours ago",
            messages:[{type: "In", text:"just text in nika's message"},
            {type:"Out", text:"just out going meessage"},
            {type:"Out", text:"outgoing message"}]
        },
        {
            avatar: "david_amrosa.svg",
            nickname: "David Amrosa",
            status: "last online 5 hours ago",
            messages:[{type: "In", text:"just text in david's message"},
            {type:"Out", text:"just out going meessage"},
            {type:"In", text:"have a nice day"}]
        },
        {
            avatar: "david_amrosa.svg",
            nickname: "David Amrosa",
            status: "last online 5 hours ago",
            messages:[{type: "In", text:"just text in david's message"},
            {type:"Out", text:"just out going meessage"},
            {type:"Out", text:"hello btw"}]
        }
    ]
    const [dialogsDatabase, setDialogsDatabase] = useState(dialogsDb);

    useEffect(()=>{
        console.log("database changed")
    },[dialogsDatabase])
    
    useEffect(()=>{
        
        console.log(location.pathname.split('/')[2]);
    },[location])
    return(
        
            <div className={styles.dialogCont}>
                <DialogHeader user = {dialogsDatabase[location.pathname.split('/')[2]]} />
                <DialogBody user = {dialogsDatabase[location.pathname.split('/')[2]]} />
                <DialogInput idDialog = {location.pathname.split('/')[2]} dialogsDatabase = {dialogsDatabase} setDialogsDatabase={setDialogsDatabase} />
            </div>
        
    )
}

export default DialogCont;