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

function Main(props) {
    let changePreviewNews = props.changePreviewNews;
    let [candidatesInfo, changeCandidatesInfo] = useState(candidatesData);
    let [currentCandidate, currentCandidateChange] = useState(candidatesInfo[0]);
    let [candidateTab, changeCandidateTab] = useState(0);
    let [candidateToggle, changeCandidateToggle] = useState(false);
    let previewSize = 5;

    // 뉴스 클릭 index
    useEffect(() => {
        Search.searchWord(changePreviewNews, currentCandidate.name, previewSize);

    }, [])
    useEffect(() => {
        Search.searchWord(changePreviewNews, currentCandidate.name, previewSize);
        currentCandidate = candidatesInfo[candidateTab];
    }, [candidateTab]);

    useEffect(() => {

    })
    return (
        <div className="main">
            <div className="candidates">
                <Nav variant="pills" defaultActiveKey="link-0" className="flex-column" activeKey={candidateTab}>
                    <h5 className="title">제 22대<br /> 대통령 선거</h5>
                    {
                        candidatesInfo.map((candidate, i) => {
                            return (<Nav.Item>
                                <Nav.Link className="nav-item" eventKey={i} onClick={() => {
                                    currentCandidateChange(candidate)
                                        ; changeCandidateTab(i); changeCandidateToggle(false);
                                }}>기호 {candidate.id + 1}번 {candidate.name}<br /> ({candidate.party})</Nav.Link>
                            </Nav.Item>
                            );
                        })
                    }

                </Nav>
            </div>
            {/* <CSSTransition in={candidateToggle} classNames="candidateInfo" timeout={300}>
                    
                </CSSTransition> */}
            {/* 후보자 정보 */}
            <div className="candidate box-item">

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
                    <div className="title">
                        <h5>{currentCandidate.name} 후보 공약 목록</h5>
                        <div className="promisePossiblity">이행 가능성 </div>
                    </div>
                </div>

                <div className="promise-title">
                    <p>1.[국방] 강한 안보, 강한 대한민국 </p>
                    <div className="possiblity">80%</div>
                </div>
                <div className="promise-title">
                    <p>2.[재정경제]기업에 자유를,서민에게 기회 제공을</p>
                    <div className="possiblity">69%</div>
                </div>
                <div className="promise-title">
                    <p>3.[정보통신]개천에서 용 나는 교육 인프라 구축</p>
                    <div className="possiblity">73%</div>
                </div>


                <button>더보기</button>
            </div>
            {/* 연관 뉴스 */}
            <div className="news  box-item">
                <div className="box-title">
                    <h5>{currentCandidate.name} 후보 연관 뉴스</h5>
                </div>

                {
                    props.previewNews.map((news, i) => {
                        return <Link to="/NewsDetail"><p onClick={() => {
                            props.changeNewsIndex(i)
                        }
                        }>{news.title}</p></Link>
                    })
                }
                <Link to={{
                    pathname: '/NewsListPage',

                }}>
                    <button onClick={() => { props.changeKeyword(currentCandidate.name) }}>더보기</button>
                </Link>

            </div>
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