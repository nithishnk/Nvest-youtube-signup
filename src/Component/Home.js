import React, { Component } from 'react'
import './Home.css';
import Video from '../Component/Video'
import PopOver from '../Component/PopOver'

export default class Home extends Component {
  render() {
    return (
      <div className="">
     <center>
          <div className="text mr-top">
            <div className="t1">
              <h1 className="text1">Master new skills you can use today</h1></div>
            <div className="text2">Learn how to code websites, build apps and grow your business.</div>
          </div>   
          <div className="row mx-0">
          <div className="col-md-8">
         <Video/>
         </div>
         <div className="col-md-4 d-flex align-items-center">
         <PopOver/>
         </div> 
         </div>
        </center>
      </div>
    )
  }
}
 