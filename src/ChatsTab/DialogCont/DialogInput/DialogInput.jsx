import React from "react";
import styles from "./DialogInput.module.css"

function DialogInput(){

    return(
        <div className={styles.dialogInputCont}>
            <img src="./img/dialog_icons/add.svg" alt="" className={styles.addIcon}/>
            <input type="text" placeholder="Type a message here" />
            <img src="./img/dialog_icons/smile.svg" alt="" className={styles.smileIcon} />
            <img src="./img/dialog_icons/send.svg" alt="" className={styles.sendIcon} />
        </div>
    )
}

export default DialogInput;