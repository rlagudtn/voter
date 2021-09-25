import { useEffect, useState } from "react";
import "./NewsListPage.css"
import { searchWord } from "./SearchWord";

function NewsListPage(props){
    
    let [start,changeStart]=useState(0);
    let newsSize=10;
    let [keyword,changeKeyword]=useState(props.keyword);
    let [newsList,changeNewsList]=useState([]);
    useEffect(()=>{
        searchWord(changeNewsList,props.keyword,newsSize);
        console.log(newsList);
    },[props.keyword])
    
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