import React, { useEffect } from "react";
import styles from './DialogHeader.module.css'
function DialogHeader({user}) {
    useEffect(()=>{
        console.log(user)
    }, [user])
    return (
        <div className={styles.dialogHeader}>
            <div className={styles.userAbout}>
                <img src={`./img/users/${user.avatar}`} alt="" className={styles.userAvatar} />
                <div className={styles.userInfo}>
                    <h2>{user.nickname}</h2>
                    <p>{user.status}</p>
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