import React from 'react'

export default function() {
    return (
          <header className="main-header">
            <a href="index2.html" className="logo">
              <span className="logo-mini"><b>A</b>LT</span>
              <span className="logo-lg"><b>logo</b></span>
            </a>
            <nav className="navbar navbar-static-top">
              <a href="#11" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
              </a>
                <div className="navbar-custom-menu">
                  <ul className="nav navbar-nav">
                    <li className="dropdown user user-menu">
                      <a href="#1" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="user" />
                        <span className="hidden-xs">Administrator</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="user-header">
                          <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="user" />
                        </li>
                        <li className="user-body">
                          <div className="row">
                            <div className="col-xs-4 text-center">
                              <a href="#1">Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                              <a href="#1">Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                              <a href="#1">Friends</a>
                            </div>
                          </div>
                        </li>
                        <li className="user-footer">
                          <div className="pull-left">
                            <a href="#1" className="btn btn-default btn-flat">Profile</a>
                          </div>
                          <div className="pull-right">
                            <a href="#1" className="btn btn-default btn-flat">Sign out</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#1" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
        
    )
}