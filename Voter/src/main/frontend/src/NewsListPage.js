import { useEffect, useState } from "react";
import "./NewsListPage.css"

function NewsListPage(props){
    let [keyword,changeKeyword]=useState(props.location.state.search);
    useEffect(()=>{
        console.log(props);
    })
    return (
        <div className="NewsListPage">
            <h1>Hello</h1>
            
        </div>
    );
}

function NewsPreview(props){
    return (
        <div className="news-item">
            <h1>{props}</h1>
            <div className="subInfo">
                <a><b>언론사</b></a>&nbsp;
                <span> 2020년 9월 13일</span>
            </div>   
            <h4 className="news-title">제목</h4>
            <p className="content">내용</p>

        </div>
        
    );
}

export default NewsListPage;