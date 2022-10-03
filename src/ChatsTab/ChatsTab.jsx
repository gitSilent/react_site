import React from "react";
import ChatsCont from "./ChatsCont";
import DialogCont from "./DialogCont";
import styles from './ChatsTab.module.css'

function ChatsTab() {

    return (
        <div className={styles.chatsTab}>
            <ChatsCont />
            <DialogCont />
        </div>

    )
}

export default ChatsTab;