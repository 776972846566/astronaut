import React, { Component, useState, useEffect } from 'react';
import { Link, useParams, Router, NavLink } from 'react-router-dom';
import crosss from '../images/crosss.png';
import burger from '../images/burger.png';


const Sidebar = () => {


  return (
    <div>
      <div>
      <div class="sidebar2">
        <a href="#"> <i class="fas fa-desktop"></i><span>Create Data report</span></a>
        <a href="#"> <i class="fas fa-desktop"></i><span>view & Edit data report</span></a>
        <a href="#"> <i class="far fa-file-alt"></i><span>View PDF Report</span></a>
        <a href="#"> <i class="fab fa-creative-commons-sampling-plus"></i><span>View Live Session Info</span></a>
        <a href="#"> <i class="fas fa-desktop"></i><span>View Create, Edit Profile</span></a>
        <a href="#"> <i class="fas fa-atom"></i><span>Session Report Assembly</span></a>
        <a href="#"> <i class="fas fa-video"></i><span>Recording by Distributors</span></a>
        <a href="#"> <i class="fas fa-desktop"></i><span>Subscription Management</span></a>
        <a href="#"> <i class="fas fa-desktop"></i><span>Logout</span></a>
      </div>

      </div>

    </div>
  )
}

export default Sidebar;