import logo from './logo.svg';
import './App.css';
import NavMenu from './NavMenu';
import {Nav} from 'react-bootstrap';
import { useState } from 'react';
import News from './News.js';
import Promise from './Promise.js';
import Keyword from './Keyword.js';
import loading from './person.png';
import keyword from './워드 클라우드.jpg';
import age from './연령별.jpg';
function App() {
  let [candidate,candidateChange]=useState(0);
  let [horizonalTab,horizonalTabChange]=useState(0);
  return (
    <div className="App">
      {/* Navbar */}
      <NavMenu className="navbar"></NavMenu>

      {/* Container */}
      <div className="main">
        <div className="candidates">
        <Nav variant="pills" defaultActiveKey="link-0" className="flex-column" activeKey={horizonalTab}>
            <Nav.Item class="nav-item">
              <Nav.Link className="title" eventKey="disabled" disabled>제 22대 대통령 선거</Nav.Link>
            </Nav.Item>
              
              <Nav.Item>
                <Nav.Link  className="nav-item"  eventKey="0" onClick={()=>{horizonalTabChange(0)}}>기호 1번 OOO (OO정당)</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link className="nav-item" eventKey="1" onClick={()=>{horizonalTabChange(1)}}>기호 2번 OOO (OO정당)</Nav.Link>
              </Nav.Item >
              <Nav.Item >
                <Nav.Link className="nav-item" eventKey="2" onClick={()=>{horizonalTabChange(2)}}>기호 3번 OOO (OO정당)</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link className="nav-item" eventKey="3" onClick={()=>{horizonalTabChange(3)}}>기호 4번 OOO (OO정당)</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link className="nav-item" eventKey="4" onClick={()=>{horizonalTabChange(4)}}>기호 5번 OOO (OO정당)</Nav.Link>
              </Nav.Item>              
              <Nav.Item >
                <Nav.Link className="nav-item" eventKey="5" onClick={()=>{horizonalTabChange(5)}}>기호 6번 OOO (OO정당)</Nav.Link>
              </Nav.Item>
              
            </Nav>
        </div>
        <div className="aboutCandidate">
          <div className="candidateInfos">
            <div className="candidate">
              <img src={loading} alt="" />
              <div className="info">
                <h4>기호 1번 OOO(62세)</h4>
                <p>소속: OO정당</p>
                <p>이력: 전 OO정당 당대표</p>
                <p>재산: 30억5천555만3천원</p>
                <p>공약 이행률: 70%</p>
              </div>
            </div>
            <div className="promiseList">
              <div className="title">
                <h5>OOO 후보 공약 목록</h5>
                <div className="promisePossiblity"><div className="spot">이행 가능성 </div></div>
              </div>
              <div className="news-title">
                <p>1.[국방] 강한 안보, 강한 대한민국 </p>
                <div className="possiblity">80%</div>
              </div>
              <div className="news-title">
                <p>2.[재정경제]기업에 자유를,서민에게 기회 제공을</p>
                <div className="possiblity">69%</div>
              </div>
              <div className="news-title">
                <p>3.[정보통신]개천에서 용 나는 교육 인프라 구축</p>
                <div className="possiblity">73%</div>
              </div>
              
              
              {/* <p>4.[정치,사법윤리] 부패척결과 공공부문 개혁으로 사회부조리 처단</p>
              <p>5.[환경] 깨끗한 물과 맑은 공기로 청정 대한민국</p> */}
              <button>더보기</button>
            </div>
            <div className="news">
              <h5>OOO후보 연관 뉴스</h5>
              <p>OOO 후보 강세 '여야 탑 4 등극'</p>
              <p>OOO 후보 '현 정부, 부동산 정책 대실패</p>
              <button>더보기</button>
            </div>
          </div>
          <div className="candidateVisuals">
            <div className="wordCloud">
              <h5>키워드분석</h5>
              <img  src={keyword} alt="" />
            </div>
            <div className="age">
              <h5>성별 및 연령대별 선호도</h5>
              <img src={age} alt="" />

            </div>
            <div className="graph"></div>
          </div>
        </div>
        

        
          

          
          {/* <div className="aboutCandidate">
            <AboutCandidate sideTab={horizonalTab}></AboutCandidate>
          </div> */}
          

        

        
        
      </div>
      
    </div>
  );
}
function AboutCandidate(props){
  if(props.sideTab===0){
    return <Promise></Promise>

  }
  else if (props.sideTab===1){
    return <News></News>

  }
  else if (props.sideTab===2){
    return <Keyword></Keyword>
  }
}
export default App;
