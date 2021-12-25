import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,

} from "reactstrap";

import './Aside.css';
import { getCache, setCache } from '../Commans/Comman';

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeMenu: '' };
    }

    menuClick(menuURL) {
        setCache("activeMenu", menuURL);
    }

    componentDidMount() {
        this.setState({ activeMenu: getCache("activeMenu") });
    }

    render() {
        return (
            <div className="aside">
                <div>
                    <Nav vertical>
                        <NavItem active={this.state.activeMenu === '/dashboard'} className="mb-2" onClick={e => { this.menuClick("/dashboard") }}>
                            <NavLink href="/dashboard">
                                <i className="fas fa-tachometer-alt"><span className="menu-text">Dashboard</span></i>
                            </NavLink>
                        </NavItem>
                        <NavItem active={this.state.activeMenu === '/profile'} className="mb-2" onClick={e => { this.menuClick("/profile") }}>
                            <NavLink href="/profile">
                                <i className="fas fa-user-circle"><span className="menu-text">profile</span></i>
                            </NavLink>
                        </NavItem>

                        <NavItem active={this.state.activeMenu === '/regestration'} className="mb-2" onClick={e => { this.menuClick("/regestration") }}>
                            <NavLink href="/regestration">
                                <i className="fas fa-user-graduate"><span className="menu-text">Regestration</span></i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <hr />
                </div>
            </div>
        );
    }
} export default Aside;