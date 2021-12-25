import React from 'react';
import {
    Row,
    Col,

} from 'reactstrap';

import Aside from '../Aside/Aside';
import HeaderNav from '../HeaderNav/HeaderNav';
import { setCache } from "../Commans/Comman";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        setCache("activeMenu", "/dashboard");
    }


    render() {
        return (
            <div>
                <HeaderNav />
                <div>
                    <Row>
                        <Col md='2'>
                            <Aside />
                        </Col>
                        <Col>
                            Dashboard Component
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Dashboard;