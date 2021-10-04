import axios from "axios";

export function searchWord(changeNews,word,start,end,size=10000) {
    let requestUrl = "http://tools.kinds.or.kr:8888/search/news";
    let datas = {
        "access_key": "16ca0e32-df44-4e27-84db-45f6604fad18",
        "argument": {
            "query": {
                "title":word
            },
            "published_at": {
                "from": start,
                "until": end
            },
            "provider": [
                ""
            ],
            "category": [
                "정치>정치일반",
            ],
            "category_incident": [
                ""
            ],
            "byline": "",
            "provider_subject": [
                "정치"
            ],
            "subject_info": [
                ""
            ],
            "subject_info1": [
                ""
            ],
            "subject_info2": [
                ""
            ],
            "subject_info3": [
                ""
            ],
            "subject_info4": [
                ""
            ],
            "sort": { "date": "desc" },
            "hilight": 200,
            "return_from": 0,
            "return_size": size,
            "fields": [
                "byline",
                "category",
                "category_incident",
                "provider_news_id"
            ]
        }

    }
    axios.post(requestUrl, datas).
        then(Response => {
            changeNews(Response.data.return_object.documents);
            console.log("post");
        }).catch(function(error){
            console.log("error");
        })

}

export function getNewsDetail(changeDetail,newsId){
    let requestUrl = "http://tools.kinds.or.kr:8888/search/news";
    let data={
        "access_key": "16ca0e32-df44-4e27-84db-45f6604fad18",
        "argument": {

            "news_ids": [
                newsId
            ],
            "fields": [
                "content",
                "byline",
                "category",
                "category_incident",
                "images",
                "provider_subject",
                "provider_news_id",
                "publisher_code"
            ]
        }
    }

    axios.post(requestUrl, data).
        then(Response => {
            console.log(Response.data.return_object.documents);
            changeDetail(Response.data.return_object.documents[0]);
        })
}
