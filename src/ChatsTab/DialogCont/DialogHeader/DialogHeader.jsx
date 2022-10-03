import React from "react";
import styles from './DialogHeader.module.css'
function DialogHeader() {

    return (
        <div className={styles.dialogHeader}>
            <div className={styles.userAbout}>
                <img src="./img/users/nika_jerrardo.svg" alt="" className={styles.userAvatar} />
                <div className={styles.userInfo}>
                    <h2>Nika Jerrado</h2>
                    <p>last online 5 hours ago</p>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.attachIcon}>
                        <img src="./img/dialog_icons/dialog_attach.svg" alt="" />
                    </div>
                    <div className={styles.moreIcon}>
                        <img src="./img/dialog_icons/more_vertical.svg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DialogHeader;