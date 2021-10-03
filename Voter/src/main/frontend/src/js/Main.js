import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Nav } from 'react-bootstrap';
import '../css/Main.css';
import candidatesData from './Candidate.js';
import * as Search from "./SearchWord.js";

import age from '../static/연령별.jpg';
import loading from '../static/person.png';
import keyword from '../static/워드 클라우드.jpg';
import LeftSidebar from './LeftSidebar';

function Main(props) {
    let changePreviewNews = props.changePreviewNews;
    let [candidatesInfo, changeCandidatesInfo] = useState(candidatesData);
    let [currentCandidate, currentCandidateChange] = useState(candidatesInfo[0]);
    let [candidateTab, changeCandidateTab] = useState(0);
    let [candidateToggle, changeCandidateToggle] = useState(false);
    let previewSize = 3;


    // 뉴스 클릭 index
    useEffect(() => {
        Search.searchWord(changePreviewNews, currentCandidate.name, previewSize);

    }, [])
    useEffect(() => {
        Search.searchWord(changePreviewNews, currentCandidate.name, previewSize);
        currentCandidate = candidatesInfo[candidateTab];
    }, [candidateTab]);

    useEffect(() => {
        changeCandidateToggle(true);
    },[candidateTab])
    return (

        <div className="main">

            <div className="candidates">
                <LeftSidebar changeContent={currentCandidateChange} changeTab={changeCandidateTab}
                    changeToggle={changeCandidateToggle} items={candidatesInfo}>

                </LeftSidebar>
            </div>

            {/* 후보자 정보 */}
            <CSSTransition in={candidateToggle} classNames="candidateInfo" timeout={300}>

                <div className="contents">
                    <div className="candidateInfo">
                        <div className="candidate box-item">
                            <div className="box-title">
                                <h5>후보자 정보</h5>
                            </div>
                            <img src={loading} alt="" />
                            <div className="info">
                                <h5>기호 {currentCandidate.id + 1}번 {currentCandidate.name}({currentCandidate.age})</h5>
                                <p>소속: {currentCandidate.party}</p>
                                <p>이력: 전 OO정당 당대표</p>
                                <p>재산: {currentCandidate.property}</p>
                                <p>공약 이행률: {currentCandidate.fulfillmentRate}%</p>
                            </div>
                        </div>
                        {/* 공약 리스트 */}

                        <div className="promiseList box-item">
                            <div className="box-title">
                                <h5 className="title">후보 공약 목록</h5>
                                <div className="promisePossiblity">이행 가능성 </div>
                            </div>

                            <div className="promise-title">
                                <div className="promise-content">
                                    <p>1.[국방] 강한 안보, 강한 대한민국 </p>

                                </div>
                                <div className="possiblity">80%</div>
                            </div>
                            <div className="promise-title">
                                <div className="promise-content">

                                    <p>2.[재정경제]기업에 자유를,서민에게 기회 제공을</p>
                                </div>

                                <div className="possiblity">69%</div>
                            </div>
                            <div className="promise-title">
                                <div className="promise-content">

                                    <p>3.[정보통신]개천에서 용 나는 교육 인프라 구축</p>
                                </div>

                                <div className="possiblity">73%</div>
                            </div>


                            <button>더보기</button>
                        </div>
                    </div>


                    {/* 연관 뉴스 */}
                    <div className="news-content">
                        <div className="news box-item">
                            <div className="box-title">
                                <h5>NEWS</h5>
                            </div>

                            {
                                props.previewNews.map((news, i) => {
                                    return (
                                        <Link to="/NewsDetail">
                                            <div className="news-item" onClick={() => {
                                                props.changeNewsIndex(i)
                                            }
                                            }>
                                                <img src="https://www.bigkinds.or.kr/resources/images/02100311/2021/10/02/02100311.20211002165632001.01.jpg" alt="" />
                                                <p>{news.title}</p>
                                            </div>
                                        </Link>);
                                })
                            }
                            <Link to={{
                                pathname: '/NewsListPage',

                            }}>
                                <button onClick={() => { props.changeKeyword(currentCandidate.name) }}>더보기</button>
                            </Link>

                        </div>
                    </div>

                    <div className="candidateVisual">
                        {/* 키워드 크라우드 */}
                        <div className="wordCloud  box-item">
                            <div className="box-title">
                                <h5>키워드분석</h5>

                            </div>
                            <img src={keyword} alt="" />
                        </div>
                        {/* 연령대별 선호도 */}
                        <div className="age  box-item">
                            <div className="box-title">

                                <h5>성별 및 연령대별 선호도</h5></div>
                            <img src={age} alt="" />

                        </div>
                    </div>
                </div>
            </CSSTransition>


        </div>
    );
}
function AboutCandidate(props) {
    useEffect(() => {
        props.changeToggle(true);
    });
    return (
        <div className="aboutCandidate">

        </div>
    );
}

export default Main;