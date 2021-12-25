import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,

} from 'reactstrap';
import "./HeaderNav.css";
class HeaderNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return (
            <div>
                <Navbar
                    color="dark"
                    expand="md"
                    dark
                >
                    <NavbarBrand href="/">
                        <i className="fas fa-graduation-cap">{''}</i><span> Aryabhatta{''}</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/">
                                    <i className='fas fa-bars'></i>
                                </NavLink>
                            </NavItem>

                        </Nav>
                        <NavbarText className="user-setting">
                            <i className="fas fa-bell fa-lg"></i>
                            <UncontrolledDropdown >
                                <DropdownToggle nav>
                                    <i className="fas fa-user-cog"></i>
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        Change Passowrd
                                    </DropdownItem>
                                    <DropdownItem>
                                        Forgot password
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
} export default HeaderNav;