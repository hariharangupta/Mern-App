import React from 'react'
import {Link, Switch, Route} from "react-router-dom"
import AllReport from './AllReport'
// import Card from './Card'
import EditReport from './EditReport'
import ModalForm from './ModalForm'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/modalform">CreateReport</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/card">Card</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/editreport">EditReport</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/allreports">AllReports</Link>
        </li>
      
        
      </ul>
      
    </div>
  </div>
</nav>

<Switch>
        <Route path='/modalform' exact={true} component={ModalForm} />
        <Route path = "/editreport" component = {EditReport} />
        {/* <Route path = "/card" component = {Card} /> */}
        <Route path = "/allreports"  component = {AllReport} />
      </Switch>


        </div>
    )
}

export default Navbar
