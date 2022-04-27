import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";




const Dialog = (props) => {
    let melem = props.dialogp.dmessages.map(m=><Message message={m.message} />)
    let delem = props.dialogp.dnames.map(n=><DialogItems name={n.name} id={n.id} />)
    return (

        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { delem }
        </div>
            <div>
            {melem}
            </div>
    </div>)
} 

export default Dialog;