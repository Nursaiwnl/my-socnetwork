import React from "react";
import s from "./DialogItems.module.css";
import {NavLink} from "react-router-dom";
const DialogItems=(props)=>{
    let path = "/dialog/"+props.id;
    return <div className={s.dialog}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
}





export default DialogItems;