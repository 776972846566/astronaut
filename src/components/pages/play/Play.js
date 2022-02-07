import React from 'react';
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import war3  from '../../images/war3.png';
import war4  from '../../images/war4.jpg';


const Play=()=>
{
return (
        <div>
            <div id="bg-pay">
                <Header />
               <div className="container">
                    <div className="row">
                            <div className="col-lg-6">
                                <div className="play-box">
                                    <img src={war3} alt="war" />
                                    <div className="play-btns">
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="play-box">
                                    <img src={war4} alt="war" />
                                    <div className="play-btns">
                                        <a href="#">Play Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
               </div>
            </div>
            <Footer />
        </div>
    );
}

 
export default Play;