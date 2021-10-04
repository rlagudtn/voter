import { useEffect, useState } from "react";
import { getNewsDetail } from "./SearchWord.js";
import "../css/NewsDetail.css"
import { createPortal } from "react-dom";
function NewsDetail(props){
    let [detail,changeDetail]=useState({});
    useEffect(()=>{
        getNewsDetail(changeDetail,props.newsId);
    },[props.newsId])
    return (
        createPortal(
            <div className="NewsDetail" style={{width:"30%",left: "35%",top:"20%"}} >
                <h1>{detail.title}</h1>
                <div>{detail.content}</div>
            </div>,
            document.getElementById("modal")
        )
        
    );
}
export default NewsDetail;