import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Nav} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="50" alt="Ristorante Con Fusion"></img>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Home"><span class="fa fa-home fa-lg"></span>  Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/AboutUs"><span class="fa fa-info fa-lg"></span>  About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Menu"><span class="fa fa-list fa-lg"></span>  Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/ContactUs"><span class="fa fa-address-card fa-lg"></span>  Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspirantion from the World's best cuisines, and create a unique fusion experience. Our lip smacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Header;