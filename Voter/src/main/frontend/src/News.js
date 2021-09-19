import './News.css';
function News(){
    return(
        <div>
            <NewsItem></NewsItem>
            <NewsItem></NewsItem>
            <NewsItem></NewsItem>
            <NewsItem></NewsItem>
        </div>
    );
}
function NewsItem(){
    return (
        <div className="newsItem">
            <p className="title">'아이폰13' 로즈골드 다음 달 17일 출시 전망</p>
            <p className="view"> 👁 10만 </p>
        </div>
    );

}
export default News;