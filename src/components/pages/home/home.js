import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import Sidebar from '../sidebar.js';



class Home extends Component {
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
						<div className="right-section">
							<div className="wrapper fadeInDown">
								<div id="formContent">

									<h2 className="active"> LOGIN </h2>

									<form>
										<input type="text" name="login" placeholder="login" />
										<input type="password" name="login" placeholder="password" />
										<Link to="/list" className="login-btn">Log In</Link>
									</form>
									<div id="formFooter">
										<a className="underlineHover" href="#">Forgot Password?</a>
									</div>

								</div>
							</div>
						</div>
						</div>
					</div>
				</div >
			</div>


		);
	}

}
export default Home;