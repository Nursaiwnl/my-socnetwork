import {rerenderEntireTree} from "../rerendertree";

let state = {
    profilePage:{
    dposts : [
        {id:1,message:"Hey it's my 1'st post",l:15},
        {id:2,message:"The weather is fine today!",l:20}
    ]},
    dialogPage:{
    dmessages:[
        {id:1, message:"Hey,yo wsp?"},
        {id:2, message:"????"},
        {id:3, message:"yo"},
        {id:4, message:"Hey,yo"},
        {id:5, message:"wsp?"},
        {id:6, message:"yo wsp?"}
    ],
    dnames:[
        {id:1, name:"Tesla"},
        {id:2, name:"Kia"},
        {id:3, name:"Niko"},
        {id:4, name:"Timo"},
        {id:5, name:"Aros"},
        {id:6, name:"Leia"},
    ]}
}

export let addPost = (postMessage) =>{
    let newPost = {
        id:5,
        message: postMessage,
        l:0
    };

    state.profilePage.dposts.push(newPost);
    rerenderEntireTree(state);
}
export default state;