import React, { Component, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

import { ToastContainer } from 'react-toastify';
import '../css/style.css'
import '../css/responsive.css'
// import '../css/navbar.css'
import $ from "jquery";
import { Link, Router } from 'react-router-dom';
import logo from '../images/logo.png';
import burger from '../images/burger.png';
import connect from '../images/connect.png';
import gcircle from '../images/gcircle.png';
import crosss from '../images/crosss.png';
import copyaddress from '../images/copyaddress.png';
import menu from '../images/menu.png';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount = () => {



    changePickupStoreMenu();

    function changePickupStoreMenu() {

      var body = $('body'),
        mask = $('<div class="mask"></div>'),
        toggleSlideRight = document.querySelector(".toggle-slide-right"),
        slideMenuRight = document.querySelector(".slide-menu-right"),
        activeNav = '';
      ;
      $('body').append(mask);

      /* slide menu right */
      toggleSlideRight.addEventListener("click", function () {
        $('body').addClass("smr-open");
        $('.mask').fadeIn();
        activeNav = "smr-open";
      });

      /* hide active menu if close menu button is clicked */
      $(document).on('click', ".close-menu", function (el, i) {
        $('body').removeClass(activeNav);
        activeNav = "";
        $('.mask').fadeOut();
      });

    }


  }

  render() {
    return (
      <div>
      <div className="header-dashboard">
        <div className="container">
          <div className="header-wrap">
            <div className="header-child1">
              <h3>DASHBOARD</h3>
            </div>
            <div className="header-child2">
              <Link to="#" className="back-btn1">BACK</Link>
            </div>
            <div className="header-c2">
          <div className="burger-area">
            <a href="#" className="burgers toggle-slide-right"> <img src={burger} /></a>
          </div>
        </div>
          </div>
        </div>
        
        <div className="menu slide-menu-right menu-list-wrp">
          <button class="close-menu"><img src={crosss} className="img-close" /></button>
          <ul className="menu-list2">
            <li href="#"> <i class="fas fa-desktop"></i><span>Create Data report</span></li>
            <li href="#"> <i class="fas fa-desktop"></i><span>view & Edit data report</span></li>
            <li href="#"> <i class="far fa-file-alt"></i><span>View PDF Report</span></li>
            <li href="#"> <i class="fab fa-creative-commons-sampling-plus"></i><span>View Live Session Info</span></li>
            <li href="#"> <i class="fas fa-desktop"></i><span>View Create, Edit Profile</span></li>
            <li href="#"> <i class="fas fa-atom"></i><span>Session Report Assembly</span></li>
            <li href="#"> <i class="fas fa-video"></i><span>Recording by Distributors</span></li>
            <li href="#"> <i class="fas fa-desktop"></i><span>Subscription Management</span></li>
            <li href="#"> <i class="fas fa-desktop"></i><span>Logout</span></li>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}


export default Header;