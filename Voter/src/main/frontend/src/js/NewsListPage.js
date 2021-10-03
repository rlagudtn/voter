import { useEffect, useState } from "react";
import "../css/NewsListPage.css"
import { searchWord } from "./SearchWord";

function NewsListPage(props){
    
    let [start,changeStart]=useState(0);
    let newsSize=10;
    let [keyword,changeKeyword]=useState(props.keyword);
    let [newsList,changeNewsList]=useState([]);
    useEffect(()=>{
        
        changeKeyword(props.keyword);
        return searchWord(changeNewsList,props.keyword,newsSize);
    },[props.keyword])
    
 
    return (
        <div className="NewsListPage">
            {
                newsList.map((item,i)=>{
                    return <NewsPreview key={i} news={item}></NewsPreview>
                })
            }
            
        </div>
    );
}

function NewsPreview(props){
    function parseTime(time){
        let ret=time.substring(0,10);
        return ret;
    }
    
    return (
        <div className="news-item">
            <div className="subInfo">
                <a className="provider"><b>{props.news.provider}</b></a>&nbsp;&nbsp;
                <span>{parseTime(props.news.published_at)} </span>
            </div> 
            <h4 className="news-title">{props.news.title}</h4>
            <div className="content">{props.news.hilight}</div>

        </div>
        
    );
}

export default NewsListPage;