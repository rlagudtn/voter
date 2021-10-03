import { useState } from 'react';
import { Navbar, Nav, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';
import logo from '../static/로고1.png';
function NavMenu(props) {
    let changeKeyword = props.changeKeyword;
    let [search, changeSearch] = useState("");
    let [searchToggle, changeSearchToggle] = useState(0);

    return (
        <div className="navbar-menu">
            <Link to={{
                    pathname: '/',

                }}>
            <div className="logo">
                <img className="logo-img" src={logo} alt="" />
                <h1>VOTER</h1>
            </div>
            </Link>
            <div className="menu-list">
                <div className="menu-items">
                    <li className="menu-item ">대통령 선거</li>
                    <li className="updown"></li>
                    <li className="menu-item">국회의원 선거</li>
                    <li className="updown"></li>
                    <li className="menu-item">지방 선거</li>
                </div>
                
            </div>
            <div className="search">
                    <input className="searchInput"
                        placeholder="검색어를 입력하세요"
                        aria-label="Recipient's username"
                        onChange={(e) => {
                            changeSearch(e.target.value);
                        }}
                    // aria-describedby="basic-addon2"
                    />

                <Link to={{
                    pathname: '/NewsListPage',

                }}>
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => {
                        changeKeyword(search);
                    }}>
                        검색
                    </Button>
                </Link>
            </div>
           

        </div>
    );

}

export default NavMenu;