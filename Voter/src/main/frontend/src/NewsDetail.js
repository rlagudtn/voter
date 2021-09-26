import { useEffect, useState } from "react";
import { getNewsDetail } from "./SearchWord.js";

function NewsDetail(props){
    let [detail,changeDetail]=useState({});
    useEffect(()=>{
        getNewsDetail(changeDetail,props.newsId);
    },[props.newsId])
    return (
        <div>
            <h1>{detail.title}</h1>
            <div>{detail.content}</div>
        </div>
    );
}
export default NewsDetail;