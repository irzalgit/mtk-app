import React, { Component } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container,
//     Row,
//     Col,
//     Jumbotron,
//     Button
// } from 'reactstrap';
import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
 import {
   BrowserRouter as Router,
    Switch,
    Route,
   Link
  } from "react-router-dom";
  import About from './component/About';
  import Produk from './component/Produk';
 import Home from './component/Home';
 import Math from './component/Math';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
              <Router>
              <div>
              <Navbar bg="light" expand="lg">
                 <Container>
                  <Navbar.Brand href="/">Portal Bphy</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                       <Nav.Link as ={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link href="/Produk">Produk</Nav.Link>
                       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item as ={Link} to={"/math"}>Matematika</NavDropdown.Item>
                                <NavDropdown.Item href="#action/31">Fisika</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Kimia-Biologi</NavDropdown.Item>
                          <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">English</NavDropdown.Item>
                       </NavDropdown>
                   </Nav>
                   </Navbar.Collapse>
                  </Container>
                </Navbar>
                   
             </div>

       <div>


                   <Switch>
                      <Route path="/About">
                       <About />
                      </Route>
                    <Route path="/Math">
                       <Math />
                      </Route>
                      <Route path="/Produk">
                        <Produk />
                      </Route>
                      <Route path="/">
                        <Home />
                      </Route>
                   </Switch>
        </div>
                     </Router>
        );
    }

}
export default App;






// export default function App() {
//   return (

//     <Router>
// <div>
// <Jumbotron>
//                     <Container>
//                         <Row>
//                             <Col>
//                                 <h1>Welcome to React</h1>
//                                 <p>
//                                     <Button
//                                         tag="a"
//                                         color="success"
//                                         size="large"
//                                         href="http://reactstrap.github.io"
//                                         target="_blank"
//                                     >
//                                         View Reactstrap Docs
//                                     </Button>
//                                 </p>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Jumbotron>
// </div>



// <Navbar bg="light" expand="lg">
//    <Container>
//     <Navbar.Brand href="/">Portal Bphy</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//      <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link as ={Link} to={"/about"}>About</Nav.Link>
//          <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//            <NavDropdown.Divider />
//          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//     </Nav>
//      </Navbar.Collapse>
//    </Container>
//  </Navbar>



//       <div>
       

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/About">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Produk />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


                 // <Jumbotron>
                 //    <Container>
                 //        <Row>
                 //            <Col>
                 //                 <h1>Portal Peta Pikiran</h1>
                 //                 <p>
                 //                    <Button
                 //                         tag="a"
                 //                         color="success"
                 //                        size="large"
                 //                        href="http://irzalgit.github.io"
                 //                        target="_blank"
                 //                    >
                 //                        View Reactstrap Docs
                 //                    </Button>
                 //                </p>
                 //             </Col>
                 //         </Row>
                 //     </Container>
                 // </Jumbotron>
            
            
                // <Navbar color="inverse" light expand="md">
                //     <NavbarBrand href="/">Bphy</NavbarBrand>
                //     <NavbarToggler onClick={this.toggle} />
                //     <Collapse isOpen={this.state.isOpen} navbar>
                //         <Nav className="ml-auto" navbar>
                //             <NavItem>
                //                 <NavLink href="/components/">Produk</NavLink>
                //             </NavItem>
                //                <NavItem>
                //                 <NavLink href="/components/">About</NavLink>
                //             </NavItem>
                //             <NavItem>
                //                 <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                //             </NavItem>
                //         </Nav>
                //     </Collapse>
                // </Navbar>

