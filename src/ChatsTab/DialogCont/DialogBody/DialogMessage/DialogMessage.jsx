import React from "react";
import styles from './DialogMessage.module.css'

function DialogMessage(){

    return(
        <div className={styles.dialogMessageCont}>
            <img src="./img/users/nika_jerrardo.svg" alt="" className={styles.avatar}/>
            <div className={styles.textCont}>
                <p>text in the message</p>
            </div>
            <div className={styles.more}>
                <img src="./img/dialog_icons/more_horizontal.svg" alt="" />
            </div>
        </div>
    )
}

export default DialogMessage;