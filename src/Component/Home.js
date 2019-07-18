import React, { Component } from 'react'
import './Home.css';
import Video from '../Component/Video'
import PopOver from '../Component/PopOver'
import Stepper from '../Component/Stepper'
import Logo from '../images/GX.png'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid ">
     <center>
     
          <div className="text mr-top">
            <div className="t1">
            <img className="log" src={Logo}></img>
              </div>
            {/*<div className="text2">Gatch This Video & Become A Market Maker Today</div>*/}
          </div>  
          <div className="fixed-bottom"> <Stepper/></div> 
       {/*   <div className="row mx-0">
          <div className="col-md-8">
         <Video/>
         </div>
         <div className="col-md-4 algnbt d-flex align-items-center">
         <PopOver/>
         </div> 
    </div>*/}
         
        </center>
      </div>
    )
  }
}
 