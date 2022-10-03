import React from "react";
import styles from './DialogBody.module.css'
import DialogMessage from "./DialogMessage";
function DialogBody(){

    return(
        <div className={styles.dialogBody}>
            <DialogMessage />
        </div>
    )
}

export default DialogBody;