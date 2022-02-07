import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import Header from '../../pages/header.js';
import Sidebar from '../sidebar.js';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount = () => {



    }

    render() {
        return (
            <div>
                <div className="bnr-bg12">
					<Header />
                    <div className="main-wrps">
						<div className="sidebarsection">
							<Sidebar />
						</div>
                <div className="list-bg">
                    <div className="container">
                        <div className="list-child">
                            <div className="eb-flex">
                                <caption>Employee Data</caption>
                                <div className="sabmit-btn">
                                    <Link to="/submit" className="back-btn">BACK</Link>
                                </div>
                            </div>

                            <table className="table-data">

                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">Job Role</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th scope="row">Salina Brown</th>
                                        <td>hello@salinabrown.com</td>
                                        <td>+19-0123456789</td>
                                        <td>Project Manager</td>
                                    </tr>
                                    <tr>

                                        <th scope="row">J.P. Espinal</th>
                                        <td>hello@jpespinal.com</td>
                                        <td>+19-0123456789</td>
                                        <td>Designer/Developer</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Robert Young</th>
                                        <td>hello@robertyoung.com</td>
                                        <td>+19-0123456789</td>
                                        <td>Nobody Knows</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Salina Brown</th>
                                        <td>hello@salinabrown.com</td>
                                        <td>+19-0123456789</td>
                                        <td>Project Manager</td>
                                    </tr>
                                    <tr>

                                        <th scope="row">J.P. Espinal</th>
                                        <td>hello@jpespinal.com</td>
                                        <td>+19-0123456789</td>
                                        <td>Designer/Developer</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Robert Young</th>
                                        <td>hello@robertyoung.com</td>
                                        <td>+19-0123456789</td>
                                        <td>Nobody Knows</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            </div >

        );
    }

}
export default List;
