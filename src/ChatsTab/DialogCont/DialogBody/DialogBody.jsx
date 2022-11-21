import React from "react";
import { useEffect } from "react";
import styles from './DialogBody.module.css'
import DialogMessage from "./DialogMessage";
function DialogBody({user}){

    useEffect(()=>{

    },)
    return(
        <div className={styles.dialogBody}>
            {
                user.messages.map((msg, index)=>(

                    <DialogMessage avatar={user.avatar} text={msg.text} type={msg.type}/>
                ))
            }
        </div>
    )
}

export default DialogBody;