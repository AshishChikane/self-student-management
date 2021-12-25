import React from 'react';
import { Label } from 'reactstrap';

import Aside from '../Aside/Aside';
import HeaderNav from '../HeaderNav/HeaderNav';
import { setCache } from "../Commans/Comman";

import {
    Row,
    Col,
    Form,
    FormGroup,
    Button,
    Input,
} from 'reactstrap';

import './Regestration.css';
class Regestration extends React.Component {
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
                            <Aside />
                        </Col>
                        <Col>
                            <div>
                                <Form action="/" className='Feildset' >
                                    <fieldset >
                                        <legend className='legend'>Student-Regestration:</legend><br></br><br></br>
                                        <label >First name:-</label>
                                        <input type="text" id="fname" name="fname" placeholder="First Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label >Middle name:-</label>
                                        <input type="text" id="mname" name="mname" placeholder="Middle Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label >Last name:-</label>
                                        <input type="text" id="lname" name="lname" placeholder="Last Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                                        <label >Email:-</label>
                                        <input type="email" id="email" name="email" placeholder="Email-id" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label >Date of birth:-</label>
                                        <input type="date" id="birthday" name="birthday" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label >Gender:-</label>
                                        <select id="Gender">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Transgender">Transgender</option>

                                        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                                        <label >Mob:-</label>
                                        <input type="text" id="mob" name="mob" placeholder="Mobile No." />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label >Address:-</label>
                                        <textarea id="add" name="add" rows="1" cols="50" placeholder='Address'>

                                       s </textarea>
                                        <br></br>

                                            <legend className='legend'>Parent-Regestration:</legend>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                                            <label >First name:-</label>
                                            <input type="text" id="fname" name="fname" placeholder="First Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label >Middle name:-</label>
                                            <input type="text" id="mname" name="mname" placeholder="Middle Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label >Last name:-</label>
                                            <input type="text" id="lname" name="lname" placeholder="Last Name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                                            <label >Email:-</label>
                                            <input type="email" id="email" name="email" placeholder="Email-id" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label >Date of birth:-</label>
                                            <input type="date" id="birthday" name="birthday" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label >Mob:-</label>
                                            <input type="text" id="mob" name="mob" placeholder="Mobile No." />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                                            <label >Address:-</label>
                                            <input type="add" id="add" name="add" placeholder="Address" />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                                            <input type="submit" value="Submit" />
                                    </fieldset>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
        );


    }
}
export default Regestration;