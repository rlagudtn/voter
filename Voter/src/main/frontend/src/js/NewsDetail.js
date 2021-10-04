import { useEffect, useState } from "react";
import { getNewsDetail } from "./SearchWord.js";
import "../css/NewsDetail.css"
import { createPortal } from "react-dom";
import { parseTime } from "./Parse.js";

function NewsDetail(props){
    let [detail,changeDetail]=useState({});
    useEffect(()=>{
        getNewsDetail(changeDetail,props.newsId);
    },[props.newsId])
    return (
        createPortal(
            <div className="NewsDetail"  >
                <button className="close" onClick={()=>{
                    props.setIsShowing(false);
                }}>X</button>
                <h1>{detail.provider}</h1>
                <div className="title">{detail.title}
                <div className="news-etc">
                    {/* <div>{parseTime(detail.published_at)}</div> */}
                    {/* <div>{detail.byline}</div> */}
                </div>
                </div>
                
                <div className="content">{detail.content}</div>
            </div>,
            document.getElementById("modal")
        )
        
    );
}
export default NewsDetail;