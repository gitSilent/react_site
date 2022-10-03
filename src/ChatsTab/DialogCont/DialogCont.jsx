import React from "react";
import DialogBody from "./DialogBody";
import styles from './DialogCont.module.css' 
import DialogHeader from "./DialogHeader";
import DialogInput from "./DialogInput";

function DialogCont(){

    return(
        <div className={styles.dialogCont}>
            <DialogHeader />
            <DialogBody />
            <DialogInput />
        </div>
    )
}

export default DialogCont;