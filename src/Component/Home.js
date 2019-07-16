import React, { Component } from 'react'
import './Home.css';
import Video from '../Component/Video'
import PopOver from '../Component/PopOver'

export default class Home extends Component {
  render() {
    return (
      <div className="containxr">
     <center>
          <div className="text mr-top">
            <div className="t1">
              <h1 className="text1">Master new skills you can use today</h1></div>
            <div className="text2">Learn how to code websites, build apps and grow your business. Turn your ideas into reality.</div>
          </div>   
          <div className="row mx-0">
          <div className="col-md-10">
         <Video/>
         </div>
         <div className="col-md-2 mar-t">
         <PopOver/>
         </div> 
         </div>
        </center>
      </div>
    )
  }
}
 {/*  <div className="container">
          <div className="col-md-12 col-sm-12 sze">
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
               
                <iframe width="340" height="190" right="20" src="https://www.youtube.com/embed/Tsy50WKhgdY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"></iframe>
    

              </div>
            </div>
          </div>

          <div className="cont lap">
          
          <i class="fa fa-play-circle videologo" data-toggle="modal" data-target="#exampleModalCenter" aria-hidden="true"></i>
          </div>
          </div>
          </div>*/}  
                
      {/*  <nav class="navbar fixed-top ">
          <div class="gxlogo">
            <img class="logo" style={{ height: "70px" }} src={Img} /></div>
            
          <div className="aln">
          <a class="btn btn-primary b1" href="#" role="button">Login</a>
          <a class="btn btn-primary b1" href="#" role="button">Sign Up</a>
          </div>
    </nav>*/}

    {/*     <div >
            <p class="text3">OVER HOURS OF LESSONS ON HOW TO CODE .</p>
          </div>
         <div className="container mr-tp">
            <form>
              <div class="row">
                <div class="col-md-4 col-sm-12">
                  <div class="form-group ">
                    <input type="text" class="form-control zx zv" placeholder="Your Name" />
                  </div>
               </div>
                <div class="col-md-4  col-sm-12">
                 <div class="form-group">
                   <input type="email" class="form-control zx zb" placeholder="Enter email" />
                  </div>
                </div>
                <div class="col-md-4  col-sm-12">
                  <button type="submit" class="btn btn-primary zx zc">Sign Up</button>
                </div>
             </div>
            </form>
    </div>*/}