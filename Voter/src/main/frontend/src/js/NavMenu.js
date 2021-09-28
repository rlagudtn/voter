import { useState } from 'react';
import {Navbar,Nav,Container,InputGroup,FormControl,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';
import logo from '../static/로고1.png';
function NavMenu (props){
    let changeKeyword=props.changeKeyword;
    let [search,changeSearch]=useState("");
    let [searchToggle,changeSearchToggle]=useState(0);
    
    return (
        <div className="navbar-menu">
            <div className="logo">
            <img className="logo-img" src={logo} alt="" />
                        <h1>VOTER</h1>
            </div>
            <div className="menu-list">
                <li className="menu-item ">대선</li>
                <li className="menu-item">국회의원</li>
                <li className="menu-item">지방자치단체장 및 지방의회</li>
            </div>
            <InputGroup className="mb-0 search">
                        <div >
                            <FormControl className="searchInput"
                                placeholder="검색어를 입력하세요"
                                aria-label="Recipient's username"
                                onChange={(e)=>{
                                    changeSearch(e.target.value);
                                }}
                            // aria-describedby="basic-addon2"
                            />
                            
                        </div>
                            <Link to={{
                                pathname: '/NewsListPage',
                                
                            }}>
                                <Button variant="outline-secondary" id="button-addon2" onClick={()=>{
                                    changeKeyword(search);
                                }}>
                                    버튼
                                </Button>
                            </Link>
                    </InputGroup>
            
        </div>
    );

}

export default NavMenu;