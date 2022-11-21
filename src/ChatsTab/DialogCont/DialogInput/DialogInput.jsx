import React from "react";
import { useState } from "react";
import styles from "./DialogInput.module.css"

function DialogInput({idDialog, dialogsDatabase, setDialogsDatabase}){
    const [enteredMsg, setEnteredMsg] = useState();

    function sendMessage(event){
        event.preventDefault();
        let tempDb = [...dialogsDatabase];
        tempDb[idDialog].messages.push({type:"Out", text:enteredMsg})
        setDialogsDatabase(tempDb);
        setEnteredMsg("")
        console.log(dialogsDatabase)
    }
    return(
        <div className={styles.dialogInputCont}>
            <img src="./img/dialog_icons/add.svg" alt="" className={styles.addIcon}/>
            <form action="" onSubmit={sendMessage}>
                <input type="text" placeholder="Type a message here" onInput={(event)=>{setEnteredMsg(event.target.value)}} value={enteredMsg} />
            </form>
            <img src="./img/dialog_icons/smile.svg" alt="" className={styles.smileIcon} />
            <img src="./img/dialog_icons/send.svg" alt="" className={styles.sendIcon} onClick={sendMessage}/>
        </div>
    )
}

export default DialogInput;