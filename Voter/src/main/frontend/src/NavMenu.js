
import {Navbar,Nav,Container,InputGroup,FormControl,Button} from 'react-bootstrap';
import './NavMenu.css';
import logo from './로고1.png';
function NavMenu (){
    return (
        <div>
            <Navbar bg="light" variant="light" >
                <Container className="navbar-menu">
                    <div>
                    <Navbar.Brand className="title" href="#home">
                        <img className="logo" src={logo} alt="" />
                        <h1>VOTER</h1>
                       </Navbar.Brand>

                    </div>
                    <div>
                    <Nav className="menu">
                        <Nav.Link className="mr-5" >대선</Nav.Link>
                        <Nav.Link className="mr-5" >국회의원</Nav.Link>
                        <Nav.Link className="mr-5">지방자치단체장 및 지방의회</Nav.Link>
                    </Nav>
                    </div>
                    <div>
                    <InputGroup className="mb-0">
                        <div className="col-xs-6">
                            <FormControl
                                placeholder="검색어를 입력하세요"
                                aria-label="Recipient's username"
                            // aria-describedby="basic-addon2"
                            />
                            
                        </div>
                        <Button variant="outline-secondary" id="button-addon2">
                            검색
                        </Button>
                    </InputGroup>
                    </div>
                    
                </Container>
            </Navbar>
        </div>
    );

}

export default NavMenu;