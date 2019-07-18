import React, { Component } from 'react'
import './Home.css';
import Video from '../Component/Video'
import PopOver from '../Component/PopOver'
import Stepper from '../Component/Stepper'
import Logo from '../images/GX.png'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
     <center>
     <img className="log" src={Logo}></img>
          <div className="text mr-top">
            <div className="t1">
              <h1 className="text1">Wondering What All The Hype Is About?</h1></div>
            <div className="text2">Watch This Video & Become A Market Maker Today</div>
          </div>  
          <div className=""> <Stepper/></div> 
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
 