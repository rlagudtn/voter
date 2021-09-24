import logo from './logo.svg';
import './App.css';
import NavMenu from './NavMenu';
import {Nav} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './News.js';
import Promise from './Promise.js';
import Keyword from './Keyword.js';
import loading from './person.png';
import keyword from './워드 클라우드.jpg';
import age from './연령별.jpg';
import candidatesData from './Candidate.js';
import {CSSTransition} from 'react-transition-group';
import Candidate from './Candidate.js';
import axios from 'axios';
function App() {
  let [candidatesInfo,changeCandidatesInfo]=useState(candidatesData);
  let [currentCandidate,currentCandidateChange]=useState(candidatesInfo[0]);
  let [candidateTab,changeCandidateTab]=useState(0);
  let [candidateToggle,changeCandidateToggle]=useState(false);
  let [previewNews,changePreviewNews]=useState([0,0,0,0,0]);
  function sendCandidateName(candidateId){
    let candidateName=candidatesInfo[candidateId].name;

    let requestUrl="http://tools.kinds.or.kr:8888/search/news";
    let datas = {
      "access_key": "16ca0e32-df44-4e27-84db-45f6604fad18",
      "argument": {
          "query": candidateName,
          "published_at": {
              "from": "2021-06-08",
              "until": "2021-09-08"
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
          "sort": {"date": "desc"},
          "hilight": 200,
          "return_from": 0,
          "return_size": 5,
          "fields": [
              "byline",
              "category",
              "category_incident",
              "provider_news_id"
          ]
      }
    
  }
    axios.post(requestUrl,datas).
    then(Response=>{
      changePreviewNews(Response.data.return_object.documents);
      
    })
    
  }
  useEffect(()=>{
    sendCandidateName(candidateTab);
  },[])
  useEffect(()=>{
    console.log(previewNews);
    sendCandidateName(candidateTab);
  },[candidateTab]);
  return (
    <div className="App">
      <NavMenu className="navbar"></NavMenu>

      {/* Container */}
      <div className="main">
        <div className="candidates">
        <Nav variant="pills" defaultActiveKey="link-0" className="flex-column" activeKey={candidateTab}>
            <Nav.Item class="nav-item">
              <Nav.Link className="title" eventKey="disabled" disabled>제 22대<br/> 대통령 선거</Nav.Link>
            </Nav.Item>
            {
              candidatesInfo.map((candidate,i)=>{
                return (<Nav.Item>
                <Nav.Link  className="nav-item"  eventKey={i} onClick={()=>{currentCandidateChange(candidate)
                  ;changeCandidateTab(i);changeCandidateToggle(false);}}>기호 {candidate.id+1}번 {candidate.name}<br/> ({candidate.party})</Nav.Link>
              </Nav.Item>
              );
              })
            }
              
            </Nav>
        </div>
          <CSSTransition in={candidateToggle} classNames="candidateInfo" timeout={300}>
            <AboutCandidate candidates={candidatesInfo} currentTab={candidateTab} 
            previewNews={previewNews} changeToggle={changeCandidateToggle}/>
          </CSSTransition>
          
        
      </div>
      
    </div>
  );
}
function AboutCandidate(props){
  let currentCandidate=props.candidates[props.currentTab];
  useEffect(()=>{
    props.changeToggle(true);
  });
  return (
    <div className="aboutCandidate">
      <div className="candidateInfos">
        <div className="candidate">
          <img src={loading} alt="" />
          <div className="info">
            <h4>기호 {currentCandidate.id + 1}번 {currentCandidate.name}({currentCandidate.age})</h4>
            <p>소속: {currentCandidate.party}</p>
            <p>이력: 전 OO정당 당대표</p>
            <p>재산: {currentCandidate.property}</p>
            <p>공약 이행률: {currentCandidate.fulfillmentRate}%</p>
          </div>
        </div>

        <div className="promiseList">
          <div className="title">
            <h5><b>{currentCandidate.name} 후보 공약 목록</b></h5>
            <div className="promisePossiblity"><div className="spot">이행 가능성 </div></div>
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
        <div className="news">
          <h5><b>{currentCandidate.name} 후보 연관 뉴스</b></h5>
          {
            props.previewNews.map((news,i)=>{
              return <p>{news.title}</p>
            })
          }
          
          <button>더보기</button>
        </div>
      </div>
      <div className="candidateVisuals">
        <div className="wordCloud">
          <h5>키워드분석</h5>
          <img src={keyword} alt="" />
        </div>
        <div className="age">
          <h5>성별 및 연령대별 선호도</h5>
          <img src={age} alt="" />

        </div>
        <div className="graph"></div>
      </div>
    </div>
  );
}
export default App;
