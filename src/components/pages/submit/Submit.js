import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import Header from '../../pages/header.js';
import Sidebar from '../sidebar.js';

class Submit extends Component {
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
                <div className="container">
                    <div className="list-child">
                    <div id="app">
                    <div id="formContent">
                        <form >
                            <div className="sub-in"> 
                                <label for="name">Name:</label><br></br>
                                <input id="name" type="text1" v-model="name" required />
                            </div>
                            <div className="sub-in">
                                <label for="email">Email:</label><br></br>
                                <input id="email" type="email" v-model="email" required />
                            </div>
                            <div className="sub-in">
                                <label for="email">Number:</label><br></br>
                                <input id="number" type="text1" v-model="number" required />
                            </div>
                            <div className="sub-in">
                                <label for="email">Job Role:</label><br></br>
                                <input id="job Role" type="job Role" v-model="job Role" required />
                            </div>
                            <div className="sub-botton"> 
                            <Link to="/list" className="back-btn">Submit</Link>
                            </div>
                        </form>
                    </div>

                    </div>

                    </div>
                </div>
            </div>
            </div>
            </div>

        );
    }

}
export default Submit;
