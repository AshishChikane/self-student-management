import React from 'react';
import {
    Row,
    Col,

} from 'reactstrap';
import Aside from '../Aside/Aside';
import HeaderNav from '../HeaderNav/HeaderNav';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <HeaderNav />
                <div>
                    <Row>
                        <Col md='2'>
                            <Aside/>
                        </Col>
                        <Col>
                        Home Component
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
} export default Home;