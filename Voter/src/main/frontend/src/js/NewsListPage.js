import { useEffect, useState } from "react";
import "../css/NewsListPage.css"
import NewsDetail from "./NewsDetail";
import { searchWord } from "./SearchWord";

function NewsListPage(props){
    
    let [start,changeStart]=useState(0);
    let newsSize=10;
    let [keyword,changeKeyword]=useState(props.keyword);
    let [newsList,changeNewsList]=useState([]);
    let [currentNewsId,setCurrentNewsId]=useState(0);
    useEffect(()=>{
        
        changeKeyword(props.keyword);
        return searchWord(changeNewsList,props.keyword,newsSize);
    },[props.keyword])
    
    // 뉴스 모달창 관련
    let[isShowing,setIsShowing]=useState(false);
    function openModal(newsId){
        setIsShowing(true);
        setCurrentNewsId(newsId);
    }
    //뉴스 모달창 닫기
    useEffect(()=>{
        if(isShowing){
            const notiTimer=setTimeout(()=>{
                setIsShowing(false);
            },10000);
            return ()=>clearTimeout(notiTimer);
        }
    },[isShowing]);
 
    return (
        <div className="NewsListPage">
            <div className="container">
            <h3 className="search-title">
                {props.keyword}<br/>뉴스 검색 결과
            </h3>
            
            {
                newsList.map((item,i)=>{
                    return (
                        <div onClick={()=>{openModal(item.news_id);console.log(item.title);console.log(item.news_id)}}>
                            <NewsPreview key={i} news={item} ></NewsPreview>
                        </div>
                    )
                })
            }
            
            </div>
            <div>{isShowing && <NewsDetail newsId={currentNewsId} ></NewsDetail>}</div>

            
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
            <img src="https://www.bigkinds.or.kr/resources/images/02100311/2021/10/02/02100311.20211002165632001.01.jpg" alt="" />
            <h5 className="title">{props.news.title}</h5>
            <div className="content">{props.news.hilight}</div>
            <div className="etc">
                    <h5>{props.news.provider}</h5>

                    <p>{props.news.byline}</p>
                    {parseTime(props.news.published_at)}

                
            </div>
            
        </div>
        
    );
}

export default NewsListPage;