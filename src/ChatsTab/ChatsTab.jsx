import React from "react";
import ChatsCont from "./ChatsCont";
import DialogCont from "./DialogCont";
import styles from './ChatsTab.module.css'
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function ChatsTab() {
    
    return (
            <div className={styles.chatsTab}>
                <ChatsCont/>
                {/* <DialogCont /> */}
                <Routes>
                    <Route path="/:id" element={<DialogCont />} />
                </Routes>
            </div>
    );
}

export default ChatsTab;