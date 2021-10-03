import logo from './logo.svg';
import './App.css';
import NavMenu from './js/NavMenu.js';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import NewsListPage from './js/NewsListPage.js';
import NewsDetail from './js/NewsDetail.js';
import Main from './js/Main.js';
function App() {
  
  let [keyword,changeKeyword]=useState("");
  let [previewNews,changePreviewNews]=useState([0,0,0,0,0]);
  let [newsIndex,changeNewsIndex]=useState(0);
  
  return (
    <div className="App">
      <NavMenu className="navbar"changeKeyword={changeKeyword}
      ></NavMenu>

      {/* Container */}
      <Route exact path="/">
        
        <Main keyword={keyword} changeKeyword={changeKeyword}
      previewNews={previewNews} changePreviewNews={changePreviewNews}
       newsIndex={newsIndex} changeNewsIndex={changeNewsIndex}></Main>
      </Route>
      
      <Route path="/NewsListPage/"  >
        <NewsListPage keyword={keyword}/>
      </Route>
      <Route path="/NewsDetail">
        <NewsDetail newsId={previewNews[newsIndex].news_id}></NewsDetail>
      </Route>
        
    </div>
  );
}



export default App;
